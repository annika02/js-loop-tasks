/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
var sum=0;
let i=91;
while( i<=129){
    console.log("Odd numbers are : ",i)
    sum = sum + i;
    i+=2;
}
console.log("Sum of odd numbers are : ",sum)
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
var sum1=0;
let j=51; 
while(j<=85){
    
    if(j%2===0){
    console.log("Even numbers are : ",j)
    sum1 = sum1 + j;
    }
    j++
}
console.log("Sum of even numbers are : ",sum1)