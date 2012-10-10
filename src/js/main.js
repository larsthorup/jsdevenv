require([
    "jquery",
    "util/random"
],function() {
    $("#randomNumber").text(Math.randomBelow(42));
});

