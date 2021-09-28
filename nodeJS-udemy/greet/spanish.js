var greething = require('./greetings.json');

var greet = function() {
    console.log(greething.es);
}

module.exports = greet;