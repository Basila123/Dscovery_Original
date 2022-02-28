window.addEventListener("DOMContentLoaded",function(){
const para1=document.getElementById("paragraph1")
const para2=document.getElementById("paragraph2")
const para3=document.getElementById("paragraph3")
const para4=document.getElementById("paragraph4")
const prevbtn=document.querySelector("#prevId")
const nextbtn=document.querySelector("#nextId")

let loc1=[{p1:"xyz"},
        {p1:"abc"},
    {p1:"efg"}]


let loc2=[{p2:"123"},
        {p2:"456"},
        {p3:"789"}]

let loc3=[{p3:"kerala"},
{p3:"kashmir"},
{p3:"Telungana"}]


let loc4=[{p4:"apple"},
{p4:"samsung"},
{p4:"hp"}]


let count=0
para1.innerHTML=loc1[count].p1
para2.innerHTML=loc2[count].p2
para3.innerHTML=loc3[count].p3
para4.innerHTML=loc4[count].p4
//console.log(loc1)




prevbtn.addEventListener("click",function(){
 
    console.log("clicked me")
    if(count==0){
        count=3
        para1.innerHTML=loc1[count].p1
        para2.innerHTML=loc2[count].p2
        para3.innerHTML=loc3[count].p3
        para4.innerHTML=loc4[count].p4   


    }
    if(count>=0){
        count--
         
        para1.innerHTML=loc1[count].p1
para2.innerHTML=loc2[count].p2
para3.innerHTML=loc3[count].p3
para4.innerHTML=loc4[count].p4

    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
         
        para1.innerHTML=loc1[count].p1
        para2.innerHTML=loc2[count].p2
        para3.innerHTML=loc3[count].p3
        para4.innerHTML=loc4[count].p4

    }
    if(count<=3){
        count++
         
        para1.innerHTML=loc1[count].p1
        para2.innerHTML=loc2[count].p2
        para3.innerHTML=loc3[count].p3
        para4.innerHTML=loc4[count].p4

    }



})



})