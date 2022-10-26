function preload(){

}

function setup(){

    canvas = createCanvas(550 , 450);
    canvas.position( 530 , 270 );

    video = createCapture( VIDEO );
    video.hide();

    
}

function draw(){

    image( video , 190 , 170 , 200 , 150);

    fill("red");
    stroke("red");
    circle(50 , 50 , 70);
    circle(500 , 50 , 70);
    circle(50 , 400 , 70);
    circle(500 , 400 , 70);

    fill("green");
    stroke("green");
    rect(35 , 80 , 30 , 290);
    rect(485 , 80 , 30 , 290);
    rect(80 , 40 , 390 , 30);
    rect(80 , 390 , 390 , 30);
    
}

function take_snapshot(){

    save("My_Image.png");
}