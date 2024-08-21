function facto (n){
if (n == 0 || n == 1){
    return 1
}
else {
    return n * facto (n-1)
}
}
console.log(facto(9))
console.log(facto(4))