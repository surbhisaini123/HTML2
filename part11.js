// ASYNC KEYWORD

// async function greet(){
//     // abc.abc();/
//     throw "some random error";
//     return "heloo"
// }

// greet()
// .then((result)=>{
//     console.log("proish was resolved")
//     console.log(" resul was: ",result)
// })
// .catch((err)=>{
//     console.log("promish was rejected with err:",err)

// })
// let demo= ()=>{
//     return 5
// }

// <<<<<<<<<----------AWAIT KEYWORD---------->>>>>>>>>>>

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               let num= Math.floor(Math.random()*10)+1
//         console.log(num)
//         resolve()

//         },1000)
      
//     })
// }

// async function demo(){
//     await getNum()
//      await getNum()
//       await getNum()
//        getNum()
// }

// h1=document.querySelector("h1")

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1
//             if(num>3){
//                 reject("promise is reject")
//             }
//             h1.style.color=color
//             console.log(`color change to ${color}!`)
//             resolve("color changed")
//         },delay)
//     })
    
// }

// async function demo(){
//     try{
//         await changeColor("red",1000)
//     await changeColor("blue",1000)
//     await changeColor("green",1000)
//    await changeColor("pink",1000)

//     }catch(err){
//         console.log("error is caught")
//         console.log(err)
//     }
    

//    let a=3
//    console.log("new number is:",a+3)

// }

// kdesd

// <<<<<<<<<<<<<<<<----------API------->>>>>>>>>>
// <<<<<<<<-------STRING CONVERT INTO JSON------->>>>>>>>
// let JSONres=
// '{"fact":"Tylenol and chocolate are both poisionous to cats.","length":50}'
// // console.log(JSONres.fact)
// let validRes=JSON.parse(JSONres)
// console.log(validRes)
// console.log(validRes.fact)
// console.log(validRes.length)

// // <<<<<<<<-------JSON CONVERT INTO STRING------->>>>>>>>
// let student={
//     name:"surbhi",
//     age:19,
//     marks:90
// }
// // console.log(student)
// let jsonData=JSON.stringify(student)
// console.log(jsonData)

// <<<<<<<<<<---------OUR FIRST REQUEST------->>>>>>>>>
// <<<<<<<<<<------ONLY ONE REQUEST------->>>>>>>>>>
// let url="https://catfact.ninja/fact"
// fetch(url)
// .then((response)=>{
//     console.log(response)
//     return response.json()
//     // console.log(response.json())
//     // response.json().then((data)=>{
//     //     console.log(data)
//     // })
// })
// .then((data)=>{
//     // console.log(data)
//      console.log(data.fact)
// })
// .catch((err)=>{
//     console.log("ERROR-",err)
// })
// <<<<<<<<<<-----------MORE THAN ONE REQUEST---------->>>>>>>>>>>
//  let url="https://catfact.ninja/fact"
//  fetch(url)
//  .then((res)=>{
//     return res.json()
//  })
//  .then((data1)=>{
//     console.log("data1-----",data1.fact)
//     return fetch(url)
//  })
//  .then((res)=>{
//     return res.json()
//  })
//  .then((data2)=>{
//     console.log("data2-----",data2.fact)
//  })
//  .catch((err)=>{
//     console.log("ERROR--",err)
//  })

// <<<<<<<<<<<<---------FETCH USING WITH AWAIT ASYNC--------->>>>>>>>
let url="https://catfact.ninja/fact"

async function getFacts(){
    try{
        let res1= await fetch(url)
    let data1 =await res1.json()
    console.log(data1.fact)
console.log("-------------------------")
     let res2= await fetch(url)
    let data2 =await res2.json()
    console.log(data2.fact)
console.log("-------------------------")
     let res3= await fetch(url)
    let data3 =await res3.json()
    console.log(data3.fact)
    console.log("-------------------------")

    } catch(e){
        console.log("errrrrrrrrrr---------",e)

    }
    


    console.log("hiiii")

}