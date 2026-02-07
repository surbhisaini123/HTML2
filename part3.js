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

// const favmovie="avtar"
// let guess=prompt("enter my fav movie")
// while((guess!=favmovie)&&(guess!="quit")){
//    guess=prompt("wrong guess try again")
// }
// if(guess==favmovie){
//     console.log("congratulation!!!!!!!! you guess correct movie ")
// }else{
//     console.log("you quit")
// }

// <<<<<<<<<<<--------BRAEK STATEMENT------->>>>>
// let i=1
// while(i<=10){
//     if(i==3){
//         console.log("use a break at 3")
//         break
//     }
//     console.log(i)
//     i++
// }

//  const favmovie="avtar"
// let guess=prompt("enter my fav movie")
// while((guess!=favmovie)){
//     if(guess=="quit"){
//         console.log("you quit")
//         break
//     }
//    guess=prompt("wrong guess try again")
// }
// if(guess==favmovie){
//     console.log("congratulation!!!!!!!! you guess correct movie ")
// }

// <<<<<<<<<<----------LOOP WITH ARRAY------>>>>>>>>>>
// let fruit=["apple","mango","banana","litch","orange"]
// // for(let i=0;i<fruit.length;i++){
// //     console.log(i,fruit[i])
// // }
// for(let i=fruit.length-1;i>=0;i--){
//     console.log(i,fruit[i])
// }

// let student=[["xyz",98],["abc",87,"cde"],["pqr",96]]
// // console.log(student)//
// for(let i=0;i<student.length;i++){
//     console.log(`info of #${1}`)
//     for(let j=0;j<student[i].length;j++){
//         console.log(`j=${j},${student[i][j]}`)
//         // console.log(student[i][j])
//     }
// }

// <,<<<<<<<<---------FOR-OF LOOP-----------.>>>>>>>>
// let  fruits=["apple","mango","banana","litch","orange"]
// for(fruit of fruits){
//     console.log(fruit)
// }
// for(name of "surbhi"){
//     console.log(name)
// }
// <<<<<<<<-----------NESTED FOR-OF LOOP---->>>>>
let student=[["xyz",98],["abc",87,"cde"],["pqr",96]]
for(info of student){
    for(details of info){
        console.log(details)
    }
}