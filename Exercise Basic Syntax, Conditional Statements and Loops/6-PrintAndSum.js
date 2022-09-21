function printandsum(num1, num2){
    let sum = 0 
    let number = '';  
for(let i = num1; i<=num2; i++){
    sum+=i 
    number+= `${i} `
}
console.log(number)
console.log(`Sum: ${sum}`)
}
printandsum(10,20)