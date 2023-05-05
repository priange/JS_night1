// Write a function that takes a string as input and returns the
//  number of vowels in the string.
function voweled(string){
    const give=string.match(/[a,e,i,o,u]/gi).length;
    return give;
   
}
let string="Beautiful"
console.log(voweled(string))
// Write a function that takes an array of numbers as input and 
// returns the sum of all the numbers.
function sumNumbers(numbers){
    let sum=0;
    for (i in numbers)
        sum+=numbers[i]
        return sum
    
    }

let result=sumNumbers([0,11,2])
console.log(result)
// Write a function that takes two numbers as input and returns true 
// if their sum is greater than 100, and false otherwise.

function checkNumbers(number){
    let sum=0;
    for(x in number){
        sum+=number[x]
        return sum
    }


}
const reflect=checkNumbers([12,2])
console.log(reflect)

function getReply(total){
    if(total>100){
        return true
    }
    else{
        return false
    }

}

console.log(getReply(12))


// Write a function that takes in a array of numbers as a parameter 
// and returns the second largest number in the array
function mergeSort(arr){
    let sorted=arr.sort()
   return sorted
   
}
const arr=[1,2,20,19,31,12]
console.log(sorted(mergeSort(arr[-2])))
// Write a function that takes a string as a parameter and returns 
// true if the string is a palindrome and false otherwise
function palindrone(string){
    const reversed=string.split('').reverse().join('')
    if(reversed===string){
        return string + " " + "is a palindrone"
    }
    else{
        return string + " " + "is not a palindrone"
    }
}
console.log(palindrone("mom"))
console.log(palindrone("dad"))
console.log(palindrone("Emma"))


    
