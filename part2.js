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

// // <<<<----PRACTICE QUESTION----->>>>>

// let month=["january","july","march","august"]
// month.shift()
// month.shift()
// console.log(month)
// month.unshift("june")
// month.unshift("july")
// console.log(month)

//<<<<--------INDEXOF AND INCLUDES-------->>>>>
// let fruit=["apple","mango","grapes"]  
// // console.log(fruit.indexOf("Mango"))
// console.log(fruit.includes("applee"))

// <<<<<<<-------CONCATINATION AND REVERSE---------->>>>>
// let fruit=["apple","mango","grapes"]  
// let veg=["potato","onion","peas"]
// let concatination=fruit.concat(veg)
// console.log(concatination)

// console.log(veg.reverse())
// console.log(veg)
// console.log(veg.reverse())

// <<<<<<----------SLICE METHOD-------->>>>>>>>
// let color=["white","red","blue","green"]
// console.log(color.slice())
// console.log(color.slice(2))
// console.log(color.slice(1,3))
// console.log(color.slice(-2))

// <<<<<<<<<------splice method--->>>>

// let fruit=["apple","mango","grapes","orange","pineapple","watermelon"]  
// console.log(fruit.splice(4))
// console.log(fruit)
// console.log(fruit.splice(0,2))
// console.log(fruit)
// console.log(fruit.splice(1,0,"watermelon","pineapple"))
// console.log(fruit)
// console.log(fruit.splice(2,1,"lemon"))
// console.log(fruit)

//<<<<<<------------ARRAY SORT--------------->>>>>>>
// let char=["k","u","r","a","e","l"]
// console.log(char.sort())
// let num=["10","5","3","11","3"]
// console.log(num.sort())
// <<<<<<-------PRACTICE QUESTION ------------->>>>>>>>
// 1)
// let month=["january","july","march","august"]
// console.log(month.splice(0,1))
// console.log(month)
// console.log(month.splice(1,0,"june"))
// console.log(month)

// let language=["C","C++","HTML","JS","PYTHON","JAVA","C#","SQL"]
// console.log(language.reverse())
// console.log(language.indexOf("JS"))

// <<<<<<<<----------CONSTANT ARRAY------------->>>>>>>>>>

// const a=7
// // console.log(a)
// // console.log(a=4)

// const arr=["1","2",'3',"4"]
// console.log(arr)
// arr.push(7)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr=['1',"2","4"]
// console.log(arr)

// <<<<<<<<<<<<-------NESTED ARRAY----------->>>>>>>>

// let nums=[["1","2"],['3','4'],['6','5']]
// console.log(nums)
// console.log(nums[0])
// console.log(nums[0][1])
// console.log(nums.length)

// <<<<<<<<---------PARCTICE QUESTION------>>>>>>>
// TIC TAC TOC GAME
let game=[['X',null,'O'],[null,'X',null],['O',null,'X']]
console.log(game)
game[0][1]='O'
console.log(game)