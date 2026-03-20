// <<<<<<<<<<<<-------CALL STACK------->>>>>>>>>
// function hello(){
//     console.log("inside hello func")
//     console.log("hello")
// }
// function demo(){
//     console.log("calling hello func")
//     hello()
// }
// console.log("calling demo func")
// demo()
// console.log("done,byy")

// <<<<-----visulization call stack------>>>>>>>>>
// function one(){
//     return 1
// }
// function two(){
//     return one()+one()
// }
// function three(){
//     let ans=two()+one()
//     console.log(ans)
// }
// three()
// <<<<<<<<<<<<--------BREAKPOINT------->>>>>>>>>>
// <<<<<<<<<<<<<---------SINGLE THREAD-------------->>>>>>>>>
//<<<<<<<<---------CALLBACK HELL-------->>>

// h1=document.querySelector("h1")
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//    h1.style.color=color
//    if(nextColorChange)
//     nextColorChange()
// },delay)

// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("grey",1000)
//                 })
//             })
//         })
//     })

// })

// changeColor("red",1000)
// changeColor("orange",2000)
// changeColor("blue",3000)

// /<<<<<<<<<<<<------PROISE----------.>>>>>>>>>>>>>
// 1st method
// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random() * 10)+1
//     if(internetSpeed > 4){
//         console.log("your data was saved:",data)
//     }else{
//         console.log('weak onnetion')
//     }
// }
// 2nd method call back 
// function savetoDb(data,succes,failure){
//     let internetSpeed=Math.floor(Math.random() * 10)+1
//     if(internetSpeed > 4){
//         succes()
//     }else{
//         failure()
//     }
// }
// savetoDb(
//     "hello",
//     ()=>{
//          console.log(" success :your data was saved")
//          savetoDb(
//             "surbhi",
//             ()=>{
//                 console.log("succes2 data2 was saved")
//                 savetoDb(
//                     'khushi',
//                     ()=>{
//                         console.log("succes3 data was saved")
//                     },
//                     ()=>{
//                         console.log("failure3 weak onnection")
//                     }
//                 )

//             },
//             ()=>{
//                 console.log("failure2 weak connkection")
//             }
//          )
//         },
//     ()=>{
//         console.log('failure:weak onnetion')

//     }
// )

// <<<<<<<<<<<<<<<--------------PROMISH-------------->>>>>>>>
 function savetoDb(data){
    return new Promise((succes,failure)=>{
         let internetSpeed=Math.floor(Math.random() * 10)+1
         if(internetSpeed > 4){
            succes("sucess: data was saved")
         }else{
           failure("failure: weak connection")
        }
    })
   
   
}
let A=savetoDb("surbhi")
console.log(A)
let A1=savetoDb("surbhi")
console.log(A1)