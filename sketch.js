const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup(){
    var canvas = createCanvas(1200,870);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(810,350)
    stone1 = new Stone(800,350)
    stone2 = new Stone(815,300)
    hammer = new Hammer(100,100)
    sand1 = new Sand(810,260,5,PI/2)
    sand2 = new Sand(809,210,5,PI/2)
    sand3 = new Sand(808,220,5,PI/2)
    sand4 = new Sand(807,230,5,PI/2)
    sand5 = new Sand(806,240,5,PI/2)
    sand6 = new Sand(805,250,5,PI/2)
    sand7 = new Sand(804,260,5,PI/2)
    sand8 = new Sand(803,260,5,PI/2)
    sand9 = new Sand(802,260,5,PI/2)
    sand10 = new Sand(801,260,5,PI/2)
    sand11 = new Sand(800,260,5,PI/2)
    sand12 = new Sand(811,260,5,PI/2)
    sand13 = new Sand(812,260,5,PI/2)
    sand14 = new Sand(813,260,5,PI/2)
    sand15 = new Sand(814,260,5,PI/2)
    sand16 = new Sand(815,260,5,PI/2)
iron = new Iron(700,320,70,100);
iron1 = new Iron(650,300,70,100);
iron2 = new Iron(650,340,70,100);
iron3 = new Iron(750,350,70,100);
iron4 = new Iron(750,360,70,100);
    ground = new Ground(1199,height,20,1200)
    ground1 = new Ground(0,height,20,1200)
    ground2 = new Ground(600,height,1200,20)
}

function draw(){
    background("skyBlue");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    sand1.display(); 
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
    sand11.display();
    sand12.display();
    sand13.display();
    sand14.display();
    sand15.display();
    sand16.display();
    iron.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    stone.display() 
    stone1.display();
    stone2.display();
   hammer.display();
   ground.display();
    ground1.display();
    ground2.display();
}

    