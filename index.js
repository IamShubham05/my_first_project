
// console.log is used to print any thing in the console
// console.log("warning");
//alert("PLEASE BE GENTLE BEFORE SUBMITTING ANY DETAILS");
// console. warn("this is me a warning");
// console.log("what is an api",4+6,"good job");
// console.clear to clear console
// console.assert(6==4); assertion failed (should be correct)
var number = 100;
var number1 = 200;
// console.log("this is the number",number+number1);

// types of data types in javascript
var numb1 = 2;
var numb2 = 2.3;
var string = "I will print my name here";//Note the string will always be in single code or double code;
var marks = {
    kamran: 90,
    rohan: 60,
    partha: 65
}
//boolean
var a = true;
var b = false;
var arr = [1, 2, 3, "shubham", 5];
/* There are two types of data types
1) primitive data types:undefined, null, number , boolean, string, symbol
2) reference data types: arrays, object
*/
// airthmetic operators
var a = 2;
var b = 3;
console.log(a + b);//output will be 5
console.log(a - b);//output will be -1
console.log(a * b);//output will be 6
console.log(a / b);//output will be 0.6666..

//assignment operators
var c = a, d, e, f;
console.log(c);
c += 8;
console.log(c); //output will be 10

//comparison operators
d = 100;
e = 200;
// console.log(d==e);//output will be false
// console.log(d>=e);//output will be false
// console.log(d<=e);//output will be true

//logical operator
//logical and
// console.log(true&&false); //output will be false
// console.log(false&&false); // output will be false
// console.log(false&&true);// output will be false
// console.log(true&&true);//output will be true

//logical or
// console.log(true||false)//output true
// console.log(true||true)//output true
// console.log(false||false)//output false

//logical not
console.log(!true);//output false
console.log(!false);// output true

//FUNCTION IN JAVA SCRIPT
// function is basically used in java to minimise the repetition.
function myname() {
    console.log("My name is shubham");

}

// myname();

// function avg(a,b){
//     return (a+b)/2

// }

// console.log(avg(4,6));

// function simpleint(p,r,t){
//     return (p*r*t)/100
// }
// console.log("your simple interest is",simpleint(1000,6,2));

// function round(a) {
//     return Math.round(a)
// }
// console.log(round(5.6))

// //conditionals in javascript
// // if else ladder 
// var percent = 90;
// if (percent >= 90) {
//     console.log("yuppy , you got A+ grade");
// }
// else if (percent >= 70) {
//     console.log("good, you got A grade");
// }
// else if (percent >= 40) {
//     console.log("you are just pass");
// }
// else {
//     console.log("oops, you are fail try hard and came back stronger");
// }

