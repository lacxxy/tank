class Tank {
    constructor(x, y) {
        if (!map.hasBlock(x, y, 'tank')) {
            this.dirc = 'top';
            this.tank = document.createElement('div');
            this.tank.className += `tank`;
            this.tank.className += ` tank`;
            this.tank.style.left = `${x}px`;
            this.tank.style.top = `${y}px`;
            this.canShot = true;
            document.querySelector('.map').appendChild(this.tank);
            return true;
        }
        return false
    }
    fire() {
        if (!this.canShot) return;
        new Bullet(this.dirc, this.tank.offsetLeft+13, this.tank.offsetTop+13);
        this.canShot = false;
        setTimeout(() => {
            this.canShot = true;
        }, 700);
    }
    move(dirc) {
        let lnum = this.tank.offsetLeft;
        let tnum = this.tank.offsetTop;
        this.dirc = dirc;
        switch (dirc) {
            case 'left':
                if (lnum <= 0) return;
                if (map.hasBlock(lnum - 3, tnum, 'tank')) {
                    return;
                }
                this.tank.style.left = `${lnum-3}px`;
                this.tank.style.webkitTransform = "rotate(-90deg)";
                break
            case 'right':
                if (lnum >= 768) return;
                if (map.hasBlock(lnum + 3, tnum, 'tank')) {
                    return;
                }
                this.tank.style.left = `${lnum+3}px`;
                this.tank.style.webkitTransform = "rotate(90deg)";
                break
            case 'top':
                if (tnum <= 0) return;
                if (map.hasBlock(lnum, tnum - 3, 'tank')) {
                    return;
                }
                this.tank.style.top = `${tnum-3}px`;
                this.tank.style.webkitTransform = "rotate(0deg)";
                break
            case 'bottom':
                if (tnum >= 768) return;
                if (map.hasBlock(lnum, tnum + 3, 'tank')) {
                    return;
                }
                this.tank.style.top = `${tnum+3}px`;
                this.tank.style.webkitTransform = "rotate(180deg)";
                break
        }
    }
    autoMove() {
        let t;
        setInterval(() => {
            clearInterval(t);
            let arr = ['top', 'bottom', 'left', 'right'];
            let rand = Math.floor((Math.random() * 4));
            t = setInterval(() => {
                this.move(arr[rand]);
                this.fire()
            }, 50);
        }, 2000)
    }
}

class Bullet {
    constructor(dirc, x, y) {
        this.bullet = document.createElement('div');
        this.bullet.className = 'bullet';
        this.bullet.style.left = `${x}px`;
        this.bullet.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.bullet)
        this.dirc = dirc;
        this.flag = 0;
        setInterval(() => {
            this.move();
        }, 20);
    }
    move() {
        let lnum = this.bullet.offsetLeft;
        let tnum = this.bullet.offsetTop;
        switch (this.dirc) {
            case 'left':
                if (lnum <= 0 || map.hasBlock(lnum - 3, tnum)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.left = `${lnum-3}px`;
                break
            case 'right':
                if (lnum >= 800 || map.hasBlock(lnum + 3, tnum)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.left = `${lnum+3}px`;
                break
            case 'top':
                if (tnum <= 0 || map.hasBlock(lnum, tnum - 3)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.top = `${tnum-3}px`;
                break
            case 'bottom':
                if (tnum >= 800 || map.hasBlock(lnum, tnum + 3)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.top = `${tnum+3}px`;
                break
        }
    }
    ruin() {
        if (!this.flag) {
            document.querySelector('.map').removeChild(this.bullet);
        }
        this.flag = 1;
    }
}

class Map {
    constructor(mapArray) {
        this.map = mapArray;
        mapArray.map(item => {
            new MapBlock(item[0], item[1]);
        })
    }
    hasBlock(x, y, type) {
        let l = (type == 'tank') ? 30 : 3;
        for (let item of this.map) {
            if (x >= item[0] - l && x <= item[0] + 39 && y >= item[1] - l && y <= item[1] + 39) return true;
        }
        return false;
    }
}
class MapBlock {
    constructor(x, y) {
        this.MapBlock = document.createElement('div');
        this.MapBlock.className += `mapBlock`;
        this.MapBlock.style.left = `${x}px`;
        this.MapBlock.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.MapBlock);
    }
}

function randNum(){
    return Math.floor(Math.random()*(760-40+1)+40);
}
let map = new Map([
    [100, 175],
    [177, 333],
    [400, 400],
    [440, 400],
    [455,200],
    [560, 120],
    [600, 120],
    [640, 120],
    [680, 120],
    [111, 500],
    [111, 540],
    [111, 460],
    [399, 12],
    [200, 650],
    [700, 153],
    [740, 153],
    [421, 755],
    [750, 615],
    [717, 566],
]);
let tankArray=[];
let tank0 = new Tank(700, 709);
document.querySelector('.tank').className += " tank0";
for(let i=0;i<6;){
    let t=new Tank(randNum(), randNum());
    console.log(t.dirc)
    if(t.dirc!=undefined){
        tankArray.push(t);
        i++;
    }
}
tankArray.forEach(item=>{
    item.autoMove();
})
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 40) {
        tank0.move('bottom')
    }
    if (e && e.keyCode == 37) {
        tank0.move('left')
    }
    if (e && e.keyCode == 39) {
        tank0.move('right')
    }
    if (e && e.keyCode == 38) {
        tank0.move('top')
    }
    if (e && e.keyCode == 32) {
        tank0.fire()
    }
};