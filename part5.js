// <<<,<<<<<<<<<--------------FUNCTION -------->>.>>>>>

// function hello(){         
//     console.log("hiii")
// }
// hello()
// function printPoem(){
//     console.log("twinkle twinkle little star")
//     console.log("how I wounder what you are")
    
// }
// printPoem()
// function dice_roll(){
//     let dice=Math.floor(Math.random()*6)+1
//     console.log(dice)
// }
// dice_roll()

// <<<<<<<<----------FUNTION ARGUMENT--------------.>..>

// function printName(name,age){
//     console.log(`the name is ${name} and age is ${age}`)
// }
// printName("xyz",20)

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,4)

// <<<<<<<<<<<<<<<<<<-------PRACTICE QUESTION ---------->>>>.>>>..

// function average(a,b,c){
//     avg=(a+b+c)/3
//     console.log(avg)
// }
// average(2,3,3)

// function table(a){
//     for(let i=1;i<=10;i++){
//         // let A=a*i
//         // console.log(A)
//         let A =`${a} * ${i} = ${a*i}`
//         console.log(A)
//     }
// }
// table(2)

// table(3)


// <<<<,<<<<<--------RETURN KEYWORD--------->>>>>>

// function sum(a,b){
//     // console.log(a+b)
//     return a+b

// }

// console.log(sum(sum(2,3),3))

// -----SCOPE-------..

//    let sum=33 //global

// function calSum(a,b){
//     // let sum=a+b/         function scope
//     console.log(sum)
// }
// calSum(2,3)
// console.log(sum)

// <<<<<<<<<<<-------BLOCK SCOPE---------->>>>>>>>>>

// {
//     let a=9

// }
// console.log(a)

// <<<<<<<<<<<<<--------LEXICAL SCOPE -------->>>>>>>>>>>>

// function outerFunc(){
//     let x=7
//     let y=5
//     function innerFunc(){
//         let a=9
//         console.log(x)
//         console.log(y)
//     }
//     innerFunc()
//     console.log(x)
//     console.log(a)
// }
// // outerFunc()
// innerFunc()

// <<<<<<<--------PRACTICE QUESTION------>>>>>>>>>

// let greet="hello" //global scope
// function outergreet(){
//     let greet="namaste"  //function scope
//     console.log(greet)
//     function innergreet(){
//         console.log(greet) //lexical scope 
//     }
//     innergreet()
// }
// console.log(greet)
// outergreet()

// <<<<<<<<<<<-----------FUNCTION EXPRESION ----------->>>>>>>>>>>>

// let sum=function(a,b){
//     return a+b
// }
// console.log(sum(2,3))

// <<<<<<<<<<<<----------HIGHER ORDER FUNCTION && RETURN----------->>>>>>


// function multipleGreet(func,count){  //higer order function
//     for(let i=1;i<=count;i++){
//         func()
//     }
// }
// let greet=function (){
//     console.log("hello")
// }
// // multipleGreet(greet,10)
// multipleGreet(function(){console.log("namaste")},10)

//<<<<<<<<<<<<<<<---------METHOD---------->>.>>>>>>>>> 

// const calculator={
//     add: function(a,b){
//         return a+b
//     },
//     multipliation: function(a,b){
//         return a-b
//     },
//     sub: function(a,b){
//         return a-b
//     }
// }
// console.log(calculator)
// console.log(calculator.add(2,3))

// <<<<<<<<<<<<--------PRACTICE QUESTION------>>>>>>>>>>>>

//  Q1)
// let arr=[1,2,44,33,7,9]


// function larger(num){
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log( arr[i])
            
//         }
       
//     }

// }
// console.log(larger(6))
// /Q2)
// let str="abcdabccdefgggh"
// function extract_unique_char(str){
//     for(let i=0;i<str.length;i++){

//     }

// }
// Q4)
// let str=
// let count=0
// let vowels="aeiou"
// function vowelsToSearch(str){
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//         //   return count++
//             // console.log(count)
//               count++
//         }
        
//     }
//     console.log(count)
// }


// vowelsToSearch("ajortuge")
