const sumOfSquareDigits = (number) => {
    let str = String(number);
    let result = 0;

    for (let index = 0; index < str.length; index++) {
        result += Number(str[index]) * Number(str[index]);
    }

    return result;
}

const isHappyNumber = (number) => {
    if (number !== 0) {
        if (sumOfSquareDigits(number) === 1) {
            return true;
        } else {
            return isHappyNumber(sumOfSquareDigits(number));
        }
    } else {
        return 'add another number';
    }
}

console.log(isHappyNumber(13));