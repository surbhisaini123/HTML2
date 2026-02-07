// <<<<<<<<<<<<<<<<<------------FOR LOOP--------->>>>>>>

// for(let i=10;i<=5;i++){
//     console.log(i)
// }
// for(let i=5;i>=1;i--){
//     console.log(i)
// }

// for(let i=1;i<=15;i=i+2){
//     console.log(i)

// }
// console.log("  ")
// for(let i=15;i>=1;i=i-2){
//     console.log(i)
// }

// for(let i=2;i<=10;i=i+2){
//     console.log(i)
// }

// for(let i=5;i<=50;i=i+5){
//     console.log(i)

// }
// let n=prompt("enter a number")
// n=parseInt(n)
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i)
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(j)
//     }

// }
// <<<<<<<<<--------WHILE LOOP-------->>>>>>>>>
// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }

//<<<<<<<<-----SMALL TASK------>>>>>>>>>

const favmovie="avtar"
let guess=prompt("enter my fav movie")
while((guess!=favmovie)&&(guess!="quit")){
   guess=prompt("wrong guess try again")
}
if(guess==favmovie){
    console.log("congratulation!!!!!!!! you guess correct movie ")
}else{
    console.log("you quit")
}