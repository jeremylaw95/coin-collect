// Add states isAlive, name and canvas Location.
// Add methods kill(), getLocation()?, setName() and moveLocation()

// creates keys array
// adds event listenters to body to for keydown and keyup
// checks code of keyevent and adds false or true to keys array
let keys = [];

document.body.addEventListener("keydown", function(event) {
    keys[event.code] = true;
});

document.body.addEventListener("keyup", function(event) {
    keys[event.code] = false;
});

class Player{
constructor(width, height, color, x, y, speed, velX, velY, friction, gravity) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.velX = velX;
    this.velY = velY;
  /////jump and friction and gravity
    this.jump = false;
    this.friction = friction; 
    this.gravity = gravity; 
  }
  makePlayer() {
    let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  // increases or decreses Velocity of player
  update(){ // up arrow

    if (keys.ArrowUp) {//38if(this.jump=false){ }
      console.log("arrow up")
        this.jump = true;
        this.velY = -this.speed * 2;
      console.log(keys)}
      
    // right arrow
    if (keys.ArrowRight) {if (this.velX < this.speed) {this.velX++;
    console.log("right")}}

    // left arrow
    if (keys.ArrowLeft) {if (this.velX > -this.speed) {this.velX--;
      console.log("left")}}


    this.velX *= this.friction;
    //this.velY += this.gravity;

    //moves player side to side
    this.x += this.velX; 
    //moves player up and down?
    this.y += this.velY;


    let ctx = document.querySelector("canvas").getContext("2d")
        ctx.clearRect(0, 0, 480, 270); // added in
        ctx.fillStyle = this.color;
       ctx.fillRect(this.x, this.y, this.width, this.height);

    // how we clear previous drawings?
    requestAnimationFrame(() => this.update());

         console.log(keys)

  }
}


//   movePlayerRight() {
//       this.x+= 10;
//       let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
//         ctx.fillStyle = this.color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   movePlayerLeft() {
//     this.x-= 10;
//     let ctx = document.querySelector("canvas").getContext("2d"); // comment out later?
//       ctx.fillStyle = this.color;
//       ctx.fillRect(this.x, this.y, this.width, this.height);
// }
// }






// //Player
// ctx.fillStyle = "white";
// ctx.fillRect(700, canvas.height/1.75, 150, 100);
