const API_BASE = 'https://iit-playground.arondev.hu/api';

function loadNavigation(){
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHTML => {
            document.body.insertAdjacentHTML('afterbegin',navbarHTML);
        
            if (getNeptun()) {
                document.getElementById('navbar-right').classList.remove('hidden');
            }
        })
        
        .catch(err => {
            console.log(err);
            alert("Hiba a menürerndszer betöltésekor.");
        });
}

function getNeptun() {
    return localStorage.getItem('neptun') || '';
}

function setNeptun(code) {
    localStorage.setItem('neptun', code.toUpperCase());
}

function clearNeptun() {
    localStorage.removeItem('neptun');
}

function handleLogout() {
    clearNeptun();
    window.location.href = 'index.html';
}

function getCars(neptun) {
    return fetch(`${API_BASE}/${neptun}/car`)
        .then(res => res.json()); 
}

function getCarDetails(neptun, id) {
    return fetch(`${API_BASE}/${neptun}/car/${id}`)
        .then(res => res.json());
}

loadNavigation();