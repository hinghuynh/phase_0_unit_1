// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
//RESCUE MISSION
//move down x2
this.moveDown();
this.moveDown();
//move right x1
this.moveRight();
// move up x2
this.moveUp();
this.moveUp();
// move right x2
this.moveRight();
this.moveRight();
//move down x1
this.moveDown();
//Attack!
this.attackNearbyEnemy();


//GRAB THE MUSHROOM
//move up x1
this.moveUp();
//move right x1
this.moveRight();
//move left x1
this.moveLeft();
//move up x1
this.moveUp();
//Attack!
this.attackNearbyEnemy();

//DRINK MOVE
//move right x1
this.moveRight();
//Attack!
this.attackNearbyEnemy();
//move right x1
this.moveRight();
//move down x1
this.moveDown();
//move up x1
this.moveUp();
//move right x1
this.moveRight();
//Attack!
this.attackNearbyEnemy();

//TAUNT THE GUARDS
//move right x1
this.moveRight();
//bust down the door
this.bustDownDoor();
//move right x1
this.moveRight();
//say "hey there"
this.say("Hey there!");
//move left 2x
this.moveLeft();
this.moveLeft();
//say Attack!
this.say("Attack!");
//move right
this.moveRight();
//say "Follow me"
this.say("Follow me.");
//move right x2
this.moveRight();
this.moveRight();
//move  up x1
this.moveUp();
//move right x1
this.moveUp();
//move down x1
this.movedDown();
//move right
this.moveRight();
//say "hey there"
this.say("Hey there!");
//move left x1
this.moveLeft();
//say "Attack!" x2
this.say("Attack!");
this.say("Attack!");
//say "Follow me"
this.say("Follow me.");
//move right x1
this.moveRight();
//move up x1
this.moveUp();
//move right x1
this.moveRight();

// ITS A TRAP
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();
this.say("Attack!");

//Break OUT OF PRISON
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Marcus")
    return true;
if(name === "Gordon")
    return true;    
    
 //TAUNT
 this.say("Hey!");
// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey Ugly!");
this.say("Hey Fatty!"); 
this.say("You smell!");
this.say("You stink!");
 
//COWARDLY TAUNT
// Run your soldier out where the ogres can hear you.
this.moveXY(50, 16);
 // Say something!
this.say("Hey Ugly");
// Then run back behind the arrow towers for safety.
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
// You can shift+click on the map to insert coordinates.
 
//COMMANDING FOLLOWERS
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me.");
this.moveXY(65, 43);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack!");
// Make sure Tharin is safe!
this.moveXY(75, 63);

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(38, 40);
this.attackXY(49, 65);
this.attackXY(49, 58);
this.moveXY(45, 40);
this.attackXY(68, 55);
this.attackXY(56, 47);
// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.


// Reflection:
// Write your reflection here.
// Taunt the Ogre and run for cover!

