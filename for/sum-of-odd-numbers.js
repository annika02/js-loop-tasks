/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
var sum=0;
for(let i=91; i<=129; i+=2){
    console.log("Odd numbers are : ",i)
    sum = sum + i;
   
}
console.log("Sum of odd numbers are : ",sum)
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
var sum1=0;
for(let j=51; j<=85; j++){
    
    if(j%2===0){
    console.log("Even numbers are : ",j)
    sum1 = sum1 + j;
    }
   
}
console.log("Sum of even numbers are : ",sum1)