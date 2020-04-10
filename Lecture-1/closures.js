let i = 
function func(){
    const arr = [];

    for(var i = 0; i < 5; i++){
        arr.push(i);
    }

    return arr;
}

const funcArr = func()

console.log(funcArr);

//closure

function makeHello(){
    var msg = "heyy"

    function sayHello(){
        console.log(msg);
    }
    return sayHello;
}

const sayHello = makeHello()



