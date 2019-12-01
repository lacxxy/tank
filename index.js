function randNum() {
    return Math.floor(Math.random() * (760 - 340 + 1) + 40);
}
let map = new Map([
    new softWall(100, 175),
    new softWall(160, 175),
    new softWall(200, 175),
    new softWall(177, 333),
    new softWall(400, 400),
    new softWall(440, 400),
    new softWall(455, 200),
    new softWall(560, 120),
    new softWall(600, 120),
    new softWall(640, 120),
    new softWall(680, 120),
    new softWall(111, 500),
    new softWall(111, 540),
    new softWall(111, 460),
    new softWall(399, 12),
    new softWall(200, 650),
    new softWall(700, 153),
    new softWall(740, 153),
    new softWall(421, 755),
    new softWall(650, 470),
    new softWall(650, 510),
    new softWall(650, 615),
    new softWall(650, 556),
]);
let bulletArray = [];
let tank0 = new Mytank(700, 709);
tank0.flag = 0;
let tankArray = [];
document.querySelector('.tank').className += " tank0";
for (let i = 0; i < 0;) {
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