import './style.css';

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'





function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function kepKeret(){
    let kepKeret = document.getElementById('keretSzelesseg').value;
    let kep = document.getElementById('URLmegjelenites');
    kep.border = kepKeret + "px solid black"
}

function kepKeretSzin(){
    let szinbeolvas= document.getElementById('keretSzíne').value;
    let kep = document.getElementById('URLmegjelenites');
    kep.style.borderColor = String(szinbeolvas);
}



document.getElementById('keretSzelesseg').addEventListener('change', kepKeret);
document.getElementById('keretSzíne').addEventListener('change', kepKeretSzin)
document.getElementById('dark').addEventListener('click', darkMode);
document.getElementById('light').addEventListener('click', lightMode);

console.log('Betoltve')
