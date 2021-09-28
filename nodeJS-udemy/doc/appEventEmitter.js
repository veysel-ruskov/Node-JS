var EventEmiter = require('events');

class Greetr extends EventEmiter{
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }
    

    greet(data) {
    console.log(`${this.greeting} : ${data}`);
    this.emit('greet', data);
};
}



var greter1 = new Greetr();

greter1.on('greet', function (data) {
    console.log('Someone greeted!: ' + data);
});


greter1.greet('Tony');