class home {
    constructor(x, y) {
        this.home = document.createElement('div');
        this.home.className += `home`;
        this.home.style.left = `${x}px`;
        this.home.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.home);
    }
    beFired(x, y) {
        if (x >=315  && x <= 345 && y >= 620) {
            this.ruin();
            return true;
        }
        return false;
    }
    ruin() {
        alert("失败");
        location.reload()
    }
}