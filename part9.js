// <<<<<<<<------------DOMM EVENT----------->..>>>
// onclick event and onmouseenter
// let btn=document.querySelector("button")
// let btns=document.querySelectorAll('button')
// console.dir(btns)
// for(let btn of btns){
// btn.onclick=button
// btn.onmouseenter=function(){
//     console.log("you enter a button")
// }
// console.dir(btns)
// }
// // const button=()=>{
// //     alert("hello")
// // }
// function button(){
//     alert("button is clicked")

// }

//<<<,<<<----------EVENT LISTENER------------->>>>>>>>

// let btns=document.querySelectorAll('button')
// for(let btn of btns){
//     // btn.onclick=sayHello
//     // btn.onclick=sayByy
//     // btn.addEventListener("click",sayHello)
//     // btn.addEventListener("click",sayByy)
//     btn.addEventListener("dblclick", ()=>{
//         console.log("you click double")
//     });

// }
// function sayHello(){
//     alert("hello")
// }
// function sayByy(){
//     alert("byyyyy")
// }

// <<<<<<<<<<<<<<-----ACTIVITY----------------->>>>>>>>>>>>>>>

// let btn =document.querySelector("button")
// btn.addEventListener("click",function(){
//     // console.log("generated a random color")
//     let h2=document.querySelector("h2")
//     let randomColor=getRandomcolor()
//     h2.innerText=randomColor

//     let div=document.querySelector("div")
//     div.style.backgroundColor = randomColor
//     console.log("color is updated")
// })
// function getRandomcolor(){
//     let red= Math.floor(Math.random()*255)
//       let green= Math.floor(Math.random()*255)
//         let blue= Math.floor(Math.random()*255)

//         let color=`rgb(${red},${green},${blue})`
//         return color
// // }
// let paharagraph=document.querySelector("p")
// paharagraph .addEventListener("click",function(){
//     console.log("pahagraph was clicked")
// })
// let box=document.querySelector(".box")
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside")
// })
// <<<<<<<<<<<<<<<<-------"THIS" IN EVENT LISTENER------->>>>>>>
// let paharagraph=document.querySelector("p")
// paharagraph.addEventListener("click",function(){
//     console.log(this.innerText)
//     // console.dir(this)
//     this.style.backgroundColor="blue"
    
// })
// let paharagraph=document.querySelector("p")
// let div=document.querySelector("div")
// let h2=document.querySelector("h2")
// let btn=document.querySelector("button")
// function changeColor(){
//     console.log(this.innerText)
//     this.style.backgroundColor="pink"

// }
// paharagraph.addEventListener("click",changeColor)

// div.addEventListener("click",changeColor)

// h2.addEventListener("click",changeColor)

// btn.addEventListener("click",changeColor)

// <<<<<<<<<<<<<<<<<<------KEYBOARD EVENT------------------>>>>>>>>>>>>

// let inp=document.querySelector("input")
// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code)
//     if(event.code =="ArrowUp"){
//         console.log("obj move forword")

//     }else if(event.code =="ArrowDown"){
//         console.log("obj move backward")

//     }else if(event.code =="ArrowLeft"){
//         console.log("obj move left")

//     }else if(event.code =="ArrowRight"){
//         console.log("obj move right")
//     }
// });
// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key)
//      console.log("code=",event.code)
//     console.log("key was press")
// })
// inp.addEventListener("keyup",function(){
//     console.log("key was releas")
// })

// <<<<<<<<<<<<<<----------KEYBOARD EVENT----------.>>>>>>>>>>

// let inp=document.querySelector("input")
// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code)
//     if(event.code =="KeyU"){
//         console.log("obj move Up")

//     }else if(event.code =="KeyD"){
//         console.log("obj move down")

//     }else if(event.code =="KeyL"){
//         console.log("obj move left")

//     }else if(event.code =="KeyR"){
//         console.log("obj move right")
//     }
// });
// <<<<<<<<<<<<---FORM EVENT-------->>>>>>>>>>>>
// let form=document.querySelector("form")
// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     console.log("form submited")
// })
// <<<<<<<<<<<<---------EXTACING FORM DATA----->>>>>>>
let form=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    // let inp=document.querySelector("input")
    // console.log(inp)
    // // console.log(inp.innerText)
    // console.dir(inp)
    // let user=document.querySelector("#user")
    // let pass =document.querySelector("#pass")
    let user=this.elements[0]
    let pass =this.elements[1]
    console.log(user.value)
    console.log(pass.value)
    alert(`${user.value} is your password ${pass.value} is set`)

})