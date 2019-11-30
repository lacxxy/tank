class Bullet {
    constructor(dirc, x, y, father) {
        this.bullet = document.createElement('div');
        this.bullet.className = 'bullet';
        this.father = father;
        let X, Y;
        switch (dirc) {
            case 'top':
                X = x + 18;
                Y = y-20;
                break;
            case 'bottom':
                X = x + 18;
                Y = y + 42;
                break;
            case 'left':
                X = x - 13;
                Y = y + 18;
                break;
            case 'right':
                X = x + 40;
                Y = y + 17;
                break;
        }
        this.bullet.style.left = `${X}px`;
        this.bullet.style.top = `${Y}px`;
        document.querySelector('.map').appendChild(this.bullet)
        this.dirc = dirc;
        this.flag = 0;
        bulletArray.push(this);
        setInterval(() => {
            this.move();
        }, 15);
        this.judge=setInterval(() => {
            if (map.beFired(this.bullet.offsetLeft, this.bullet.offsetTop,this.father.flag)) {
                this.ruin();
            }
        }, 0)
    }
    move() {
        let lnum = this.bullet.offsetLeft;
        let tnum = this.bullet.offsetTop;
        switch (this.dirc) {
            case 'left':
                if (lnum <= 0 || map.hasBlock(lnum - 8, tnum)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.left = `${lnum-8}px`;
                break
            case 'right':
                if (lnum >= 800 || map.hasBlock(lnum + 8, tnum)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.left = `${lnum+8}px`;
                break
            case 'top':
                if (tnum <= 0 || map.hasBlock(lnum, tnum - 8)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.top = `${tnum-8}px`;
                break
            case 'bottom':
                if (tnum >= 800 || map.hasBlock(lnum, tnum + 8)) {
                    this.ruin();
                    return;
                }
                this.bullet.style.top = `${tnum+8}px`;
                break
        }
    }
    ruin() {
        if (!this.flag) {
            bulletArray.splice(bulletArray.findIndex(item => item == this.bullet), 1)
            document.querySelector('.map').removeChild(this.bullet);
            clearInterval(this.judge)
            this.father.canShot = true
        }
        this.flag = 1;
    }
}