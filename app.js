const API_BASE = 'https://iit-playground.arondev.hu/api';

const CAR_BRANDS = [
    'Toyota','Honda','Ford','Chevrolet','Nissan',
    'BMW','Mercedes-Benz','Volkswagen','Audi','Hyundai',
    'Kia','Subaru','Lexus','Mazda','Tesla',
    'Jeep','Porsche','Volvo','Jaguar','Land Rover',
    'Mitsubishi','Ferrari','Lamborghini'
];

function loadNavigation(){
    fetch('./navbar.html')
        .then(res => res.text())
        .then(navbarHTML => {
            document.body.insertAdjacentHTML('afterbegin',navbarHTML);
        
            if (getNeptun()) {
                document.getElementById('navbar-right').classList.remove('hidden');
            }
            if (window.location.pathname.endsWith('cars.html')) {
                document.getElementById('new-car-btn').classList.remove('hidden');
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
        .then(res => {
            if (!res.ok) throw new Error(`Szerverhiba: ${res.status}`);
            return res.json();
        }); 
}

function getCarDetails(neptun, id) {
    return fetch(`${API_BASE}/${neptun}/car/${id}`)
        .then(res => {
            if (!res.ok) throw new Error(`Szerverhiba: ${res.status}`);
            return res.json();
        });
}

function createCar(neptun, carData) {
    return fetch(`${API_BASE}/${neptun}/car`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData)
    }).then(res => {
        if (!res.ok) throw new Error(`Szerverhiba: ${res.status}`);
        return res.json();
    });
}

function fillBrandSelect(selectId) {
    const select = document.getElementById(selectId);
    CAR_BRANDS.forEach(brand => {
        select.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
}

function deleteCar(neptun, id) {
    return fetch(`${API_BASE}/${neptun}/car/${id}`, {
        method: 'DELETE'
    }).then(res => {
        if (!res.ok) throw new Error(`Szerverhiba: ${res.status}`);
        return res.json();
    });

}

function updateCar(neptun, id, carData) {
    return fetch(`${API_BASE}/${neptun}/car`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData)
    }).then(res => {
        if (!res.ok) throw new Error(`Szerverhiba: ${res.status}`);
        return res.json();
    });
}

loadNavigation();