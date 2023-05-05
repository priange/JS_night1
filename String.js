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
    























    // for (x in numbers ){
    //     let sum=0
    //     for(let i=0;i<numbers.length;i++){
    //         sum+=i
    //         return sum
           
    //     }
    //     if (sum>100){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
           
            
    //     }
    // }
    // // const numbers=[12,60]
    // console.log(checkNumbers([12,60]))
