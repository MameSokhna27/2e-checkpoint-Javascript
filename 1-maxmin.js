let arr = [ 3, 1, 4, 9, 86, 7 ]
let min = arr[0]
let max = 0
let len = arr.length
for (let i=0; i < len ; i++){
    if (min > arr [i]){
        min = arr[i]
    }
     if (max < arr[i]){
        max = arr[i]
    }
    min
    max
}
console.log("Minimum value is " + min )
console.log("Maximum value is " + max)
