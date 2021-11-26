const cube = document.getElementById('cube');
const cube2 = document.getElementById('cube2');
const cube3 = document.getElementById('cube3');
const play = document.getElementById('play');
const result = document.getElementById('result');
const coins = document.getElementById('money');
const bankrot = document.getElementById('bankrot');
let sum;
let money = 100;
let timer = false;
let hody = [];
var roll = new Audio();
roll.src = "media/bruh.mp3"
var win = new Audio();
win.src = "media/jackpot.mp3"


function luck(){
    if((hod + hod2 + hod3) >=12){
        money +=10;
        win.play();
        coins.innerHTML = `<div id="money"><b>Peníze: ${money}</b></div>`
    }
    else if(money == 0){
        lose.play();
        bankrot.innerHTML = `<div class="alert alert-danger velikost" role="alert">
        <strong>Nemáš peníze, pokud chceš pokračovat, resetuj stránku.</strong>
    </div>`
    }
}

function animace(){
    hod = Math.ceil(Math.random() * 6)
    cube.src = 'img/kostka' + hod + '.png';
    hod2 = Math.ceil(Math.random() * 6)
    cube2.src = 'img/kostka' + hod2 + '.png';
    hod3 = Math.ceil(Math.random() * 6)
    cube3.src = 'img/kostka' + hod3 + '.png';
}

play.addEventListener('click', ()=>{
    if (!timer && money >= 5){
        win.pause();
        win.currentTime = 0;
        money -=5;
        coins.innerHTML = `<div id="money"><b>Peníze: ${money}</b></div>`
        roll.play();
        hod = Math.ceil(Math.random() * 6);
        cube.src = `img/kostka${hod}.png`;
        hod2 = Math.ceil(Math.random() * 6);
        cube2.src = `img/kostka${hod2}.png`;
        hod3 = Math.ceil(Math.random() * 6);
        cube3.src = `img/kostka${hod3}.png`;
        timer = setInterval(animace, 200);
        setTimeout(stop,2700);
    }
    else if(!timer && money == 0){

    }
})

function stop(){
    clearInterval(timer);
    timer = false;
    hody.push(hod,hod2,hod3);
    console.log(hody);
    statistika();
    luck();
    hody.length = 0;
}
function suma(){
    let vysledek = 0;
    hody.forEach((value) => {
        vysledek += value;
    });
    return vysledek;
}
function minimum(){
    let min = 6;
    hody.forEach((value) => {
        if (value < min){
            min = value;
        }
        
    });
    return min;
}
function maximum(){
    let max = 1;
    hody.forEach((value) => {
        if (value > max){
            max = value;
        }
       
    }); 
    return max;
}

function statistika() {
    result.innerHTML = `<p>Aktuální hody: ${hod}, ${hod2}, ${hod3} </p>`;
    result.innerHTML += `<p>Součet hodů: ${suma()} </p>`;
    result.innerHTML += `<p>Nejmenší hod: ${minimum()} </p>`;
    result.innerHTML += `<p>Největší hod: ${maximum()} </p>`;
}

