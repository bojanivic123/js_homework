// 1

let array1 = [4, -22, 0, 56, -9, 122, -400, 1500, 3];

getNewArrayAfterFive = (...elements) => {
    let newArray = [];
    newArray = elements.slice(5);
    return newArray;
}

console.log(getNewArrayAfterFive(...array1));

// 2

const student = {
    name: "Petar",
    surname: "Petrovic",
    age: 21
}

getObjectCopy = object => {
    let newObject = { ...object};
    newObject.x = 5;
    return newObject;
}

console.log(getObjectCopy(student));

// 3

const student2 = {
    name: "Milan",
    surname: "Milanovic",
    age: 23
}

getObject = (object, key, value) => {
    let newObject = { ...object};
    newObject[key] = value;
    return newObject;
}

console.log(getObject(student2, "yearOfStudying", 4));

// 4

let array3 = [4, 0, -100, 88, -647, 33];
let array4 = [100, 88, 0, -47, 3];

mergeArrays = (firstArray, secondArray) => {
    let newArray = [ ...firstArray, ...secondArray];
    return newArray;
}

console.log(mergeArrays(array3, array4));

// 5

const student3 = {
    name: "Petar",
    age: 21
}

const student4 = {
    yearOfStudyng: 5,
    age: 24
}

getNewObject = (firstObject, secondObject) => {
    let newObject = { ...firstObject, ...secondObject};
    return newObject;
}

console.log(getNewObject(student3, student4));

// 6

let array6 = [4, 0, -100, 33];
let array7 = [100, 88, 0, -47, 3];
let array8 = [88, -647];

getArray = (...arrays) => {
    let newArray = [];
    arrays.forEach(array => {
        newArray.push(array);
    });
    return newArray;
}

console.log(getArray(...array6, ...array7, ...array8));





