// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}
function isFive(input) {
    if (input == 5){
        return true;
} else {
        return false;
    }
}
function isEven(number) {
    if (parseFloat(number) % 2 === 0){
        return true;
} else {
        return false;
    }
}
//Lesson from -
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf


const vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
function isVowel (vowel) {
    if ( -1 !== vowelArray.indexOf(vowel)) {
        return true;
    } else {
        return false;
    }
}
