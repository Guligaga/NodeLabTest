const {maze, DIRECTIONS, WAY, WALL, HERO} = require('./constants')

function getPosition(maze, hero) {
    const row = maze.find(row => row.includes(HERO))
    const y = maze.indexOf(row);
    const x = row.indexOf(hero);
    return {x, y}
}

function getRoad(maze, position, direction) {
    const { x, y } = position;
    if (!x || x === maze[0].length - 1) {
        return maze[y][x] === WAY ? [] : null;
    } else if (!y || y === maze.length - 1) {
        return maze[y][x] === WAY ? [] : null;
    }

    if(!direction || maze[y][x] === WAY) {
        let res = null;
        DIRECTIONS.filter(dir => direction !== dir.exclude).forEach(dir => {

            const positionUpd = {
                x: x + dir.x,
                y: y + dir.y
            }
            const roadUpd = getRoad(maze, positionUpd, dir.name);
            if(roadUpd) {
                res = dir.name !== direction ? [dir.name].concat(roadUpd) : roadUpd;
            }
        })
        return res;
    } else {
        return null
    }
}

const startPosition = getPosition(maze, HERO)
const road = getRoad(maze, startPosition);
console.log(road);