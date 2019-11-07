var tankNum = 0;
class Tank {
    constructor(x, y) {
        this.tank = document.createElement('div');
        this.tank.className = `tank${tankNum}`;
        this.tank.className += ` tank`;
        this.tank.style.left = `${x}px`;
        this.tank.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.tank)
    }
    fire(){

    }
    move(dirc) {
        let lnum = this.tank.offsetLeft;
        let tnum = this.tank.offsetTop;
        switch (dirc) {
            case 'left':
                if (lnum <= 0) return;
                this.tank.style.left = `${lnum-2}px`;
                break
            case 'right':
                if (lnum >= 480)return;
                this.tank.style.left = `${lnum+2}px`;
                break
            case 'top':
                if (tnum <= 0) return;
                this.tank.style.top = `${tnum-2}px`;
                break
            case 'bottom':
                if (tnum >= 480) return;
                this.tank.style.top = `${tnum+2}px`;
                break
        }
    }
    autoMove() {
        let t;
        setInterval(() => {
            clearInterval(t);
            let arr = ['top', 'bottom', 'left', 'right'];
            let rand = Math.floor((Math.random() * 4));
            t=setInterval(()=>{
                this.move(arr[rand])
            },50);
        }, 2000)
    }
}



let tank0 = new Tank(100, 169);
let tank1 = new Tank(399, 65);
let tank2= new Tank(44,455);
tank1.autoMove()
tank2.autoMove()
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
};