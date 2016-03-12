function add(a, b, callback) {
    var total = a + b;
    callback(total);
}

add(2, 2, function(result) {
    console.log("The sum is: " + result);
});
