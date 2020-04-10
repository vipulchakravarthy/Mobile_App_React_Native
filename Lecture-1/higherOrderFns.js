function map(arr, fn){
    const newArr = []
    for(let i = 0; i < arr.length;i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

function addOne(x) {return x+1}

arr = [0,1,2,3]

console.log(map(arr,addOne))

 