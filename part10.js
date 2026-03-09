// <<<<<<<<<<<<-------CALL STACK------->>>>>>>>>
function hello(){
    console.log("inside hello func")
    console.log("hello")
}
function demo(){
    console.log("calling hello func")
    hello()
}
console.log("calling demo func")
demo()
console.log("done,byy")