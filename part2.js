// STRING

// <<------TRIM METHOD--------->>>

// let msg="   hello   "
// console.log(msg)
// let newMsg=msg.trim()
// console.log(newMsg)
// let passWord=prompt("password")
// console.log(passWord)
// let NewPassword=passWord.trim()
// console.log(NewPassword)


// <<<<<<<<<<<<<-------------- toLowerCase AND toUpperCase------------>>>>>.
// let str='hello'
// console.log(str.toUpperCase())
// let str1='BYYYYYYY'
// console.log(str1.toLowerCase())


// <<<<-----------STRING METHOD WITH ARGUMENT------->>>>>>>>
// let str="iloveCoding"

// console.log(str.indexOf("love"))
// console.log(str.indexOf("k"))

// <<<<<<<------METHOD CHAIN--------->>>>>>>

// let msg="      hyyyy how are you"
// let newMsg=msg.trim().toLocaleUpperCase()
// console.log(newMsg)
// console.log(msg)

// <<<<<<<<<<<--------SLICE METHOD------>>>>>>>>
// let str="hello"
// // console.log(str.slice(0,1))
// console.log(str.slice(-3))

// <<<<<<<<--------REPLACE AND REPEATE METHOD------->>>>>>
// let msg="hyy how are you"
// console.log(msg)
// console.log(msg.replace("how","who"))
// console.log(msg.replace("o","i"))

// let msg="hyyyyyyyyy"
// console.log(msg)
// console.log(msg.repeat(5))

// <<<<<<<---------PRACTICE QUESTION-------->>>>>>>
// 1)  
// let msg="help!"
// console.log(msg.trim().toUpperCase())
// 2)
// let name="apnacollege"
// console.log(name.slice(4,9))
// console.log(name.indexOf("na"))
// console.log(name.replace("apna","our"))
// 3)

// let name1="apnacollege"
// let A= name1.slice(4)
// console.log(A)
// console.log(name1.slice(4).replace("l","t").replace("l","t"))
// console.log(name1.slice(4).replace("l","t"))

// <<<<<<-----------------ARRAY-------------->>>>>>>>>>>

// let stu=["xyz","abc","pqr"]
// let num=[1,2,3,4]
// let info=["xyz",22,22.3]  //mixed array
// let emptyarr=[]  //emptyarray

// <<<<-------ARRAY ARE MUTABLE----->>>>>

// let arr=["xyz","abc","pqr"]
// console.log(arr)
// console.log(arr[2])
// arr[1]="CCC"
// console.log(arr)

// <<<<<<<-------ARRAY METHOD--------->>>>>>
// push pop method are use
// let fruit=["apple","mango","grapes"]
// console.log(fruit)
// console.log(fruit.push("orange"))
// console.log(fruit)
// console.log(fruit.pop())
// console.log(fruit)
// console.log(fruit.unshift("pineapple"))
// console.log(fruit)
// console.log(fruit.shift())
// console.log(fruit)

// <<<<----PRACTICE QUESTION----->>>>>

let month=["january","july","march","august"]
month.shift()
month.shift()
console.log(month)
month.unshift("june")
month.unshift("july")

console.log(month)

