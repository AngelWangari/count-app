//conditionals
// var ageReq=18;
// if(ageReq===18){
//     console.log("You qualify to apply for an ID card")
// }
// else if (ageReq!==18){
//     console.log("You do not qualify to appy for an ID card")
// }

//looping
// var fName= "Angel"
// var sName= "Wangari"
// var lName= "Mathenge"
// var fullName= fName+" "+ sName +" "+lName
// console.log(fullName)

// var name=prompt("Enter your Name:")
// var id =prompt("Enter your ID:")
// var age=prompt("Enter your Age:")
// var gender=prompt("Enter your Gender:")
// var course=prompt("Enter your Course:")

// console.log("Name:" +name)
// console.log("ID no:"  +id)
// console.log("Age:"  +age)
// console.log("Gender:" +gender)
// console.log("Course:" +course)


// var numbers = 5;
// while(numbers<51){
//     if(numbers%5===0){
//     console.log(numbers);
//     }
//     if(numbers%3===0){
//         console.log(numbers);
//         }
        
//      numbers++;
// }

//functions
// function add(a){
//     return a+a
//     console.log()
// }
// add()

// function wish(students){
//     console.log("Congratulations!" +students)
// }
// wish("Angel")
// wish("Alex")
// wish("Kate")

// function multiply(){
//     myAge=20
//     luckyNumber=30
//     return myAge*luckyNumber
//     console.log()
// }
// multiply()

// function number() {
//     console.log(42) 
//  }
//  number()

// var countEl=document.querySelector("count")
// function increment() {
//     console.log(10)

// }
// increment()
 
 
// var countEl=document.querySelector("#count")
// function increment() {
//   countEl.textContent=10;
// console.log("Clicked")
// }

//looping
// function describe(name,age,city){
//     if (age===undefined){
//         console.log(name+ " is unknown age")
//     }
// else{
//         console.log(name+  " is " +age+" years")
//     }
//      if (city===undefined){
//         console.log(name+ " is from unknown city")
//     }
// else{
//         console.log(name+  " is from this " +city)
//     }
// }

//js  objects
// const school={
//     name:"Marengoni",
//     state:"public/private",
//     population:10000,
//     male:7500,
//     female:2500,
//     location:"Ongata Rongai"
//     }

var countEl = document.getElementById("count");
var addButton = document.querySelector("#increment");
var saveButton=document.getElementById("save");
var countedEl=document.getElementById("counted")
var savedEl=document.getElementById("saved")
//var resetButton=document.getElementById("reset")
//var subtractButton = document.querySelector("#decrement");
var count=0

function increment()  {
    if(count>0){
        countEl.style.color="green"
    }
        count+=1;
        countEl.textContent = count;
    }

function save() {
    var countString= count +" - " ;
    console.log(count)
    countEl.textContent=0;
    //countedEl.textContent
savedEl.textContent += countString;
count = 0;
}
function reset() {
 countEl.textContent=0
console.log("Reset to 0")
}
function decrement()  {
    if (count<0){
    countEl.style.color="red"
    }
        count--;
        countEl.textContent = count;
    }

 countEl.style.color="blue"
 countEl.style.fontsize="20px"

 var click=document.getElementById("cart")
var errormessage=document.getElementById("errormessage")
 function order(){
    errormessage.textContent="Invalid Entry,try again"
console.log("clicked")
 }
 errormessage.style.color="red"
//var termTwo=30
//var termOne=10
//var termThree=30
//task
//define another variable that will print the totals of the above
//allTerms=termOne+termTwo+termThree;
//console.log(allTerms)