// switch topic;

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// for loops and while loops

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for ( let i = 0; i < numbers.length; i++) {
//    if(i==2){
//     continue; //it will not print for 2 only and print all the rest
//     // break; //It will continue your array until i become 2, and then break
//    }
//     console.log(numbers[i]);
    
// }
// numbers.forEach(function(element){
//     console.log(element);
// })

// while loop
// let shubham=[1,2,3,4],rohan=0;

// while(rohan<shubham.length){
//     console.log(shubham[rohan]);
//     rohan+=2;
// }

// Do while loop (in which atleast one time condition will be procedured)
// let num=0;
// do{
// console.log(number[num])
// }while(num<Number.length);

// ARRAYS METHODS IN JAVASCRIPT
// let myarr=['rohan',2,4,10,true]
// console.log(myarr);
// myarr.pop();    //It will remove the last element of your array
// console.log(myarr);
// myarr.push('dinesh')//it will add the element in last to your array
// console.log(myarr);
// myarr.shift();//It will remove the first element of your array
// console.log(myarr);
// myarr.unshift(1000);//It will add the element in first position to your array
// console.log(myarr);
// const chor=myarr.unshift(10);//if you print chor then it will print the length of the array
// console.log(chor);

let printing =(formulae,something)=>{
return console.log(formulae,something);
}

//STRING METHOD IN JAVASCRIPT
// const mynewstring="I am doing good in this work ,very good";
// printing(mynewstring.length);
// printing(mynewstring.indexOf('doing'));//It will find at which position i have started writing doing
// printing(mynewstring.lastIndexOf('good'));//It will find the last occurance position of good.
// let newstring =(mynewstring.replace('good','bad'))//It will replace the particular word from the string that we want
// printing(mynewstring,newstring);//Now see the comparison in the console

// let mydate=new Date;
// printing(mydate);
// printing(mydate.getTime());//It will give time
// printing(mydate.getDay());//It will give number the date
// printing(mydate.getFullYear());//It will find the number of month from the date
// printing(mydate.getMinutes());//It will find the minute from the time
// printing(mydate.getUTCHours());
//and many more date function

// DOM MANUPULATION
// Document Object Model
let merimarzi=document.getElementById('firstcontainer');//to store your container in element
// console.log(merimarzi);
// merimarzi.style.color='red';//you can target your html through this 
let merimarzi2=document.getElementsByClassName('shubham');
// console.log(merimarzi2);
let tuprintkar=document.getElementById('topheading1');
// tuprintkar.style.border="1px solid red "
tuprintkar.classList.add('rohan');
// console.log(topheading1);
let tuprintkar2=document.getElementById('topheading2');

// CLASSLIST METHODS IN JAVASCRIPT

// tuprintkar2[0].classList.add("kamran");
// printing(tuprintkar2);
// tuprintkar2[0].classList.remove('kamran')
// // printing(tuprintkar2);
// printing(document.getElementById('topheading1').classList.add('kamran'));
// printing(document.getElementById('topheading1').classList.remove('kamran'));

// .toggle
// .length
// .item //it will return the name of classes according to its number
// .container //answer only true and false if the div carrying that class then it will return true otherwise false
printing(document.getElementById('verygood').classList.add('raman'));
let dabba=document.getElementById('verygood').classList.length;
console.log(dabba);

let chabba=document.getElementById('verygood').classList.item(4);
console.log(chabba);

let rabba=document.getElementById('verygood').classList.contains('dinesh');//Only give answer in true or false
console.log(rabba);
console.log(document.getElementById('verygood').classList.contains('ram'));//output false because no class named 'ram' is present there.
// printing(tuprintkar2.innerHTML); //it will replicate inner html under this div
// printing(document.getElementById('daabb').innerHTML);
// printing(document.getElementById('daabb').innerText);//it will replicate inner text under this div
// tn=document.getElementsByTagName("div");//to find tags through its tag name
// // printing(tn);
// paragraph=document.getElementById('verygood');
// para=document.createElement('p');
// para.innerText="this is my first time when i am sharing any type of content through a blog";
// tn[4].appendChild(para);//here 4 means fourth number of div
// para2=document.createElement('b');
// para2.innerText="this is my second one heading";
// tn[4].replaceChild(para2,para);//this is to replace any containter with other one
// // one more --> remove child --> this is to remove an element
// document.domain

//selecting using query

console.log(document.querySelector("div"));//It will give only one
console.log(document.querySelectorAll("div"));//It will give all node related to div

//EVENTS IN JAVASCRIPT
/* you can add events in your website through javascript with using various of methods */

function clicked(){//that clicked function is already called in that html file
    // console.log('the button was clicked successfully');
    }
    
    // window.onload=function(){
    //     console.log('the document was loaded');
    // }//onloading

//EVENT LISTENER TOPIC

// click.addEventListener('click',function(){
//     console.log('clicked successfully');
// })

// topheading1.addEventListener('mouseover',function(){
//     console.log("Your mouse is on heading please remove that");
// })//Mouse over means you put your mouse in to the container

// topheading2.addEventListener('mouseout',function () {
//     console.log('done removing your mouse');
// })
/*
more events 
mouseup
mouse down

*/
// More events to look on 

click.addEventListener('mousedown',function(){
    console.log('you are clicking on button');
})  

click.addEventListener('mouseup',function(){
    console.log('you have released clicking on button');
})

click.addEventListener('mousedown',function(){
    document.querySelectorAll("div")[0].innerText="wow that is so humble";
})

click.addEventListener('mouseup',function(){
    document.querySelectorAll("div")[0].innerText="My first code of";
})

//SET TIME OUT AND SET INTERVALS
printmachine=()=>{
    document.getElementById('topheading2').innerText=" Sorry sir "
    console.log("This is my area and don't underestimate me");
}// IT IS THE FUNCTION BUILD FOR SETTIMEOUT AND SETINTERVAL
setTimeout(printmachine,'5000');//IT WILL APPEAR IN WEBSITE AFTER THAT TIME GIVEN NEXT TO PRINT MACHINE
// setInterval(printmachine,'2000');//IT WILL BE REPEATEDLY APPEARING IN WEBSITE AFTER THAT TIME GIVEN NEXT TO PRINT MACHINE


// JAVASCRIPT LOCAL STORAGE
localStorage.setItem('name','shubham')//this is used to set itme in local storage of a website.
localStorage.setItem('friend','rohan');
localStorage//It is used to look all the item stored in local storage of a website.
localStorage.clear()//It is used to clear all the stored keys and names from a lcoalstorage of a  website
localStorage.removeItem('name');

// JSON  (JavaScript Object Notation)
obj={name:'shubham' , length:'2' ,a :{size: 14,length:13} };
console.log(typeof obj);//type of finds the category that is it a object or string. //Output will be object
jso=JSON.stringify(obj);//Stringify is used to convert object into string
console.log(typeof jso);//Output will be string
parse=JSON.parse(jso);//Note: Only string can be used under parse
console.log(parse,typeof parse);//parse convert string into object

// stringify:- Convert object into string
// parse:- Convert string into object

var a=44;
console.log(`the number is ${a}`);