// GPS 1.2 - JavaScript
// YOUR FULL NAMES:
//  1.Hing Huynh
//  2.Lienha Carleton

// 1. "YOU SIGNED... WHO?!"

function Client(name,age,quote)
{
this.name=name;
this.age=age;
this.quote=quote;
}

var Lienha = new Client("Lienha", 40, "Hello!");
var Hing = new Client("Hing", 25, "I Love sushi!");


// 2. "Here they Come!"

var Adam = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var Kristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var Jim = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// 3. "TIME IS MONEY!"

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!"

var listOfNames = [Hing, Lienha, Adam, Kristen, Jim, shooterMcGavin]

for (var i=0; i<listOfNames.length; i++)
{
  console.log(listOfNames[i]);
}

// ** BONUS **
