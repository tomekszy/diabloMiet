
var img = new Image();
img.src = 'img/dungeon_1_alpha.png';

var ctx = document.getElementById("game").getContext("2d");

ctx.drawImage(img, 1935, 512, 128, 64, 0, 0, 128, 64);