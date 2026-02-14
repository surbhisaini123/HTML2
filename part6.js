
// <<<<<<<<<<---------THIS KEYWORD--------->>>>>>..

// const student={
//     name:"xyz",
//     age:23,
//     phy:98,
//     che:95,
//     math:93,
//     average(){
//         console.log(this)
//         let avg=(this.phy+this.che+this.math)/3
//         console.log(avg)

//     }
    

// };
// student.average()
// console.log(student)
//  console.log(this)

// <<<<<<<<<<<<<<<<-----------TRY AND CATCH---------->>>>>>>
// console.log("hello")
// console.log("hello")
// // let a=8//
// try{
//     console.log(a)

// }catch(e){
//     console.log("caught a error....a is not define")
//     console.log(e)
// }

// console.log("hello")
// console.log("hello")

// <<,<<<<<---------ARRAOW FUNCTION-----------.>>>>.>>>

// const sum=(a,b)=>{
//     console.log(a+b)
// }
// sum(2,3)
// console.log(sum)

// const cube=n=>{
//     console.log(n*n*n)
// }
// cube(2)

// const pow= ()=>{
//     console.log('hello world')
// };
// pow()
// ,<<,<<<<<----------IPLICIT RETURN IN ARROW FUN----------...>>..
// const sum=(a,b)=>(
//   a+b
// )
// console.log(sum(24,2))

// <<,,,<,<<------------SET TIMEOUT------------->>.>>>>>>>.>>

// console.log("hiiii")
// setTimeout(()=>{
//     console.log("byyy")
// },3000);
// console.log("hello")

// <<<<<<<<<<------------SET INTEREL------------.>>.>.
// setInterval(()=>{
//     console.log("hellll")
// },2000)

// <<<<<<<<<--------PRACCTICE QUESTION---------->>>>>>>

// const square=n =>(
//     n*n
// );
// console.log(square(5))


let id=setInterval(()=>{
     console.log("hello world")
},2000)
setTimeout(()=>{
    clearInterval(id)
},10000)


   
