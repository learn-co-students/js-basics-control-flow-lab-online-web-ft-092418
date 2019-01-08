// Write your code in this file!

function scuberGreetingForFeet(distance) {

  if (distance <= 400){
    return 'This one is on me!';
  } else if (distance > 2500){
    return 'No can do.';
  } else if(distance > 2000) {
    return 'I will gladly take your thirty bucks.' ;
  }


}


function ternaryCheckCity(destination){
  let response;
  switch (destination) {
    case 'NYC':
    response ="Ok, sounds good."
    break;
  default:
    response ="No go."
    }
    return response;

}


function switchOnCharmFromTip(tip){
  let response;
  switch (tip){
    case "generous":
        response="Thank you so much.";
        break;
    case "not as generous":
            response="Thank you.";
            break;
    default:
          response="Bye.";

  }
  return response;
}
