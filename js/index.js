function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function randNum() {
    return Math.floor(Math.random() * (560 - 50 + 1) + 40);
}

function creatBlock(x, y) {
    return [
        new softWall(x, y), new softWall(x + 30, y), new softWall(x, y + 30), new softWall(x + 30, y + 30)
    ];
}
let tankNum = 6;
let level = getQueryVariable("level");
if (!level) level = 0;
let Home = new home(315, 620);
let arr = [];
arr.push(new softWall(270, 620), new softWall(270, 590), new softWall(360, 620), new softWall(360, 590), new softWall(300, 590), new softWall(330, 590), )
let map = new Map(arr);
let bulletArray = [];
let tank0 = new Mytank(500, 600, 4);
tank0.flag = 0;
let tankArray = [];
document.querySelector('.tank').className += " tank0";
for (let i = 0; i < 10;) {
    let x = randNum();
    let y = randNum();
    if (!map.hasBlock(x, y, 'tank')) {
        arr.push(...creatBlock(x, y));
        i++;
    }
}
for (let i = 0; i < 6;) {
    let x = randNum();
    let y = randNum();
    if (!map.hasBlock(x, y, 'tank')) {
        arr.push(new hardWall(x, y), );
        i++;
    }
}
for (let i = 0; i < 6;) {
    let x = randNum();
    let y = randNum();
    if (!map.hasBlock(x, y, 'tank')) {
        new tree(x, y);
        i++;
    }
}
for (let i = 0; i < 6;) {
    let x = randNum();
    let y = randNum();
    if (y > 300) continue;
    let t
    if (!map.hasTank(x, y, null)) {
        t = new Tank(x, y, parseInt(level) + 4);
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

setInterval(() => {
    if (tankArray.length==1) {
        if (level == 5) {
            alert("恭喜通关!!!!!");
            window.location.href = window.location.pathname;
        }
        window.location.href = `${window.location.pathname}?level=${parseInt(level)+1}`
    }
    if (tankArray.length < 7&&tankNum <=10) {
        for (let i = 0; i < 1;) {
            let x = randNum();
            let y = randNum();
            if (y > 300) continue;
            let t;
            if (!map.hasTank(x, y, null)) {
                t = new Tank(x, y, parseInt(level) + 4);
                if (t.dirc != undefined) {
                    tankArray.push(t);
                    t.autoMove()
                    tankNum++;
                    i++;
                }
            }
        }
    }
}, 0)

var direction = {
    left: false,
    top: false,
    right: false,
    bottom: false,
    fire: false
};
setInterval(function () {
    if (direction.left) {
        tank0.move('left')
    } else if (direction.top) {
        tank0.move('top')
    } else if (direction.right) {
        tank0.move('right')
    } else if (direction.bottom) {
        tank0.move('bottom')
    } else if (direction.fire) {
        tank0.fire()
    }
}, 50);

document.onkeydown = function (event) {
    direction = {
        left: false,
        top: false,
        right: false,
        bottom: false,
        fire: false,
    };
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 40) {
        direction.bottom = true;
    }
    if (e && e.keyCode == 37) {
        direction.left = true;
    }
    if (e && e.keyCode == 39) {
        direction.right = true;
    }
    if (e && e.keyCode == 38) {
        direction.top = true;
    }
    if (e && e.keyCode == 32) {
        direction.fire = true;
    }
};
document.onkeyup = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 40) {
        direction.bottom = false;
    }
    if (e && e.keyCode == 37) {
        direction.left = false;
    }
    if (e && e.keyCode == 39) {
        direction.right = false;
    }
    if (e && e.keyCode == 38) {
        direction.top = false;
    }
    if (e && e.keyCode == 32) {
        direction.fire = false;
    }
}