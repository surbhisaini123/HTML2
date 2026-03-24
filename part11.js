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

// AWAIT KEYWORD

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              let num= Math.floor(Math.random()*10)+1
        console.log(num)
        resolve()

        },1000)
      
    })
}

async function demo(){
    await getNum()
     await getNum()
      await getNum()
       getNum()
}