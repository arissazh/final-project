let ball, floor, walls;
// let balltypes = {'white': 20, 'lightblue': 50, 'lightpink': 60};
let outLine;
let grape, cherry, orange, lemon, kiwi, tomato, peach, starfruit, coconut, melon, watermelon;
var score = 0;

window.setup = () => {
    createCanvas(windowWidth / 4, windowHeight);
    world.gravity.y = 10;

    floor = new Sprite();
    floor.y = height;
    floor.w = width;
    floor.h = 20;
    floor.color = 'rgb(128, 94, 82)';
    floor.stroke = 'none';
    floor.collider = 'static';

    outLine = new Sprite();
    outLine.width = width;
    outLine.y = 50;
    outLine.height = 5;
    outLine.stroke = 'none';
    outLine.color = 'rgb(235, 64, 52)';
    outLine.collider = 'static';
    

    setupBounds();

    ball = new Group();
    // ball.stroke = 'none';

    grape = new ball.Group();
    grape.diameter = 20;
    grape.img = 'assets/grape.png';
    grape.color = 'purple';

    cherry = new ball.Group();
    cherry.diameter = 30;
    cherry.img = 'assets/cherry.png';
    cherry.color = 'red';

    orange = new ball.Group();
    orange.diameter = 45;
    orange.img = 'assets/orange.png';
    orange.color = 'orange';

    lemon = new ball.Group();
    lemon.diameter = 55;
    lemon.img = 'assets/lemon.png';
    lemon.color = 'yellow';

    kiwi = new ball.Group();
    kiwi.diameter = 70;
    kiwi.img = 'assets/kiwi.png';
    kiwi.color = 'green';

    tomato = new ball.Group();
    tomato.diameter = 85;
    tomato.img = 'assets/tomato.png';
    tomato.color = 'rgb(219,196,255)';

    peach = new ball.Group();
    peach.diameter = 100;
    peach.img = 'assets/peach.png';
    peach.color = 'pink';

    starfruit = new ball.Group();
    starfruit.diameter = 150;
    starfruit.img = 'assets/starfruit.png';
    starfruit.color = 'light yellow';

    coconut = new ball.Group();
    coconut.diameter = 185;
    coconut.img = 'assets/coconut.png';
    coconut.color = 'white';

    melon = new ball.Group();
    melon.diameter = 200;
    melon.img = 'assets/melon.png';
    melon.color = 'green';

    watermelon = new ball.Group();
    watermelon.diameter = 250;
    watermelon.img = 'assets/watermelon.png';
    watermelon.color = 'red';

};

function setupBounds() {
    walls = new Sprite(
      [
        [0, 0],
        [width, 0],
        [width, height],
        [0, height],
        [0, 1],
      ],
      "static"
    );
  
    walls.color = 'purple';

  }

function combine(ball1, ball2) {
    if (ball1.diameter == 20) {
        new cherry.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 2;
    }
    if (ball1.diameter == 30) {
        new orange.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 4;
    }
    if (ball1.diameter == 45) {
        new lemon.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 8;
    }
    if (ball1.diameter == 55) {
        new kiwi.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 16;
    }

    if (ball1.diameter == 70) {
        new tomato.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 32;
    }

    if (ball1.diameter == 85) {
        new peach.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 64;
    }

    if (ball1.diameter == 100) {
        new starfruit.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 128;
    }

    if (ball1.diameter == 150) {
        new coconut.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 256;
    }

    if (ball1.diameter == 185) {
        new melon.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 1028;
    }

    if (ball1.diameter == 200) {
        new watermelon.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
        score += 2048;
    }

    /* if (ball1.diameter == 80) {
        new kiwi.Sprite(ball1.x, ball1.y);
        ball1.remove();
        ball2.remove();
    } */
    
}


function getRandom(){
    var num = Math.random();
    if(num < 0.45) return grape;  //probability 0.3
    else if(num < 0.85) return cherry; // probability 0.3
    else if(num < 0.95) return orange; //probability 0.3
    else if(num < 0.94) return lemon;  //probability 0.1
    else return kiwi;
}

function endGame() {
    textSize(32);
    textAlign(CENTER);
    fill('black');
    stroke(5);
    text('game over', width / 2, height / 2);
    textSize(16);
    text;
    text('your score = ' + score, width / 2, height / 2 + 50);
	noLoop();
}

function startGame() {
    text("your score = " + score, width - 100, height / 25);
    fruit = getRandom();

    if (mouse.presses()) {
       new fruit.Sprite(mouse.x, height / 4);
    } 

    if (ball.overlaps(outLine, endGame));

}

window.draw = () => {
    clear();


    startGame();
    
    grape.overlaps(grape, combine);
    cherry.overlaps(cherry, combine);
    orange.overlaps(orange, combine);
    lemon.overlaps(lemon, combine);
    kiwi.overlaps(kiwi, combine);
    tomato.overlaps(tomato, combine);
    peach.overlaps(peach, combine);
    starfruit.overlaps(starfruit, combine);
    coconut.overlaps(coconut, combine);
    melon.overlaps(melon, combine);
};
