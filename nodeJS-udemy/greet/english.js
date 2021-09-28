var greething = require('./greetings.json');

var greet = function() {
    console.log(greething.en);
}

module.exports = greet;