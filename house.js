var rl = require('readline-sync');
var points = 10;
// console.log("Standing in front of the house")

console.log("Welcom to House-Game. Please answer the following questions.");


function ringBell(){
  answer = rl.question("Do you ring the bell? Please answer: 'yes' or 'no' ").toLowerCase()


  if (answer == 'yes' | answer == 'y'){
   // console.log("you entered yes")
   return true
  } else if (answer == 'no' | answer == 'n') {
  // console.log("you entered no")
    return false
  } else {
  console.log("Your answer is a invalid input.");
  return ringBell()
  }
}

function getName() {
  return rl.question("What is your name?")
}

function chooseOneofThree(){
  answer = rl.question("Now it's time to start the game. What is your choice: 'a', 'b' or 'c' ").toLowerCase()
  switch (answer) {
    case "a":
    return diningRoom()
    case "b":
    return livinRoom()
    case "c":
    return bedRoom()
    default:
    console.log("Invalid input, Please choose a valid answer: a, b, c" );
    return chooseOneofThree();
  }
}

// CODE START
if(ringBell()){
  var name = getName()
  console.log("You choose yes and your name is: ", name);
  console.log(chooseOneofThree())
}else {
  var name = getName()
  console.log("You choose no, for sure you are ready to play the game and your name is: ", name);
  console.log(chooseOneofThree())
}

//
function diningRoom(){
  points++;
answer = rl.question("This is the dining room, what do you want to eat: 'breakfast', 'dinner', or 'snack' ").toLowerCase()
console.log("You have", points, 'points and ');
switch (answer) {
  case "breakfast":
    console.log("You choose breakfast, good choice  let continue the game", name );
    return  livinRoom();
  case "dinner":
  console.log("You choose dinner, good choice  let continue the game", name );
  return  livinRoom();
  case "snack":
  console.log("You choose snack, good choice  let continue the game", name );
  return  livinRoom();
  default:
  console.log("Invalid input, Please choose the following options", name );

  }
return diningRoom();
}


function livinRoom(){
  points++;
answer = rl.question("This is the leaving room, what do you want to do: 'watch tv', 'play game', or 'read a book' ").toLowerCase()
console.log("You have", points, 'points and ');
switch (answer) {
  case "watch tv":
  console.log("You choose to watch tv, good choice  let continue the game", name );
  return  bedRoom();
  case "play game":
  console.log("You choose to play game, good choice  let continue the game", name );
  return  bedRoom();
  case "read a book":
  console.log("You choose to read a book, good choice  let continue the game", name );
  return  bedRoom();
  default:
  console.log("Invalid input, Please choose the following options", name );
  }
  return diningRoom();
}


function bedRoom(){
  points++;
 answer = rl.question("This is the bed room, what do you want to do: 'take a shower', 'dress', or 'sleep' ").toLowerCase()
 console.log("You have", points, 'points and ');
switch (answer) {
  case "take a shower":
  console.log("You choose to take a shower good choice the game is over", name );
  return  'See you soon.';
  case "dress":
  console.log("You choose to dress", "good choice the game is over", name);
  return  'See you soon.';
  case "sleep":
  console.log("You choose to sleep good choice the game is over", name );
  return ' Have a good night.';
  default:
console.log("Invalid input  Please choose the following options", name);
  }
  return bedRoom();
}
