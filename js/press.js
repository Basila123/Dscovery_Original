window.addEventListener("DOMContentLoaded",function(){



    const para1=document.querySelector("#paragraph1")
    const para2=document.querySelector("#paragraph2")
    const para3=document.querySelector("#paragraph3")
    const para4=document.querySelector("#paragraph4")
    const loc1=document.getElementById("place1")
    const loc2=document.getElementById("place2")
    const loc3=document.getElementById("place3")
    const loc4=document.getElementById("place4")
    const prevbtn=document.querySelector("#prevId")
    const nextbtn=document.querySelector("#nextId")
    const head=document.getElementById("heading")
    const content=document.getElementById("content")
    const prevbtn1=document.querySelector("#prevId1")
    const nextbtn1=document.querySelector("#nextId1")


//console.log(nextbtn)
let data1=[
    {p1:"Intelligent Code CompletionCode smarter with IntelliSense - completions for variables,    methods, and imported modules.",
    area1:"Kerala"},
    {p1:"Enable additional languages, themes, debuggers, commands, and more. VS Code's growing community      shares their secret sauce to improve your workflow.",
    area1:"Maharashtra"},
    {p1:"Increase your productivity with VS Code's keyboard shortcuts.eyboard Shortcut Reference Sheet -",
    area1:"TN"}
]

let data2=[
    {p2:"Components – ReactJS supports Components. Components are the building blocks of UI wherein each component has a logic and contributes to the overall UI.",
    area2:"Delhi"},
    {p2:"Virtual DOM – A virtual DOM object is a representation of a DOM object. Virtual DOM is actually a copy of the original DOM.",
    area2:"Karnataka"},
    {p2:"React is a JavaScript library that is used for building user interfaces. React is used for the development of single-page applications",
    area2:"AP"}
]
let data3=[
    {p3:"Asynchronous and Single-threaded. Efficient, fast & scalable Has the biggest community for Nodejs Express promotes code reusability with its built-in router.Robust APICreate a new folder to start your express project and type",
    area3:"MP"},
    {p3:"ata stored in the form of JSON –Objects, Object Members, Arrays, Values, and Strings JSON synta is very easy to use.JSON has a wide range of browser compatibility.",
    area3:"Jammu"},
    {p3:"MongoDB is a NoSQL database where each record is a document comprising of key-value pairs that are similar to JSON (JavaScript Object Notation) objects.",
    area3:"Gujarat"}
]
let data4=[
    {p4:"Getting started: First, create a new project folder. Then go to the project folder in command prompt/terminal and type below command to initialize a package.json file. (Make sure npm is installed",
    area4:"Punjab"},
    {p4:"Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.",area4:"Bengal"},
    {p4:" MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB.",
    area4:"Telungana"}
]
let data=[
    {
        h:"Twinkle Twinkle",
        cont:"Twinkle twinkle little star, how I wonder what you are, up above the worlds so high ,like a diomond in the sky"
    },
    {
        h:"one two three four five",
        cont:"one two three four five, Once I got a fish alive, 6 7 8 9 10, then I let it go agian, Why did you let it go? Bcoz it bit my finger so, Which finger did it bite, the little finger on my right?"
    },
    {
        h:"Wheels on the bus go round and round",
        cont:"Ba ba blacksheep!! Have you any wool. Yes sir yes sir. Three bags full.One for my master and one for the dame."
    },
    {
    h:"DDDDDDDDDDDDDDDDDDDDDDD",
    cont:"Ba ba blacksheep!! Have you any wool. Yes sir yes sir. Three bags full.One for my master and one for the dame."
    }

]


let count=0
para1.innerHTML=data1[count].p1
para2.innerHTML=data2[count].p2
para3.innerHTML=data3[count].p3
para4.innerHTML=data4[count].p4
loc1.innerHTML=data1[count].area1
loc2.innerHTML=data2[count].area2
loc3.innerHTML=data3[count].area3
loc4.innerHTML=data4[count].area4
head.innerHTML=data[count].h
content.innerHTML=data[count].cont


prevbtn1.addEventListener("click",function(){

    console.log("clicked me1")
    if(count==0){
        count=3
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont

        


    }
    if(count>=0){
        count--
         
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont
    }




})



prevbtn.addEventListener("click",function(){

    console.log("clicked me")
    if(count==0){
        count=3

        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4
        


    }
    if(count>=0){
        count--
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4

    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4


    }
    if(count<=3){
        count++
         
        para1.innerHTML=data1[count].p1
        para2.innerHTML=data2[count].p2
        para3.innerHTML=data3[count].p3
        para4.innerHTML=data2[count].p4
        loc1.innerHTML=data1[count].area1
        loc2.innerHTML=data2[count].area2
        loc3.innerHTML=data3[count].area3
        loc4.innerHTML=data4[count].area4

    }



})

nextbtn1.addEventListener("click",function(){

    console.log("Clicked next btn1")
    if(count==3){
        count=0
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont
         
        

    }
    if(count<=3){
        count++
         
        head.innerHTML=data[count].h
        content.innerHTML=data[count].cont

    }



})
})

