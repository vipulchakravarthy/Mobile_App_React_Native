//IIFE
const sayHello = 
(function (){
    var msg = "heyy"

    function sayHello(){
        console.log(msg);
    }
    return sayHello;
})()

console.log(sayHello.toString())

sayHello()

const counter = (function() {
    let count = 0;
    return {
        inc: function(){
            count = count +1
        },

        get: function(){
            console.log(count)
        }
    }
})()

counter.get()
counter.inc()
counter.get()

