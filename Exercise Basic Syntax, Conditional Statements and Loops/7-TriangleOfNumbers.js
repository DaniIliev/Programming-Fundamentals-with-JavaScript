function triagleOfnumbers(num){
    for(let a = 1; a <= num; a++){
        let output = ''
        for(let b = 1; b <= a; b++){
            output+=`${a} `
        }
        console.log(output)
    }
}
    triagleOfnumbers(5)
