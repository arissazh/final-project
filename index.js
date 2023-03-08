// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, addDoc, getDocs, query, where, orderBy, getDocFromCache, limit} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU5ujNJyakYRgFzXv70sg88mDoaD-Xin4",
  authDomain: "fruit-game-2d865.firebaseapp.com",
  projectId: "fruit-game-2d865",
  storageBucket: "fruit-game-2d865.appspot.com",
  messagingSenderId: "210965526089",
  appId: "1:210965526089:web:026923732c7e1e24b77198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// sends score and username information to database
async function sendScore(username) {
    // console.log("in send score")
    // let username = id('UserName').value;
    // console.log(username)
    try {
        const docRef = await addDoc(collection(db, "players"), {
          username: username,
          score: score,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

// document.getElementById("submit-button").addEventListener("click", sendScore)

// set bounds
let ball, floor, walls;
// set endgame line
let outLine;
// set different ball types
let grape, cherry, orange, lemon, kiwi, tomato, peach, starfruit, coconut, melon, watermelon;
// initialize score
var score = 0;
// game over screen
let GOScreen;


// create leaderboard of scores
function createLi(name, score){
    let li = document.createElement("li");
    // creates HTML ordered list for leaderboard
    // TODO: STYLE
    li.innerHTML = name + " : " + score;
    return li;
}

// helper function to get element id name
const id = (name) => {
    return document.getElementById(name);
}

// wait before game over
window.addEventListener('load',() => {
    
    GOScreen = id("gameover");
    id("submit").addEventListener('submit', (e) => {
        e.preventDefault()
        
        let username = id('user-name').value;
        // console.log(username);
        sendScore(username)

    })

    
})

// game setup 
window.setup = () => {
    createCanvas(1 + windowHeight / 2, windowHeight);
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
    outLine.y = height / 8;
    // outLine.y = 500;
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
	noLoop();
    GOScreen.style.display="flex";
    id("score").innerHTML =  "your score: " + score;
    // const data = {array: [{user:"Arissa", score:12222},{user:"Chris", score:2}]}
    // const data = getScore();

    // const player = collection(db, "players");
    // const scoreData = query(player, orderBy("score"), limit(3));
    // const topScores = getScore();
    getScore();
    // console.log(topScores);
    // getScore();
    // let leaderboard = id("LB-list");
    // topScores.allScores.forEach(({username, score}) => {
    //     let li = createLi(username, score);
    //     leaderboard.appendChild(li);
    // });
}

async function getScore() {
    const q = query(collection(db, "players"), orderBy("score", "desc"), limit(5));
    const querySnapshot = await getDocs(q);
    const data = {allScores: []};

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        data.allScores.push(doc.data());
        // console.log(doc.data());
    });
    // console.log(data);
    // return data;
    let leaderboard = id("LB-list");
    data.allScores.forEach(({username, score}) => {
        let li = createLi(username, score);
        leaderboard.appendChild(li);
    });
}


function startGame() {
    text("your score = " + score, width - 100, height / 25);
    var fruit = getRandom();

    if (mouse.presses()) {
       new fruit.Sprite(mouse.x,  height/4);
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
