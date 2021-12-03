var bg;
var tom,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    tom = createSprite(870,600);
    tom.addAnimation("catSitting",catImg1);
    tom.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale  = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if cat and mouse 
    if(tom.x - mouse.x < (tom.width - mouse.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation(catImg3);
        tom.x =300;

        mouse.addAnimation("mouseImage", mouseImg3);
        mouse.changeAnimation("mouseImage");
    }  


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("catRunning", catImg2);
        tom.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");


    }
}
