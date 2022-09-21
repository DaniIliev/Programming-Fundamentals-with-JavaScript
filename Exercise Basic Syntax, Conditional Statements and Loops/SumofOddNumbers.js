function solve(num){
    let total = 1
    let sum = 0 
for(let i = 1;i<=num;i++){
sum+=total
console.log(total) 
total += 2  
}
console.log(`Sum: ${sum}`)
}
solve(5)