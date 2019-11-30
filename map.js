class Map {
    constructor(mapArray) {
        this.map = mapArray;
    }
    ifHit(x, y, type) {
        if (x <= 0 || x >= 800) return false;
        if (y <= 0 || y >= 800) return false;
        if (this.hasBlock(x, y, type)) {
            return false;
        }
        return true;
    }
    hasBlock(x, y, type) {
        let l = (type == 'tank') ? 40 : 5;
        for (let item of this.map) {
            if (x >= item.softWall.offsetLeft - l && x <= item.softWall.offsetLeft + 60 && y >= item.softWall.offsetTop - l && y <= item.softWall.offsetTop + 60) {
                let w = item.softWall.offsetHeight;
                item.softWall.style.height=`${w-10}px`;
                return true;
            }
        }
        return false;
    }
    beFired(x, y, flag) {
        let midFlag = false;
        //flag为0时代表发射子弹的坦克是我方坦克,1时为敌方坦克
        for (let i in tankArray) {
            let item = tankArray[i];
            //item.flag为0时代表击中的是我方坦克
            if (flag == item.flag) {
                midFlag = false;
                continue
            }
            let itemX = item.tank.offsetLeft;
            let itemY = item.tank.offsetTop;
            if (x >= itemX - 10 && x <= itemX + 35 && y >= itemY && y <= itemY + 29) {
                item.beFired();
                midFlag = true;
                break;
            }
        }
        return midFlag;
    }
    hasTank(x, y, self) {
        let midFlag = false;
        for (let i in tankArray) {
            let item = tankArray[i];
            if (item == self) {
                continue;
            }
            let itemX = item.tank.offsetLeft;
            let itemY = item.tank.offsetTop;
            if (x >= itemX - 40 && x <= itemX + 40 && y >= itemY - 40 && y <= itemY + 40) {
                midFlag = true;
                break;
            }
        }
        return midFlag;
    }
}