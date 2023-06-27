
// Different ways to write a Function
// // 1). function declaration 
// function printmyname(name){
//     return console.log("your name is -",name);
// }
// printmyname("shubham");

// //2)Function expression

// const mohan= function (array){
//     return console.log(array.length);
// }
// mohan([2,4,5,3,5,3]);


// //3)arrow function 
// let multiplication=(x,y)=>{
//     return console.log('your multiplication is - ',x*y)
// }
// multiplication(2,7);
/*
let a=prompt("enter your age here");
a=parseInt(a);
if(a<0){
console.log("invalid age error!");

}
else if(a>=0 && a<=10){
console.log("you are kid you can't even think of driving ");
}
else if(a>10 && a<18){
 console.log("you are teenager so you can't drive until you are 18");   
}
else if(a>=18,a<=60){
 console.log("success, you can drive ");   
}
else{
    console.log("you are too old to drive so you can't drive");
}

let b=prompt("enter your name here");
console.log("Hello",b,"Hope you are enjoying this tutorial ");

let name=prompt("what is your name bro");
switch(name){
    case "shubham":
    console.log("your name is shubham");
    break;
    case "rohan":
    console.log("your name is rohan");
    break;
    default:
    console.log("you are not in the list");
}


let obj={
    rohan:100,
    mohan:200,
    shivam:500,
    others:200
}
for(a in obj){
    console.log("Marks of",a,"in total subject is",obj[a]);

}

let string=prompt("enter any kind of value to type in console (max 1 word only)");
if(string.length>10){
console.log("Length of your text is greater than 10 please try with shorter name");
}
else{
    console.log(string);
}
*/

// Q1: write the marks of the student given in the object

/*
let marks={
    rohan:100,
    mohan:12,
    lavesh:45,
    monika:5,
}

for(i=0;i<Object.keys(marks).length;i++){
    console.log("marks of " + Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);

}
*/

//Q2: Ask user to enter correct value until show him try again

/*
a=prompt("what is the answer if we add both 25 & 75");
a=Number.parseInt(a);
while(a!=100){
    alert("Incorrect value try again")
    a=prompt("what is the answer if we add both 25 & 75");
    a=Number.parseInt(a);
    

}
alert("You entered correct value so congratulations");
/*

// I don't know but why this program is not working in my chrome browser & I will be going to run in replit soon check out there

// Q3:- Write a function to calculate the mean of 5 numbers

/*
mean=(a,b,c,d,e)=>{
    return console.log("Your number is "+(a+b+c+d+e)/5);
}
*/

// STRINGS

/*
let myname=prompt("Enter your name here");
console.log(myname.length);
alert(`Welcome ${myname},hope you will enjoy using this website `) //this is called template literals only used with back ticks
*/

// ESCAPE SEQUENCE CHARACTER(\)

let myfriend='my friend\'s name is dollar'
console.log(myfriend);

console.log("my friend's name is mohit \n sharma singh thakur"); // use of \n
console.log("my friend's name is mohit \t sharma singh thakur"); // use of \t
console.log("my friend's name is mohit \r sharma singh thakur"); // use of \r

// STRING METHOD

let myname="shubham";
let NoOfFriend=0;

myname.length;
console.log(myname.toUpperCase()+`and i have ${NoOfFriend}`+" friends");
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.slice(2,5)); // to print some part of the string to the end
console.log(myname.slice(3)); //to print some part of the string to the end
console.log(myname.replace("ubh","iv"));
console.log(myname.concat(" have ",NoOfFriend," friends",`\nso sorry to hear that ${myname}`));//to add strings in any trings through it's varible name

myname="shubham";
for(i=0;i<(myname.length);i++){
    console.log(myname[i]);
}

let multiplefriend="rohan"+"mohan"+"sohan";
console.log(multiplefriend[12]);

// PRACTICE SET FOR STRING

/*
Q1:- What will be the output of this code given {console.log("har/"")} ANS:- 1
Q2:- Explore include,startwith and andwith string method
Q3:- Extract the amount from the given statement if the statement is
"I will give him rs.1000" 
Q4:- try to change the 4th character of the given statement were you able to do it 
answer with particular reason.


*/

// Q3
let str="I will give him rs.1000"
amount=str.slice("i will give him rs.".length);
amount=Number.parseInt(amount);
console.log(amount,typeof(amount));

// Q4
myname=myname.replace(myname[3],"i");
console.log(myname);
/*

//ARRAY (array is stored in this type of syntax [a,b,c,d,e,....])

let NameOfFriends=["rohan","partha","kamran","vikram"];
console.log(NameOfFriends);
console.log(NameOfFriends[0],"&",NameOfFriends[1],", they boths are noob in terms of accuracy");
console.log(NameOfFriends);

let stri=NameOfFriends.toString();
console.log(stri,typeof stri);
let newone=NameOfFriends.join("_");
console.log(newone,typeof newone);
NameOfFriends.push("newname")
console.log(NameOfFriends);
//push, pull, pop, shift, unshift

let newarr=[1,2,3,4,35,"next no."];
delete newarr[5];
console.log(newarr);
let newarr2=[11,12,13,14,15];
console.log(newarr.concat(newarr2,"shubham")); // to add array with more arrays

//sort method in array

// console.log(newarr);
// newarr.sort(); //it will list in ascending order the element aplhabetically 
// console.log(newarr);
// newarr.reverse();// it will reverse the position of element in an array
// console.log(newarr);
// .splice
// .slice

// FOR ,FOREACH ,ARRAY.FROM,FOR OF ,FOR IN
for(i=0;i<newarr.length;i++){
    console.log(newarr[i]);
}

newarr.forEach((element)=>{
    console.log(element*element);
})

let name="shubham";
console.log(Array.from(name));//it will convert a string to array

for(a of newarr){
    console.log(a);// it will print the object under the key 
}
for (item in newarr){
    console.log(item);//it will print the key
}
*/
let a=newarr=[12,13,14,15];
newarr.map((value)=>{
    console.log(value);
    return value + 3;
})
console.log(a)