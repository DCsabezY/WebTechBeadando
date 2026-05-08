# BorsodTaxi – Flottakezelő Alkalmazás

Webtechnológiák beadandó feladat. Egy egyszerű, böngészőalapú flottakezelő rendszer, amellyel a BorsodTaxi taxi-vállalat járműparkját lehet kezelni.

## Funkciók

- **Bejelentkezés** Neptun-kóddal (6 alfanumerikus karakter)
- **Autólista** – a flotta összes járművének megtekintése
- **Részletek** – egy adott autó adatainak megtekintése
- **Új autó hozzáadása** – új jármű felvétele az adatbázisba
- **Autó szerkesztése** – meglévő jármű adatainak módosítása
- **Autó törlése** – jármű eltávolítása a flottából

## Technológiák

- HTML, CSS, JavaScript
- REST API kommunikáció (`fetch`)
- `localStorage` a bejelentkezett felhasználó (Neptun-kód) tárolásához

## Oldalak

| Fájl | Leírás |
|---|---|
| `index.html` | Bejelentkezési oldal |
| `cars.html` | Autólista |
| `car.html` | Autó részletei |
| `new-car.html` | Új autó hozzáadása |
| `edit-car.html` | Autó szerkesztése |
| `app.js` | Közös logika és API-hívások |
| `style.css` | Stílusok |

## Autó adatmezők

| Mező | Leírás |
|---|---|
| Márka | Legördülő listából választható (pl. Toyota, BMW) |
| Modell | Szabad szöveges mező |
| Tulajdonos | Teljes név (legalább egy szóközt kell tartalmaznia) |
| Üzembe helyezés | Dátum |
| Elektromos | Jelölőnégyzet |
| Fogyasztás (L/100km) | Csak nem elektromos autóknál kötelező |

## Használat

1. Nyisd meg az `index.html` fájlt egy böngészőben (vagy indíts egy helyi HTTP szervert).
2. Add meg a hiteles Neptun-kódodat a bejelentkezéshez(neptun kódnak szereplnie kell a rendszerben).
3. Kezeld a flotta járműveit a navigációs menü segítségével.

> **Megjegyzés:** A `localStorage`-ban tárolt Neptun-kód azonosítja a felhasználót az API felé. A „Kijelentkezés" gomb törli ezt az adatot.
