const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let newStr = str.split('').reverse().join('');
    if( str === newStr){
        return true;
    }else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
