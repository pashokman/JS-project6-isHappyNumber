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

const counter = () => count++;

const isHappyNumber = (number) => {
    if (number === 0) return false;
    if (sumOfSquareDigits(number) === 1) return true;
    if (count < 10) return isHappyNumber(sumOfSquareDigits(number));
    return false;
}

console.log(isHappyNumber(0));  //false
console.log(isHappyNumber(13)); //true
console.log(isHappyNumber(19)); //true
console.log(isHappyNumber(15)); //false
console.log(isHappyNumber(8));  //false