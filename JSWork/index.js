/*
var a=12; 
console.log(a)
if(a>10)
{
    var b=23; 
//if var is declared inside then it can be used anywhere while let works within a scope and const cant be reinitialized
    console.log("a inside condition:"+a);
}
console.log("a outside condition:"+b);
*/



/*
let a=12;
let b="12";
console.log(a==b);
console.log(typeof(a),typeof(b));
let today=Date();
console.log(today);
if(a==b)  //== works on the type while = works on the value 
{
    console.log("Welcome");
}
else
{
    console.log("Hello");
}
let myname="Amit";
let clg="ABESEC";
let res=`Hi,my name is ${myname} and I'm doing Engineering from ${clg}`;
console.log(res);*/



/*
//OBJECTS
let key="sname";
const students=[{
    sname:"A",
    course:"B.Tech",
    clg:"ABESEC",
},
{
    name:"B",
    course:"B.Tech",
    clg:"ABESEC",
}
]
console.log("Name:"+ students.sname + "Course:"+ students.course);
//Destructured Way
const {sname}=students;
console.log(sname); 
students[key]="Rahul";
console.log(students);
console.log(students[0]);
console.log(students[1].clg);
console.log(students[1].name);
*/



/*
function greeting(msg="welcome")
 {
     console.log("Good Morning "+msg);
 }
 greeting("Greetings");


function sum(a,b)
{
    return a+b;
}
let data=sum(10,5);
console.log(data);
*/


//As a callback Function by using the parameter 
/*
function cCompiler()
{
return "C Complier selected";
}
function JavaCompiler()
{
 return "Java Complier selected";   
}
function selectLanguage(clbk)
{
   console.log("You have:"+ clbk);
}
selectLanguage(cCompiler());
*/


//As a callbaack function 
/*
function selectlanguage(language)
{
    let data;
    if(language=="c")
    {
        function cCompiler()
        {
        return "C Complier selected";
        }
        data=cCompiler();
    }
    if(language=="java")
    {
     function JavaCompiler()
     {
     return "Java Complier selected";   
      }
      data=JavaCompiler();
    }
    return data;
}
let res=selectlanguage("java");
console.log(res);
*/

//DOM
console.log("hello world");
let parent=document.getElementsByClassName("parent");
console.log(parent);
parent[0].innerHTML="<h2 sttyle=color:red>data has changed</h2>";


