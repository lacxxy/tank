class softWall {
    constructor(x, y) {
        this.softWall = document.createElement('div');
        this.softWall.className += `softWall`;
        this.softWall.style.left = `${x}px`;
        this.softWall.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.softWall);
    }
    ruin() {
        document.querySelector('.map').removeChild(this.softWall);
    }
}