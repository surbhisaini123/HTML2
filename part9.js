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

let btn =document.querySelector("button")
btn.addEventListener("click",function(){
    // console.log("generated a random color")
    let h2=document.querySelector("h2")
    let randomColor=getRandomcolor()
    h2.innerText=randomColor

    let div=document.querySelector("div")
    div.style.backgroundColor = randomColor
    console.log("color is updated")
})
function getRandomcolor(){
    let red= Math.floor(Math.random()*255)
      let green= Math.floor(Math.random()*255)
        let blue= Math.floor(Math.random()*255)

        let color=`rgb(${red},${green},${blue})`
        return color
}