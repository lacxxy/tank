class MapBlock {
    constructor(x, y) {
        this.MapBlock = document.createElement('div');
        this.MapBlock.className += `mapBlock`;
        this.MapBlock.style.left = `${x}px`;
        this.MapBlock.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.MapBlock);
    }
}

function randNum() {
    return Math.floor(Math.random() * (760 - 340 + 1) + 40);
}
let map = new Map([
    [100, 175],
    [160, 175],
    [200, 175],
    [177, 333],
    [400, 400],
    [440, 400],
    [455, 200],
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
    [650, 470],
    [650, 510],
    [650, 615],
    [650, 556],
]);
let bulletArray = [];
let tank0 = new Tank(700, 709);
tank0.flag = 0;
let tankArray = [];
document.querySelector('.tank').className += " tank0";
for (let i = 0; i < 8;) {
    let x = randNum();
    let y = randNum();
    let t
    if (!map.hasTank(x, y, null)) {
        t = new Tank(x, y);
        if (t.dirc != undefined) {
            tankArray.push(t);
            i++;
        }
    }
}

tankArray.forEach(item => {
    item.autoMove();
})
tankArray.push(tank0)
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