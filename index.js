// Write your code in this file!
function scuberGreetingForFeet(length) {
    let result
    if (length <= 400) {
        result = "This one is on me!"
    } else if (length > 2500) {
        result = "No can do."
    } else if (length > 2000) {
        result = "I will gladly take your thirty bucks."
    }
    return result
}

function ternaryCheckCity(name) {
    let answer
    name === "NYC" ? answer = "Ok, sounds good." : answer = "No go."
    return answer
}

function switchOnCharmFromTip(tip) {
    let result
    switch (tip) {
        case 'generous':
            result = "Thank you so much.";
            break;
        case 'not as generous':
            result = "Thank you.";
            break;
        default:
            result = "Bye.";
            break;
    }
    return result;
}