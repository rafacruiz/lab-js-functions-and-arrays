// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return (num1 > num2) ? num1 : num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let LongestWord = ''

    if (!words.length) {
        return null
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > LongestWord.length) {
            LongestWord = word;
        }
    }

    return LongestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let count = 0;

    if (!numbers.length) {
        return count
    }

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        count += number
    }

    return count
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    
    if (!numbers2.length) {
        return 0
    }

    return sumNumbers(numbers2) / numbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordSearch) {
    
    if (!words2.length) {
        return null
    }

    for (let i = 0; i < words2.length; i++) {
        const word = words2[i];
        
        if (word === wordSearch) {
            return true
        }
    }

    return false
}
