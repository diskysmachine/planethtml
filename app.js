var plane = document.getElementById("plane");
var posX = 100;
var posY = 100;
var speed = 10;

plane.style.left = posX+'px';
plane.style.top = posY+'px';



document.addEventListener("keydown",function(event){
    if(event.code=="KeyD"){
     posX+=speed;
     plane.style.left = posX+'px';

    }

    if(event.code=="KeyS"){
        posY+=speed;
        plane.style.top = posY+'px';
   
       }

       if(event.code=="KeyA"){
        posX-=speed;
        plane.style.left = posX+'px';
   
       }

       if(event.code=="KeyW"){
        posY-=speed;
        plane.style.top = posY+'px';
   
       }
    console.log(event.code);
})