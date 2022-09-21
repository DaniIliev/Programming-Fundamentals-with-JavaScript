function rounding(precision, num){
if(num > 15){
    num = 15;
}
let total = precision.toFixed(num)
console.log(parseFloat(total))
}
rounding(3.1415926535897932384626433832795,2)
