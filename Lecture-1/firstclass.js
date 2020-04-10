const x = [0,1,2,3]
//map
function addOne(number){
    return number+1;
}

console.log(x.map(addOne))

//reduce 
function add(x,y){
    return x+y;
}

console.log(x.reduce(add));