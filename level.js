
//canvas
var c = document.getElementById('game');
var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);

var img = new Image();
img.src = 'img/dungeon_1_alpha.png';

//get sprites
var tiles = {
    "ftb1": {
        x: 387,
        y: 1091,
        width: 128,
        height: 64
    },
    "floorTileCircle1": {
        x: 516,
        y: 511,
        width: 128,
        height: 64
    },
    "floorTileCircle2": {
        x: 645,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle3": {
        x: 774,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle4": {
        x: 903,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle5": {
        x: 1032,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle6": {
        x: 1161,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle7": {
        x: 1290,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle8": {
        x: 1419,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle9": {
        x: 1548,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle10": {
        x: 1677,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle11": {
        x: 1806,
        y: 512,
        width: 128,
        height: 64
    },
    "floorTileCircle12": {
        x: 1935,
        y: 512,
        width: 128,
        height: 64
    },
};

//to na razie nie
function getTile(tileName) {
    var chosenTile = this.tiles.filter(x => x.name === tileName);
    return getImagePortion(this.spritesBitmap, chosenTile.x, chosenTile.y, chosenTile.width, chosenTile.height);
};

function drawMap() {
    console.log(img);
    ctx.drawImage(img, 1935, 512, 128, 64, 0, 0, 128, 64);
    for (i = 0; i < this.map.length; i++) {
        for (j = 0; j < this.map[i].length; j++) {
            console.log('1');
            ctx.drawImage(
                this.img,
                this.tiles[this.map[i][j]].x,
                this.tiles[this.map[i][j]].y,
                this.tiles[this.map[i][j]].width,
                this.tiles[this.map[i][j]].height,
                i * this.tiles[this.map[i][j]].width,
                j * this.tiles[this.map[i][j]].height,
                this.tiles[this.map[i][j]].width,
                this.tiles[this.map[i][j]].height
            );
        }
    }


}

drawMap();