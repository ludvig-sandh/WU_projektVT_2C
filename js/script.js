const burger = document.querySelector('.burger');
const nav = document.querySelector('.navLinks');
const nl1 = document.querySelector('#navLink1');
const nl2 = document.querySelector('#navLink2');
const nl3 = document.querySelector('#navLink3');
const nl4 = document.querySelector('#navLink4');

function toggleMeny() {
    nav.classList.toggle('navActive');
    burger.classList.toggle('toggle');
}

function toggleHamburgerVisible() {
    if (burger.classList.contains('toggle')) {
        toggleMeny();
    }
}

if (burger) {
    burger.addEventListener('click', toggleMeny);
    nl1.addEventListener('click', toggleMeny);
    nl2.addEventListener('click', toggleMeny);
    nl3.addEventListener('click', toggleMeny);
    nl4.addEventListener('click', toggleMeny);
    
    var x = window.matchMedia("(min-width: 1025px)");
    toggleHamburgerVisible(x);
    x.addListener(toggleHamburgerVisible);
}

class bokning {
    static setMaskin(maskin) {
        let bokningar = localStorage.bokningar;
        let key = "maskin" + String(bokningar);
        localStorage.setItem(key, maskin);
    }

    static setDatum(datum) {
        let bokningar = localStorage.bokningar;
        let key = "datum" + String(bokningar);
        localStorage.setItem(key, datum);
    }

    static setTidA(tidA) {
        let bokningar = localStorage.bokningar;
        let keyA = "tidA" + String(bokningar);
        localStorage.setItem(keyA, tidA);
    }

    static setTidB(tidB) {
        let bokningar = localStorage.bokningar;
        let keyB = "tidB" + String(bokningar);
        localStorage.setItem(keyB, tidB);
    }

    static setName(name) {
        let bokningar = localStorage.bokningar;
        let key = "name" + String(bokningar);
        localStorage.setItem(key, name);
    }
    

    static getMaskin() {
        let bokningar = localStorage.bokningar;
        let key = "maskin" + String(bokningar);
        return localStorage.getItem("maskin" + String(bokningar));
    }

    static getDatum() {
        let bokningar = localStorage.bokningar;
        let key = "datum" + String(bokningar);
        return localStorage.getItem(key);
    }

    static getTidA() {
        let bokningar = localStorage.bokningar;
        let keyA = "tidA" + String(bokningar);
        return localStorage.getItem(keyA);
    }

    static getTidB() {
        let bokningar = localStorage.bokningar;
        let keyB = "tidB" + String(bokningar);
        return localStorage.getItem(keyB);
    }

    static getName() {
        let bokningar = localStorage.bokningar;
        let key = "name" + String(bokningar);
        return localStorage.getItem(key);
    }
}

const maskinA = document.querySelector('#maskinA');
const maskinB = document.querySelector('#maskinB');
const maskinC = document.querySelector('#maskinC');
const maskinD = document.querySelector('#maskinD');
const maskinE = document.querySelector('#maskinE');
const maskinF = document.querySelector('#maskinF');

function clickA() {
    createBokning("A");
}

function clickB() {
    createBokning("B");
}

function clickC() {
    createBokning("C");
}

function clickD() {
    createBokning("D");
}

function clickE() {
    createBokning("E");
}

function clickF() {
    createBokning("F");
}

function createBokning(maskin) {
    console.log("Create" + maskin);
    if (localStorage.bokningar) {
        localStorage.bokningar = Number(localStorage.bokningar) + 1;
    }else {
        localStorage.bokningar = 1;
    }

    bokning.setMaskin(maskin);
    console.log("BOKNINGAR: " + localStorage.bokningar)
    console.log("MASKIN: " + bokning.maskin);
}

if (maskinA) {
    maskinA.addEventListener('click', clickA);
    maskinB.addEventListener('click', clickB);
    maskinC.addEventListener('click', clickC);
    maskinD.addEventListener('click', clickD);
    maskinE.addEventListener('click', clickE);
    maskinF.addEventListener('click', clickF);
}

const bokningsBeskrivning = document.querySelector('.bokningsBeskrivning');
if (bokningsBeskrivning) {
    slutText = "";
    let bokningar = localStorage.bokningar;
    if (bokningar) {
        let maskin = bokning.getMaskin();
        if (maskin) {
            slutText += "Du har valt skrivare " + maskin;
            let datum = bokning.getDatum();
            console.log("DATUM: " + datum);
            if (datum) {
                slutText += ", " + datum;
                let tidA = bokning.getTidA();
                if (tidA) {
                    let tidB = bokning.getTidB();
                    slutText += ", " + tidA + " - " + tidB;
                }
            }
        }
    }
    bokningsBeskrivning.innerHTML = slutText;
}

const dateInput = document.querySelector('#dateInput');
if (dateInput) {
    dateInput.addEventListener('change', function() {
        let input = this.value;
        bokning.setDatum(input);
    });
}

const timeAInput = document.querySelector('#inputTidA');
if (timeAInput) {
    timeAInput.addEventListener('change', function() {
        let input = this.value;
        bokning.setTidA(input);
    });
}

const timeBInput = document.querySelector('#inputTidB');
if (timeBInput) {
    timeBInput.addEventListener('change', function() {
        let input = this.value;
        bokning.setTidB(input);
    });
}

const nameInput = document.querySelector('#nameInput');
if (nameInput) {
    nameInput.addEventListener('input', function() {
        let input = this.value;
        bokning.setName(input);
    });
}

const bokningKlarBeskrivning = document.querySelector('.bokningKlarBeskrivning');
if (bokningKlarBeskrivning) {
    slutText = "";
    let bokningar = localStorage.bokningar;
    if (bokningar) {
        let maskin = bokning.getMaskin();
        if (maskin) {
            slutText += "Du har bokat skrivare " + maskin;
            let datum = bokning.getDatum();
            console.log("DATUM: " + datum);
            if (datum) {
                slutText += ", " + datum;
                let tidA = bokning.getTidA();
                if (tidA) {
                    let tidB = bokning.getTidB();
                    slutText += ", " + tidA + " - " + tidB;
                    let name = bokning.getName();
                    if (name) {
                        slutText += ", under \"" + name + "\"";
                    }
                }
            }
        }
    }
    bokningKlarBeskrivning.innerHTML = slutText;
}
