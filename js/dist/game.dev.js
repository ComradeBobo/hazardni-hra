"use strict";

var cube = document.getElementById('cube');
var cube2 = document.getElementById('cube2');
var cube3 = document.getElementById('cube3');
var play = document.getElementById('play');
var result = document.getElementById('result');
var coins = document.getElementById('money');
var bankrot = document.getElementById('bankrot');
var sum;
var money = 100;
var timer = false;
var hody = [];
var roll = new Audio();
roll.src = "media/bruh.mp3";
var win = new Audio();
win.src = "media/jackpot.mp3";

function luck() {
  if (hod + hod2 + hod3 >= 12) {
    money += 10;
    win.play();
    coins.innerHTML = "<div id=\"money\"><b>Pen\xEDze: ".concat(money, "</b></div>");
  } else if (money == 0) {
    lose.play();
    bankrot.innerHTML = "<div class=\"alert alert-danger velikost\" role=\"alert\">\n        <strong>Nem\xE1\u0161 pen\xEDze, pokud chce\u0161 pokra\u010Dovat, resetuj str\xE1nku.</strong>\n    </div>";
  }
}

function animace() {
  hod = Math.ceil(Math.random() * 6);
  cube.src = 'img/kostka' + hod + '.png';
  hod2 = Math.ceil(Math.random() * 6);
  cube2.src = 'img/kostka' + hod2 + '.png';
  hod3 = Math.ceil(Math.random() * 6);
  cube3.src = 'img/kostka' + hod3 + '.png';
}

play.addEventListener('click', function () {
  if (!timer && money >= 5) {
    win.pause();
    win.currentTime = 0;
    money -= 5;
    coins.innerHTML = "<div id=\"money\"><b>Pen\xEDze: ".concat(money, "</b></div>");
    roll.play();
    hod = Math.ceil(Math.random() * 6);
    cube.src = "img/kostka".concat(hod, ".png");
    hod2 = Math.ceil(Math.random() * 6);
    cube2.src = "img/kostka".concat(hod2, ".png");
    hod3 = Math.ceil(Math.random() * 6);
    cube3.src = "img/kostka".concat(hod3, ".png");
    timer = setInterval(animace, 200);
    setTimeout(stop, 2700);
  } else if (!timer && money == 0) {}
});

function stop() {
  clearInterval(timer);
  timer = false;
  hody.push(hod, hod2, hod3);
  console.log(hody);
  statistika();
  luck();
  hody.length = 0;
}

function suma() {
  var vysledek = 0;
  hody.forEach(function (value) {
    vysledek += value;
  });
  return vysledek;
}

function minimum() {
  var min = 6;
  hody.forEach(function (value) {
    if (value < min) {
      min = value;
    }
  });
  return min;
}

function maximum() {
  var max = 1;
  hody.forEach(function (value) {
    if (value > max) {
      max = value;
    }
  });
  return max;
}

function statistika() {
  result.innerHTML = "<p>Aktu\xE1ln\xED hody: ".concat(hod, ", ").concat(hod2, ", ").concat(hod3, " </p>");
  result.innerHTML += "<p>Sou\u010Det hod\u016F: ".concat(suma(), " </p>");
  result.innerHTML += "<p>Nejmen\u0161\xED hod: ".concat(minimum(), " </p>");
  result.innerHTML += "<p>Nejv\u011Bt\u0161\xED hod: ".concat(maximum(), " </p>");
}