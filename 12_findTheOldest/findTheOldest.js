const findTheOldest = function (person) {
    return person.reduce((oldNow , currentPerson) => {
        const oldPer = oldNow.yearOfDeath ? oldNow.yearOfDeath - oldNow.yearOfBirth :new Date().getFullYear() - oldNow.yearOfBirth;
        const currentPer = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;

        if (currentPer > oldPer){
            return currentPerson;
        }else {
            return oldNow;
        }
})

}

// Do not edit below this line
module.exports = findTheOldest;
