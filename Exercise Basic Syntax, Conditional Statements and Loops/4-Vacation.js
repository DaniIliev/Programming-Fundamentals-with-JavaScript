function vacation (group, groupType, weekday){
    let price = 0
    switch(weekday){
        case "Friday":
            if(groupType === "Students"){
                price = group * 8.45
            }else if(groupType === "Business"){
                price = group * 10.90
                if (group >= 100 && groupType === "Business"){
                    price = price -(10*10.90)
                }
            }else if(groupType === "Regular"){
                price = group * 15
            }break; 
            case "Saturday":
                if(groupType === "Students"){
                    price = group * 9.80
                }else if(groupType === "Business"){
                    price = group * 15.60
                    if (group >= 100 && groupType === "Business"){
                        price = price -(10*15.60)
                    }
                }else if(groupType === "Regular"){
                    price = group * 20
                }break;
                case "Sunday":
                    if(groupType === "Students"){
                        price = group * 10.46
                    }else if(groupType === "Business"){
                        price = group * 16
                        if (group >= 100 && groupType === "Business"){
                            price = price -(10*16)
                        }
                    }else if(groupType === "Regular"){
                        price = group * 22.50
                    }break;
    }
    if(group >=30 && groupType === "Students"){
        price = price * 0.85;
    }else if(group >=10 && group <= 20 && groupType === "Regular"){
        price = price * 0.95
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(30,
    "Students",
    "Sunday"
    )