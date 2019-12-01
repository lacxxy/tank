function randNum() {
    return Math.floor(Math.random() * (560 - 50 + 1) + 40);
}
let Home=new home(315,620);
let arr = [];
arr.push(new softWall(270, 620),new softWall(270, 590),new softWall(360, 620),new softWall(360, 590),new softWall(300, 590),new softWall(330, 590),)
for (let i = 100; i < 550; i += 135) {
    for (let j = 100; j < 480; j += 30) {
        arr.push(new softWall(i, j), new softWall(i + 30, j))
    }
}
arr.push(
    new hardWall(300, 420),
    new hardWall(190, 230),
    new hardWall(300, 80),
    new hardWall(260, 50),
    new hardWall(45, 450),
    new hardWall(440,250),
    new hardWall(450, 400),
)
let map = new Map(arr);
let bulletArray = [];
let tank0 = new Mytank(500, 600);
tank0.flag = 0;
let tankArray = [];
document.querySelector('.tank').className += " tank0";
for (let i = 0; i < 4;) {
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