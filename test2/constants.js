const HERO = '0';
const WAY = '+';
const WALL = '#';

const maze = [

    ['#','#','#','#','#','#','#','#','#'],
    ['#','+','+','+','#','+','+','+','#'],
    ['#','+','#','+','#','+','#','+','#'],
    ['+','+','#','+','0','+','#','+','#'],
    ['#','#','#','+','#','#','#','#','#'],
    ['#','#','+','+','#','#','#','#','#'],
    ['#','#','+','#','#','#','#','#','#'],
    ['#','#','#','#','#','#','#','#','#'],
  
];

const DIRECTIONS = [
    { 
        name: 'top', 
        x: 0,
        y: -1, 
        exclude: 'bottom'
    },
    { 
        name: 'left', 
        x: -1,
        y: 0, 
        exclude: 'right'
    },
    { 
        name: 'right', 
        x: 1,
        y: 0, 
        exclude: 'left'
    },
    { 
        name: 'bottom', 
        x: 0,
        y: 1, 
        exclude: 'top'
    },
]


module.exports = {
    HERO,
    WAY,
    WALL,
    DIRECTIONS,
    maze,
};