var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

function start(){
    btn1.style.display = "none"
    btn2.style.display = "none"
}

function button3(){
    btn3.style.display = "none"
    btn2.style.display = "block"
}
function button2(){
    btn2.style.display = "none"
    btn1.style.display = "block"
}
function button1(){
    btn1.style.display = "none"
    btn3.style.display = "block"
}

function button4(){
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
    btn4.style.display = "none"
    document.getElementById("title").textContent = "Dacht ik al"
    document.getElementById("title").style.fontSize = "120px"
    document.body.style.backgroundImage = "url('https://media.nu.nl/m/bauxq2vavwtd_xwd1280.jpg/never-gonna-give-you-up-van-rick-astley-miljard-keer-bekeken-op-youtube.jpg')"
}