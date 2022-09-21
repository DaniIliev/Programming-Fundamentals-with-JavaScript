function LeapYear(year){
    if(year%100 !==0 && year%4==00){
        console.log("yes")
    }else if(year%400 ===0){
        console.log("yes")
    }else{
        console.log("no")
    }
}


LeapYear(2000)