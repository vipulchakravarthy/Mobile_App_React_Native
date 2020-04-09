const o = new Object();
o.firstname = "vipul";

o.greet = function(){
    console.log("Heyy " + o.firstname)
}

o.greet()


const o2 = {
    name: "vipul",
    street: "kgm"
}

// console.log(o2["street"])

o2.street="gachi"

//cloning an object
const o3 = Object.assign({}.o2)

console.log(o2["street"])

