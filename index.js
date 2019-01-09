// Write your code in this file!

function scuberGreetingForFeet(ft){

    let message; 
    switch (true){
        case ft <= 400:
            message = 'This one is on me!';
            break;
        case ft  > 2000 && ft <= 2500:
            message = 'I will gladly take your thirty bucks.';
            break;
        case ft > 2500:
            message = 'No can do.';       
            break;
    }
    return message;






        
    // let message;

    // if (ft <= 400) {
    //     message = 'This one is on me!';
    // } else if (ft >= 2000 && ft <= 2500){
    //     message = 'I will gladly take your thirty bucks.';
    // } else if  (ft > 2500){
    //     message = 'No can do.';
    // }
    // return message;
}

function ternaryCheckCity(city){
    return city == 'NYC' ?  "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
    
    switch(tip) {
        case 'generous':
            return 'Thank you so much.';
        case 'not as generous':
            return 'Thank you.';
        default:
            return 'Bye.';
    }
}