var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var funName = function() {
    console.log('I am being called');
}

emitter.on('foo', funName);
emitter.removeListener('foo');

emitter.emit('foo');