const sumOfSquareDigits = (number) => {
    let str = String(number);
    let result = 0;

    for (let index = 0; index < str.length; index++) {
        result += Number(str[index]) * Number(str[index]);
    }

    counter();

    return result;
}

let count = 0;

const counter = () => {
    count++;
}

const isHappyNumber = (number) => {
    if (number !== 0) {
        if (sumOfSquareDigits(number) === 1) {
            return true;
        } else {
            if (count < 10) {
                return isHappyNumber(sumOfSquareDigits(number));
            } else {
                return false;
            }            
        }
    } else {
        return 'add another number';
    }
}

console.log(isHappyNumber(13));