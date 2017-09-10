function slots(quarters){
    var letsplay = Math.trunc(Math.random()*101)
    var winnings = 0
    for (quarters; quarters >= 0; quarters--){
        if (quarters > 0){
            if (letsplay === 1){
                letsplay = Math.trunc(Math.random()*101)
                winnings = Math.floor(Math.random()*50) + 51
                quarters += winnings - 1
                return "You won " + winnings + " quarters! Your new total is " + quarters + " quarters."
            }
            else{
                letsplay = Math.trunc(Math.random()*101)
                console.log("You lost. Respinning..." )
            }
        }
        else {
            return "You are out of quarters! Thanks for playing!";
        }
    }
}
console.log(slots(30));