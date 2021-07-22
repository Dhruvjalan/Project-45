var s;
var scl = 20;
var food, NEUTRAL;
var x = 0;
var a = "NEUTRAL", UP,DOWN,LEFT,RIGHT;

function setup(){
  createCanvas(600,600);
  s = new Snake();
  frameRate(10);
  pickLocation()
  a = NEUTRAL

}

function pickLocation(){
  var cols = floor(width/scl);
  var row = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(row)))
  food.mult(scl);
   x+=1 

}

function draw(){
  background(51);
   console.log(a)
  fill("red")
  textSize(30)
  text("score: "+s.total,470,50)
  
  s.death()
  s.update()
  s.show()

  if(s.eat(food)){
    pickLocation();
  }

  fill(255,0,100)
  rect(food.x,food.y,scl,scl)

  

  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(a!="DOWN"){
    s.dir(0,-1);
    a = "UP";
    }

  }if(keyCode === DOWN_ARROW){
    if(a!="UP"){
    s.dir(0,10/10)
    a = "DOWN"
    }

  }if(keyCode === LEFT_ARROW){
    if(a!="RIGHT"){
    s.dir(-10/10,0);
    a = "LEFT"
    }

  }if(keyCode === RIGHT_ARROW){
    if(a!="LEFT"){
    s.dir(10/10,0)
    a = "RIGHT"
    }
  }
}

