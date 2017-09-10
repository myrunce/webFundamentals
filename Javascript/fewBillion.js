function fewBillion() {
    var sum = .01
    for (var days = 1; days <= 30; days++){
        sum *= 2;
    }
    console.log(sum);
}
fewBillion();