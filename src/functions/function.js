function multiplicationTable(x) {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
        console.log("")
    }
}
// multiplicationTable(7)

function sumNumber(tillNumber) {
    let sum = 0
        
    for (let i = 1; i <= tillNumber; i++) {
        sum += i
    }
    console.log(sum)
}

// sumNumber(21)

function calculateFactoriel(number) {
    let result = 1

    for (let i = number; i >= 1; i--) {
        result *= i
    }
    console.log(result)
}

// calculateFactoriel(5)

function sumOddNumbersBetweenNumbers(minNumber, maxNumber) {
    let sum = 0;

    for (let i = minNumber; i <= maxNumber; i++) {
        if (i % 2 == 1)
            sum += i
    }
    console.log(sum)
}

// sumOddNumbersBetweenNumbers(10,30)

function celciusToFahrenheit(degree) {
    return degree * 1.8 + 32
}

// console.log(celciusToFahrenheit(20))

function fahrenheitToCelcius(degree) {
    return (degree - 32) / 1.8
}

// console.log(fahrenheitToCelcius(68))

function sumArray(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++)
        sum += ar[i]
    return sum
}

// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let sum = sumArray(ar)
// console.log(sum)

function averageArray(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum / ar.length
}

// let ar = [1, 3, 9, 15, 90];
// let avg = averageArray(ar);
// console.log(avg)

// ----------------------------------------------------------------------------------------
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// My solution
function getPositives(ar) {
    let positiveAr = []

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] >= 0)
            positiveAr.push(ar[i])
    }
    return positiveAr
}
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let ar2 = getPositives(ar);
// console.log(ar2)

function getPositives2(ar) {
    let positiveAr = []

    for (const index of ar) {
        if (index >= 0)
            positiveAr.push(index)
    }
    return positiveAr
}
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives2(ar);
// console.log(ar2)

function getPositives3(ar) {
    return ar.filter(el => el >= 0)
}
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives3(ar);
// console.log(ar2)

function findMax(ar) {
    let max = ar[0]
    for (const index of ar) {
        if (max < index)
            max = index
    }
    return max
}
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let max = findMax(ar);
// console.log("Max: ", max);

function nFibonacciArray(n) {
    let fibonacciArray = []
    if (n == 1)
        fibonacciArray.push(0)
    if (n >= 2) {
        fibonacciArray.push(0, 1)
        for (let i = 2; i < n; i++) {
            fibonacciArray.push(fibonacciArray[fibonacciArray.length-1] + fibonacciArray[fibonacciArray.length -2])
        }
    }
    return fibonacciArray
}
// console.log(nFibonacciArray(10))

function findFibonacci(n) {
    if (n == 1)
        return 0
    if (n == 2)
        return 1
    return findFibonacci(n-1) + findFibonacci(n-2)
}
// console.log(findFibonacci(11))

function isPrime(number) {
    if (number < 2)
        return false
    for (let i = 2; i <= number / i; i++) {
        if (number % i == 0)
            return false
    }
    return true
}
// console.log(isPrime(11))

// Coding challenge #17: Calculate the sum of digits of a positive integer number
// My solution
function sumDigits(number) {
    let sum = 0
    while (number > 0) {
        sum += number % 10
        number = Math.floor(number / 10)
        // math.floor yerine
        // (number - (number%10)) / 10 yapılabilir
        // böylece 1ler basamağı 0a eşitlenerek tam bölme işlemi elde edilir.
    }
    return sum
}
// console.log(sumDigits(12456))

function sumDigits2(number) {
    let numberArray = number.toString().split("")

    let sum = numberArray.reduce((acc, digit) => {
        return parseInt(acc) + parseInt(digit)
    }, 0)
    return sum
}
// console.log(sumDigits2(12932))

function printPrimes(nPrimes) {
    let j = 1
    for (let i = 2; j <= nPrimes; i++) {
        if (isPrime(i)) {
            console.log(j + ". prime => " + i)
            j++
        }
    }
}
// console.log(printPrimes(100))
// console.log(printPrimes(5))

function printPrimes2(nPrimes) {
    let n = 1
    let i = 2

    while (n <= nPrimes) {
        if (isPrime(i)) {
            console.log(n + ". prime => " + i)
            n++
        }
        i++
    }
}
// printPrimes2(10)
// printPrimes2(100)

function getPrimes(nPrimes, startAt) {
    let primesArray = []
    let i = startAt
    while (primesArray.length < nPrimes) {
        if (isPrime(i)) {
            primesArray.push(i)
        }
        i++
    }
    return primesArray
}
// console.log(getPrimes(10, 100))

function rotateLeft(ar) {
    let first = ar.shift()
    ar.push(first)
}
// let array = [1, 2, 3, "enes", "bilici"]
// console.log(array)
// rotateLeft(array)
// console.log(array)

function rotateRight(ar) {
    let last = ar.pop()
    ar.unshift(last)
}
// let array = [1, 2, 3, "enes", "bilici"]
// console.log(array)
// rotateRight(array)
// console.log(array)

// My Solution
function reverseArray(ar) {
    let temporary;
    for (let i = 1; i <= ar.length / 2; i++) {
        temporary = ar[i - 1]
        ar[i - 1] = ar[ar.length - i]
        ar[ar.length - i] = temporary
    }
    return ar
}
// let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(ar)
// reverseArray(ar)
// console.log(ar)

