class hardWall {
    constructor(x, y) {
        this.hardWall = document.createElement('div');
        this.hardWall.className += `hardWall`;
        this.hardWall.style.left = `${x}px`;
        this.hardWall.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.hardWall);

        this.hardWall = document.createElement('div');
        this.hardWall.className += `hardWall`;
        this.hardWall.style.left = `${x+20}px`;
        this.hardWall.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.hardWall);

        this.hardWall = document.createElement('div');
        this.hardWall.className += `hardWall`;
        this.hardWall.style.left = `${x}px`;
        this.hardWall.style.top = `${y+20}px`;
        document.querySelector('.map').appendChild(this.hardWall);

        this.hardWall = document.createElement('div');
        this.hardWall.className += `hardWall`;
        this.hardWall.style.left = `${x+20}px`;
        this.hardWall.style.top = `${y+20}px`;
        document.querySelector('.map').appendChild(this.hardWall);
    }
}