// Write your code in this file!
function scuberGreetingForFeet(rideLength) {
  let greeting = ""
  if (rideLength <= 400) {
    greeting = 'This one is on me!';
  } else if (rideLength >= 2000 && rideLength <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.' ; 
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous' :
      return 'Thank you so much.' ;
    case 'not as generous' :
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}