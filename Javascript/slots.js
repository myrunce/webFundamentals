function slots(quarters,end){
    if (typeof (quarters,end) !== "number"){
        return "Please enter 2 numbers that isn't 0. No decimals!";
    }
    else {
        var letsplay = Math.trunc(Math.random()*101);
        var winnings = 0;
        for (quarters; quarters >= 0; quarters--){
            if (quarters > 0){
                if (letsplay === 1){
                    letsplay = Math.trunc(Math.random()*101);
                    winnings = Math.floor(Math.random()*50) + 51;
                    quarters += winnings - 1;
                    if (quarters >= end){
                    return "You won " + winnings + " quarters. You now have " + quarters + " quarters which is equal to or more than " + end + ". Thank you for playing!";
                    }
                    else {
                        letsplay = Math.trunc(Math.random()*101);
                        console.log("You won " + winnings + " quarters! You now have " + quarters + " quarters. Respinning...")
                    }
                }
                else{
                    letsplay = Math.trunc(Math.random()*101);
                    console.log("You lost. Respinning..." );
                }
            }
            else {
                return "You are out of quarters! Thanks for playing!";
            }
        }
    }
}
console.log(slots(80, 200));