// Write your code in this file!
function scuberGreetingForFeet(feet){
  let cost;
  if (feet <= 400) {
    cost = "This one is on me!";
  } else if (feet > 2000 & feet < 2500){
    cost = "I will gladly take your thirty bucks."
  } else {
    cost = "No can do."
  }
  return cost;
}

function ternaryCheckCity(city) {
  const bool = city === "NYC" ? "Ok, sounds good." : "No go.";
  return bool
}

function switchOnCharmFromTip(tip){
  let charm
  switch(tip){
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    default:
      charm = "Bye."
      break;
  }
  return charm;
}