// or
function reverseArray2(ar) {
    let temporary;
    let leng = ar.length - 1
    for (let i = 0; i <= leng / 2; i++) {
        temporary = ar[i]
        ar[i] = ar[leng - i]
        ar[leng - i] = temporary
    }
    return ar
}
// let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(ar)
// reverseArray2(ar)
// console.log(ar)

// other solutions
function reverseArray3(ar) {
    let ar2 = []
    
    for (let i = 0; i < ar.length; i++) {
        ar2.push(ar[i])
    }
    return ar2
}
// let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(ar)
// ar.reverse()
// console.log(ar)

// let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(ar)
// ar.reverse()
// console.log(ar)


function reverseString(str) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
}
// let text = "javaScript ES6"
// console.log(text)
// let text2 = reverseString(text)
// console.log(text2)


function reverseString2(str) {
    let splitStr = str.split("")
    let reverseSplitStr = reverseArray(splitStr)
    let reverseStr = reverseSplitStr.join("")
    return reverseStr
    // veya
    // return str.split("").reverse().join("")
}
// let text = "javaScript ES6"
// console.log(text)
// let text2 = reverseString2(text)
// console.log(text2)

function reverseString3(str) {
    if (str === "") // This is the terminal case that will end the recursion
        return "";
    else
        return reverseString3(str.substr(1)) + str.charAt(0)
    /* 
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls

    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"
    
    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately
    
    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
    */
}
// let text = "javaScript ES6"
// console.log(text)
// let text2 = reverseString3(text)
// console.log(text2)

function mergeArray(ar1, ar2) {
    let newArray = []

    for (const el of ar1) {
        newArray.push(el)
    }
    // for (let i = 0; i < ar1.length; i++) {
    //     newArray.push(ar1[i])
    // }
    
    for (const el of ar2) {
        newArray.push(el)
    }
    // for (let i = 0; i < ar2.length; i++) {
    //     newArray.push(ar2[i])
    // }
    return newArray
}
// let ar1 = [1, 2, 3]
// let ar2 = [4, 5, 6]
// let mergeAr = mergeArray(ar1, ar2)
// console.log(mergeAr)

function mergeArray2(ar1, ar2) {
    return ar1.concat(ar2)
}
// let ar1 = [1, 2, 3]
// let ar2 = [4, 5, 6]
// let mergeAr = mergeArray2(ar1, ar2)
// console.log(mergeAr)
// console.log(ar1)
// console.log(ar2)

function mergeExclusive(ar1, ar2) {
    exclusiveArray = []
    
    for (const el of ar1) {
        if (!ar2.includes(el))
            exclusiveArray.push(el)
    }

    for (const el of ar2) {
        if (!ar1.includes(el))
            exclusiveArray.push(el)
    }
    return exclusiveArray
}
// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [1, 4, 5, 6, 14];
// let exclusiveArray = mergeExclusive(ar1, ar2)
// console.log(exclusiveArray)

function mergeExclusive2(ar1, ar2) {
    let arrDiff1 = ar1.filter((el) => {
        return !(ar2.includes(el))
    })
    let arrDiff2 = ar2.filter((el) => {
        return !(ar1.includes(el))
    })

    return arrDiff1.concat(arrDiff2)
}
// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [1, 4, 5, 6, 14];
// let exclusiveArray = mergeExclusive2(ar1, ar2)
// console.log(exclusiveArray)

function mergeLeft(ar1, ar2) {
    let mergeLeftArray = []

    for (const el of ar1) {
        if (!ar2.includes(el))
            mergeLeftArray.push(el)
    }
    return mergeLeftArray
}
// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [-1, 4, 5, 6, 14];
// let ar = mergeLeft(ar1, ar2);
// console.log(ar)

// My solution
function getDistinctElements(ar) {
    let newArray = []
    let i = 0

    while (i < ar.length) {
        if (!newArray.includes(ar[i])) {
            newArray.push(ar[i])
        }
        i++
    }
    return newArray
}
// let ar = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]
// let getDistinctElementsAr = getDistinctElements(ar)
// console.log(getDistinctElementsAr)

function isInArray(n, ar) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === n) 
            return true
    }

    return false
}

function getDistinctElements2(ar) {
    let ar2 = []
    
    for (let i = 0; i < ar.length; i++) {
        if (!isInArray(ar[i], ar2)) {
            ar2.push(ar[i])
        }
    }
    return ar2
}
// let ar = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]
// let getDistinctElementsAr = getDistinctElements2(ar)
// console.log(getDistinctElementsAr)

function isInArray2(n, ar, fromIndex, toIndex) {
    for (let i = fromIndex; i <= toIndex; i++) {
        if (ar[i] === n)
            return true
    }
    return false
}

function getDistinctElements3(ar) {
    let ar2 = []
    let lastIndex = ar.length - 1
    
    for (let i = 0; i <= lastIndex; i++) {
        if (!isInArray2(ar[i], ar, i + 1, lastIndex)) {
            ar2.push(ar[i])
        }
    }
    return ar2
}
// let ar = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]
// let getDistinctElementsAr = getDistinctElements3(ar)
// console.log(getDistinctElementsAr)

// 27 challange done!