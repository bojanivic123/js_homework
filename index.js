// 1

let array1 = [2, -15, 50, 2, -4, -4, 18, -99];

removeDuplicatesFromArray = array => {
    if (array.length === 0) {
        return undefined;
    }

    let initialValue = [];
    let arrayWithoutDuplicates = array.reduce((arrayState, currentElement) => {
        if (!arrayState.includes(currentElement)) {
            arrayState.push(currentElement);
        }
        return arrayState;
    }, initialValue);
    return arrayWithoutDuplicates;
}

console.log(removeDuplicatesFromArray(array1));

// 2

let array2 = [2, NaN, 50, 2, null, -4, "", -99, undefined, false];

removeUnwantedValues = array => {
    if (array.length === 0) {
        return undefined;
    }

    let arrayWithoutUnwantedValues = array.filter(el => el !== null && el !== undefined && el !== 0 && el !== "" && el !== false && !isNaN(el));
    return arrayWithoutUnwantedValues;
}

console.log(removeUnwantedValues(array2));

// 4

let array4 = [2, 50, 2, -4, 0, -99];

getRandomElement = array => {
    if (array.length === 0) {
        return undefined;
    }

    let indexOfRandomElement = Math.floor(Math.random() * array.length);
    return array[indexOfRandomElement];
}

console.log(getRandomElement(array4));

// 6

getArrayFromInterval = (start, end) => {
    let newArray = [];
    for (let i = start; i <= end; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(getArrayFromInterval(50, 65));

//7 

let array7 = [2, 50, 2, -4, 0, -99];

getBiggestNumberInArray = array => {
    let biggestNumber = array[0];
    array.forEach(num => {
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    });
    return biggestNumber;
}

console.log(getBiggestNumberInArray(array7));

// ili druga verzija sa array.reduce

getBiggestNumberInArrayOtherVersion = array => {
    let initialValue = array[0];
    let biggestNumber = array.reduce((currentBiggestNumber, currentElement) => {
        if (currentElement > currentBiggestNumber) {
            currentBiggestNumber = currentElement;
        }
        return currentBiggestNumber;
    }, initialValue);
    return biggestNumber;
}

console.log(getBiggestNumberInArrayOtherVersion(array7));

// 8

let array8 = [23, -70, 5, 0, 18, -20];

divideArray = array => {
    let evenArray = [];
    let oddArray = [];

    evenArray = array.filter(number => number % 2 === 0 && number !== 0);
    oddArray = array.filter(number => number % 2 !== 0 && number !== 0);

    return ({evenArray, oddArray});
}

console.log(divideArray(array8));

// 9

let array9 = [23, -70, 5, 0, 18, -20];

mixArray = array => {
    let mixedArray = array.sort(() => Math.random() - 0.5);
    return mixedArray;
}

console.log(mixArray(array9));

// 10

let array10 = [23, -70, 5, 0, 18, 43];
let array11 = [2, -70, 5, 0, -18, -20];

getDifferenceBetweenArrays = (arrayFirst, arraySecond) => {
    let newArray = arrayFirst.filter(el => !arraySecond.includes(el));
    return newArray;
}

console.log(getDifferenceBetweenArrays(array10, array11));

