// I worked [with:] on this challenge
// Ajay Singh
// Hing Hyunh
// Tim Howard

// Your mission description: 

//---------- Rescue Princess --------------

//  The goal of this mission is to rescue a princess who is trapped behind 
//  a door.
//  The mission will consist of a good guy, a bad guy, a trapped princess, 
//  and a potion which can give the good guy increased health.
//  can be utilized by the good guy or bad guys. The end user will play the role
//  of the good guy. The 

//  The characters positions are based off x,y coordinates. 

// these variable have name, life, and position properties

<!DOCTYPE html> // HTML
<body>

<style> //CSS
#button{
    display: block;
    margin-bottom: 50px;
}
section{
    display: block;
    width: 100%;
    vertical-align: middle;
}
#prince{
    display: inline-block;
    padding-left: 50px;
}

#villain{
    display: inline-block;
    padding-left: 100px;
}

#princess{
    display: inline-block;
    padding-left: 100px;
}
</style>

<script> //Javascript 
function startMission()
{
alert("Ready for the mission?");
response = prompt("Type [Y] for Yes and [N] for No");

  if (response === ("y" || "Y")){
    alert("Let's play!");
  } else {
    alert("Princess: Please, save me!");
  }

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
        moveLeft();
        break;
        case 39:
        moveRight();
        break;
        }
    };
}  

var goodGuy = { // Hero Character variable
    name: "Hero",
    health: 10,
    position: {
        x: 0,
        y: 0
    }
};

var badGuy = { // Dragon Character variable
    name: "Dragon",
    health: 15,
    position: {
        x: 100,
        y: 0
    }
};

var princess = { // Princess character variable
    name: "Princess",
    health: 10,
    position: {
        x: 200,
        y: 50
    }
};

var door = { // Door
    name: "Door"
    position: {
        x: 200,
        y: 0
    }
};

var potion(){ // Legendary Potion
    name: "Potion"
    health: 10,
    position:{
        x: -50,
        y: 0
    }

};

// attacks nearby monster
function attack()
{ 
console.log("*slash* *slash*")
}

// Movement: left, right
// takes x variable and subtracts 25, 

function moveLeft(){
    var player = document.getElementById("prince");
    goodGuy.position.x -= 25;
    player.style.position = "absolute";
    player.style.left = goodGuy.position.x +"px";
}
// takes x variable and adds 25, 

function moveRight(){
    var player = document.getElementById("prince");
    goodGuy.position.x += 25;
    player.style.position = "absolute";
    player.style.left = goodGuy.position.x +"px";
}

function doorBreak() 
      {
        console.log("*slash* *door breaks*") // Attacks door and breaks door
        delete door; 
      };

// if goodGuy goes to position (-50,0),
// goodGuy.health = goodGuy.health + potion.health;
// delete potion.health;

if (goodGuy.position.x === -50)
{
  var potion = {health:10}
  goodGuy.health = goodGuy.health + potion.health;
  delete potion.health;
}

// goodGuy moves forward towards the badGuy
// Once the goodGuy reaches position (100,0), call the attack function
// If goodGuy's health > 10, return true else false
// If false, loop again - start the game over.

if (goodGuy.position.x === 100)
  {
  if (goodGuy.health > 10)
    {
      attack(); //sword slashing
      delete badGuy;  // slays bad guy
      console.log("Dragon has been slayed.");
    }
  else
    {
      attack(); //sword slashing
      console.log("You have died!"); // puts on screen you have died
      goodGuy.position.x === 0; //returns position to (0,0) 
      
    }
}

// If true, continue to save the princesss.
// When the goodGuy reaches position (200,0), call the door function
// rescue princess
// princess would have to go y: -50;
// goodGuy and princess goes x: +200 to complete the mission

if (goodGuy.position.x === 200)
  {
    console.log("Hero: I'm here to rescue you.");
    doorBreak();
    
    princess.position.y = -25; // Princess runs down towards Hero
    princess.position.y = 0;
    console.log("Princess: Thanks for saving me.")
    goodGuy.position.x === 225;  // Create walking and following effect towards exit
    goodGuy.position.x === 250;
    princess.position.x === 225;
    goodGuy.position.x === 275;
    princess.position.x === 250;
    goodGuy.position.x === 300;
    princess.position.x === 275;
    goodGuy.position.x === 325;
    princess.position.x === 300;
    goodGuy.position.x === 350;
    princess.position.x === 325;
    goodGuy.position.x === 375;
    princess.position.x === 350;
    goodGuy.position.x === 400;
    princess.position.x === 375;
    princess.position.x ==== 400;
    console.log("Mission completed: Princess has been rescued.")
  };  
</script>

<h1>Rescue Princess </h1>
<div id ="button">
    <button onclick="startMission()">Begin</button>
</div>
<section>
    <article id="prince">
        Prince
    </article>
    <article id="villain">
        Villain
    </article>
    <article id="princess">
        Princess
    </article>
</section>
</body>

// Reflection
// This was a very fun project to work on. We had no idea how to approach this. We were 
// trying to create the simplest game we could think of with the minimal amount of objects.
// The implementation from brainstorming to actually code writing was way more complex than 
// we expected. It also took a lot longer than we expected. I had no idea how to take any user 
// input data to manipulate variables in the game or how to display any user output. We
// referenced from other people's completed projects to help get some of our code to have
// at least partial working code on HTML. I learned some new javascript syntax, but am not
// confident in understanding of them. I really enjoyed going from an idea to some actual 
// code.  When it got down to have some code on how the game actually worked, it felt 
// amazing.  I believe that this project was a bit overwhelming, in that there it was way above
// my level of understanding of javascript, so just trying to get more and more usable code
// was extremely tedious.
