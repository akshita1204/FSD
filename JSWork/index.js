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

// console.log("hello world");
// const div=document.getElementsByClassName("parent");
// console.log(div);
/*
// div[0].innerText="Hello JS";
//to add the style
//div[0].innerHTML="<h2 style=color:red>Hello JS</h2>";
const h1=document.createElement("h1");
console.log(h1);
h1.innerText="ABESEC";
console.log(h1);
h1.style.backgroundColor="cyan";
h1.style.color="red";
h1.style.padding="20px";
h1.style.margin="300px";
div[0].appendChild(h1);
//How to add image
const img=document.createElement("img");
img.src="./profile.jpg";
console.log(img);
img.setAttribute("height","300");
img.setAttribute("width","300px");
div[0].appendChild(img);
div[0].removeChild(img); //to remove the content or the child
*/

/*
function getData()
{
    console.log("Hi,get the data function");
    div[0].innerHTML="<h2 style=color:red>Hi,inside getdata function</h2>";
   // div[0].innerText="Hi the data is here";
}

const button=document.getElementsByClassName("btn");
console.log(button);
button[0].addEventListener("click",getData);
*/



/*
const promise=new Promise((resolve,reject)=>
{
    let a=5;
    if(a>10) 
    {
        resolve("Accepeted");
    }
    else
    {
        reject("Not Accepted");
    }
});
promise.then((msg)=>{console.log(msg)})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("All resources have closed")});
//then means successfully done 
*/


/*
const promise2=new Promise((resolve,reject)=>
{
    resolve({name:"Akshita",Stack:"MERN Stack"});
});
promise2.then((data)=>
{console.log("Hi,"+data.name +"!")}).catch(x=>{console.log(x)});
 */

const response=fetch("https://dummyjson.com/products");
response.then((data)=>{console.log(data)});
data.json().then((res)=>{console.log(res)});


