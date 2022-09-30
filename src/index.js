import './style.css';

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'


// -Nem működik
//function urlBeolvas(){
    //let kepurl = document.getElementById('kepURL').value;
    //document.getElementById('URLmegjelenites').src += kepurl;
//}


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
    kep.border = kepKeret + "px";
}

function kepKeretSzin(){
    let szinbeolvas= document.getElementById('keretSzíne').value;
    let kep = document.getElementById('URLmegjelenites');
    kep.style.borderColor = String(szinbeolvas);
}


//document,getElementById('kepURL').addEventListener('change',urlBeolvas);

document.getElementById('keretSzelesseg').addEventListener('change', kepKeret);
document.getElementById('keretSzíne').addEventListener('change', kepKeretSzin);
document.getElementById('dark').addEventListener('click', darkMode);
document.getElementById('light').addEventListener('click', lightMode);

console.log('Betoltve');
