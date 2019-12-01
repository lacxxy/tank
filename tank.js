class Tank {
    constructor(x, y,level) {
        if (!map.hasBlock(x, y, 'tank')) {
            this.dirc = 'top';
            this.tank = document.createElement('div');
            this.tank.className += `tank`;
            this.tank.className += ` tank`;
            this.tank.style.left = `${x}px`;
            this.tank.style.top = `${y}px`;
            this.Move;
            this.Fire;
            this.life=level;
            this.wholeLife=level;
            this.flag = 1; //0为我方坦克,1为敌方坦克
            this.canShot = true;
            document.querySelector('.map').appendChild(this.tank);
            return true;
        }
        return false
    }
    fire() {
        if (!this.canShot) return;
        new Bullet(this.dirc, this.tank.offsetLeft, this.tank.offsetTop, this);
        this.canShot = false;
    }
    move(dirc) {
        let lnum = this.tank.offsetLeft;
        let tnum = this.tank.offsetTop;
        this.dirc = dirc;
        switch (dirc) {
            case 'left':
                this.tank.style.webkitTransform = "rotate(-90deg)";
                if (lnum <= 7) return;
                if (map.hasBlock(lnum - 7, tnum, 'tank') || map.hasTank(lnum - 7, tnum, this)) {
                    return;
                }
                this.tank.style.left = `${lnum-7}px`;
                break
            case 'right':
                this.tank.style.webkitTransform = "rotate(90deg)";
                if (lnum >= 600) return;
                if (map.hasBlock(lnum + 7, tnum, 'tank') || map.hasTank(lnum + 7, tnum, this)) {
                    return;
                }
                this.tank.style.left = `${lnum+7}px`;
                break
            case 'top':
                this.tank.style.webkitTransform = "rotate(0deg)";
                if (tnum <= 7) return;
                if (map.hasBlock(lnum, tnum - 7, 'tank') || map.hasTank(lnum, tnum - 7, this)) {
                    return;
                }
                this.tank.style.top = `${tnum-7}px`;
                break
            case 'bottom':
                this.tank.style.webkitTransform = "rotate(180deg)";
                if (tnum >= 605) return;
                if (map.hasBlock(lnum, tnum + 7, 'tank') || map.hasTank(lnum, tnum + 7, this)) {
                    return;
                }
                this.tank.style.top = `${tnum+7}px`;
                break
        }
    }
    beFired() {
        if (this.life == 2) {
            this.ruin();
        }
        let rate=this.life/this.wholeLife;
        this.tank.style.opacity=`${rate}`
        this.life--;
        console.log(this.life)
    }
    autoMove() {
        let t;
        this.Move = setInterval(() => {
            clearInterval(t);
            let arr = ['top', 'bottom', 'left', 'right'];
            let rand = Math.floor((Math.random() * 4));
            t = setInterval(() => {
                this.move(arr[rand]);
            }, 50);
        }, 2000)
        this.Fire = setInterval(() => {
            this.fire()
        }, 1000)
    }
    ruin() {
        tankArray.splice(tankArray.findIndex((item) => item === this), 1);
        this.canShot = false;
        clearInterval(this.Move);
        clearInterval(this.Fire);
        document.querySelector('.map').removeChild(this.tank);
    }
}