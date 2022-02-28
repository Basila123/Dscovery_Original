window.addEventListener("DOMContentLoaded",function(){
    
    const winddiv=document.getElementById("wind")
    const sun=document.querySelector("#sun")
    const compas=document.querySelector("#compas")
    const placediv=document.querySelector("#blackboxtext")
    const prevbtn=document.querySelector("#prevId")
    const nextbtn=document.querySelector("#nextId")
 
   
    let data=[{name:"kochi",area:"Kerala",windspeed:23455,direction:288,temp:34},
         {name:"Kottayam",area:"Kerala",windspeed:2334355,direction:23458,temp:55},
         {name:"Mumbai",area:"MP",windspeed:24555,direction:28568,temp:0}
       
 
 ]
 let count=0
 
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
 
 
 prevbtn.addEventListener("click",function(){
 
     console.log("clicked me")
     if(count==0){
         count=3
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
     if(count>=0){
         count--
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
 
 })
 
 nextbtn.addEventListener("click",function(){
 
     console.log("Clicked next btn")
     if(count==3){
         count=0
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
 
     }
     if(count<=3){
         count++
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].temp
 
     }
 
 
 
 })
 
 
 } )
 