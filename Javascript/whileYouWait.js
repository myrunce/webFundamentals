function countdown() {
    for (var days = 60; days >= 0; days--){
        if (days >= 30){
            console.log(days + " days until my birthday. Such a long time... :(");
        }
        else if (days > 5 && days < 30){
            console.log( days + " days until my birthday. Im getting excited! :)");
        }
        else if (days >= 2 && days <= 5){
            console.log(days + " DAYS UNTIL MY BIRTHDAY!!!!");
        }
        else if (days === 1){
            console.log(days + " DAY UNTIL MY BIRTHDAY!!!!");
        }
        else{
            console.log("ITS MY BIRTHDAY!!!");
        }
    }
}
countdown();