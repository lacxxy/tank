class Mytank extends Tank{
    constructor(x, y,level){
        super(x,y,level);
        this.speed=7
    }
    ruin() {
        tankArray.splice(tankArray.findIndex((item) => item === this), 1);
        this.canShot = false;
        clearInterval(this.Move);
        clearInterval(this.Fire);
        document.querySelector('.map').removeChild(this.tank);
        alert("失败!")
    }
}