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
//  function savetoDb(data){
//     return new Promise((succes,failure)=>{
//          let internetSpeed=Math.floor(Math.random() * 10)+1
//          if(internetSpeed > 4){
//             succes("sucess: data was saved")
//          }else{
//            failure("failure: weak connection")
//         }
//     })
   
   
// }
// let A=savetoDb("surbhi")
// console.log(A)
// let A1=savetoDb("surbhi")
// console.log(A1)

// <<<<,<<-------then() and catch()
// function savetoDb(data){
//     return new Promise((succes,failure)=>{
//          let internetSpeed=Math.floor(Math.random() * 10)+1
//          if(internetSpeed > 4){
//             succes("sucess: data was saved")
//          }else{
//            failure("failure: weak connection")
//         }
//     })
   
   
// }
// let request=savetoDb("surbhi")
// request.then(()=>{
//     console.log("promish was resolved")
// })
// .catch(()=>{
//     console.log("promish was rejected")
// })
// improveent way
// savetoDb("surbhi").then(()=>{
//     console.log("promish was resolved")
// })
// .catch(()=>{
//     console.log("promish was rejected")
// })

// <<<<<<<<<<<-------PROMISH CHANING----------->>>>>>>>>>>
// function savetoDb(data){
//     return new Promise((succes,failure)=>{
//          let internetSpeed=Math.floor(Math.random() * 10)+1
//          if(internetSpeed > 4){
//             succes("sucess: data was saved")
//          }else{
//            failure("failure: weak connection")
//         }
//     })
// }

// savetoDb("surbhi").then(()=>{
//     console.log("data1 saved")
//  savetoDb("khushi").then(()=>{
//         console.log("data2 savved")
//     })
// })
// .catch(()=>{
//     console.log("promish was rejected")
// })

// improved version
// function savetoDb(data){
//     return new Promise((succes,failure)=>{
//          let internetSpeed=Math.floor(Math.random() * 10)+1
//          if(internetSpeed > 4){
//             succes("sucess: data was saved")
//          }else{
//            failure("failure: weak connection")
//         }
//     })
// }

// savetoDb("surbhi").then(()=>{
//     console.log("data1 saved")
//       return savetoDb("khushi")
// })
// .then(()=>{
//         console.log("data2 savved")
//         return savetoDb("helooooooo")
//     })
// .then(()=>{
//     console.log("data3 saved")
// })
// .catch(()=>{
//     console.log("promish was rejected")
// })

// <<<<<<<<<<<-------RESULT AND ERROR-------->.>>>>
// function savetoDb(data){
//     return new Promise((succes,failure)=>{
//          let internetSpeed=Math.floor(Math.random() * 10)+1
//          if(internetSpeed > 4){
//             succes("sucess: data was saved")
//          }else{
//            failure("failure: weak connection")
//         }
//     })
// }

// savetoDb("surbhi").then((result)=>{
//     console.log("data1 saved")
//     console.log("results of prmise:",result)
//       return savetoDb("khushi")
// })
// .then((result)=>{
//         console.log("data2 savved")
//          console.log("results of prmise:",result)
//         return savetoDb("helooooooo")
//     })
// .then((result)=>{
//     console.log("data3 saved")
//      console.log("results of prmise:",result)
// })
// .catch((error)=>{
//     console.log("promish was rejected")
//      console.log("error of prmise:",error)
// })


// refatoring old code
 h1=document.querySelector("h1")
function changeColor(color,delay){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
   h1.style.color=color
   resolve("color change")
   
},delay)

    })

   
}
 changeColor("red",1000).then(()=>{
        console.log("red color was complete")
        return changeColor("blue",1000)
    })
   .then(()=>{
    console.log("orange color was ccomplete")
   })