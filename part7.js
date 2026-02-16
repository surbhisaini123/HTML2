// ,,<<<<<<<<<<<<--------FOREACH METHOD--------.>>>>>>>

// let arr=[1,2,3,4,5]

// // let print=(el)=>{
// //     console.log(el)
// // }
// // let print=function(el){
// //     console.log(el)
// // };
// arr.forEach(function(el){
//     console.log(el)
// })

// let arr=[
//     {  
//       name:"xyz",
//       age:23
//     },
//     {
//         name:"abc",
//         age:24
//     }

// ]
// arr.forEach(function(student){
//     // console.log(student)
//     console.log(student.age)
//     // console.log(student.name)
// })

// <<<<<<<<<<------MAP ------>>>>>>>>>>>
// let arr=[1,2,3,4,5]
// let cubic=arr.map((el)=>{
//     return el*3
// });
// console.log(cubic)
// console.log(arr)
// let stud=[
//     {  
//       name:"xyz",
//       age:23,
//       marks:97
//     },
//     {
//         name:"abc",
//         age:24,
//         marks:95
//     }

// ]

// let gpa=stud.map((el)=>{
//     return el.marks/10
// })
// console.log(gpa)

// <<<<<<<<<<<--------FILTER ---------->>>>>>>>>>>

// let num=[1,2,3,4,5,6,7,8,9,10]
// let even=num.filter((el)=>{
//     return el%2==0
// })
// let odd=num.filter((el)=>{
//     return el%2!=0
// })
// console.log(even)
// console.log(odd)

// <<<<<<<<<<<<<---------EVERY------>>>>>>>>>>>

// let arr=[2,4,6,8]

// let even=arr.every((el)=>{
//     return el%2==0
// })
// console.log(even)

// <<<<<<<,--------SUM----------->>>>>>
// let arr=[2,1,3,8]
// let even=arr.Sum((el)=>{
//     return el%2==0
// })
// // let even=arr.Sum((el)=>{
// //     return el%2==0
// // })
// console.log(even)
//,<,,,<<<<<-------REDUCE METHOD-------->>>>>>>

// let arr=[1,2,3,4]
// let finalValue=arr.reduce((res,el)=>{
//     console.log(res)
//     return res+el
// })
// console.log(finalValue)

//,,<<<<<<<<,------------MMAX IN ARRAY----------->>..

// let arr=[1,2,4,6,9,3,21,31]
// let ans=arr.reduce((max,el)=>{
//     if(max<el){
//         return el
//     }else{
//         return max
//     }
// })
// console.log(ans)
//<<<<,<----------PRACTICE QUESTION ------------>>>>>>>
// let arr=[10,20,30,40,]
// let multiple=arr.every((el)=>{
//     return el%10==0
// })
// console.log(multiple)
// let arr=[6,3,6,7,9]
// let ans=arr.reduce((min,el)=>{
//     if(min>el){
//         return el
//     }else{
//         return min
//     }
// })
// console.log(ans) 

// <,<<<<--------default parameter-------------->>>>>>>>>>>>
// function sum(a,b=6){
//     return a+b
// }
// console.log(sum(2))

//<<<<<------------SPREAD------------>>>>>>>>

// let arr=[1,2,3,4,5,6,8,66,7,5,23,2,2]
// console.log(...arr)
// let str="surbhi saini "
// console.log(...str)
// <,<<<<------spread object--------.>>>>.

//<,,<<<--------------destrusturing--------------->>>
let name=["xyz","abc","pqr","lmn","out"]
let[winner,runnerup,secondrunner,...other]=name
// console.log(winner)
// console.log(runnerup)
console.log(...other)