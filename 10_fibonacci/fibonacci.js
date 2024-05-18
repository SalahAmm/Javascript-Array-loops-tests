const fibonacci = function(n) {
    let count 
    if ( typeof n !== 'number'){
            count = parseInt(n);
    }else {
        count = n;
    }
    if(count == 0) {
     return 0;
    }
    if(count < 0) {
        return "OOPS";
    }

    lastNum = 1;
    firsNum = 0;
    for (i = 2 ; i <= count ; i++){
        let current = lastNum + firsNum;
        firsNum = lastNum;
        lastNum = current;
    }
    return lastNum;


}

// Do not edit below this line
module.exports = fibonacci;
