class Mytank extends Tank{
    constructor(x, y){
        super(x,y);
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