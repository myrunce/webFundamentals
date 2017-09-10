var hour = 8;
var minute = 50;
var period = "AM";
function tellTime () {
    if (minute < 30 && period == "AM") {
        console.log("It's just after " + hour + " in the morning.");
    }
    else if (minute < 30 && period == "PM") {
        console.log("It's just after " + hour + " in the afternoon.");
    }
    else if (minute > 30 && period == "AM") {
        console.log("It's almost " + (hour + 1) + " in the morning.")
    }
    else if (minute > 30 && period == "PM") {
        console.log("It's almost " + (hour + 1) + " in the afternoon");
    }
    else{
        console.log("That's not time.");
    }
}
tellTime();