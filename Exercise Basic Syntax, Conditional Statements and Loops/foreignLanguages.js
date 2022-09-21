function foreignLanguages(contry){
    switch(contry){
        case "England": console.log(`English`);break;
        case "USA": console.log(`English`);break;
        case "Mexico": console.log('Spanish');break;
        case "Argentina": console.log('Spanish');break;
        case "Spain": console.log('Spanish');break;
        default: console.log('unknown')
    }
}
foreignLanguages(`England`)