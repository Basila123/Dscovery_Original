/*window.addEventListener("DOMContentLoaded",function(){
   // console.log("Ready")
   const winddiv=document.getElementById("wind")
   const placediv=document.querySelector("#place")
   const prevbtn=document.querySelector("#prevId")
   const nextbtn=document.querySelector("#nextId")

   //console.log(prevbtn,nextbtn,winddiv)
  // winddiv.innerHTML="I am from js"
   let data=[{name:"kochi",area:"Kerala",windspeed:23455,degrees:288},
        {name:"Kottayam",area:"Kerala",windspeed:2334355,degrees:23458},
        {name:"Mumbai",area:"MP",windspeed:24555,degrees:28568}
      

]
let count=0

winddiv.innerHTML=data[count].windspeed
placediv.innerHTML=data[count].name



prevbtn.addEventListener("click",function(){

    console.log("clicked me")
    if(count==0){
        count=3
        winddiv.innerHTML=data[count].windspeed
        placediv.innerHTML=data[count].name

    }
    if(count>=0){
        count--
        winddiv.innerHTML=data[count].windspeed
        placediv.innerHTML=data[count].name
    }

})

nextbtn.addEventListener("click",function(){

    console.log("Clicked next btn")
    if(count==3){
        count=0
        winddiv.innerHTML=data[count].windspeed
        placediv.innerHTML=data[count].name

    }
    if(count<=3){
        count++
        winddiv.innerHTML=data[count].windspeed
        placediv.innerHTML=data[count].name 
    }



})


} )*/


window.addEventListener("DOMContentLoaded",function(){
    
    const winddiv=document.getElementById("wind")
    const sun=document.querySelector("#sun")
    const compas=document.querySelector("#compas")
    const placediv=document.querySelector("#place")
    const placearea=document.querySelector("#place_header")
    const prevbtn=document.querySelector("#prevId")
    const nextbtn=document.querySelector("#nextId")
 
   
    let data=[{name:"kochi",area:"Kerala",windspeed:23455,direction:288,hot:34},
         {name:"Kottayam",area:"Kerala",windspeed:2334355,direction:23458,hot:55},
         {name:"Mumbai",area:"MP",windspeed:24555,direction:28568,hot:0}
       
 
 ]
 let count=0
 sun.innerHTML=data[count].hot
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 placearea.innerHTML=data[count].area

 
 
 
 prevbtn.addEventListener("click",function(){
 
     console.log("clicked me")
     if(count==0){
         count=3

         sun.innerHTML=data[count].hot
         winddiv.innerHTML=data[count].windspeed
         placediv.innerHTML=data[count].name
         compas.innerHTML=data[count].direction
         placearea.innerHTML=data[count].area
         
 
 
     }
     if(count>=0){
         count--
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].hot
 placearea.innerHTML=data[count].area
 
     }
 
 })
 
 nextbtn.addEventListener("click",function(){
 
     console.log("Clicked next btn")
     if(count==3){
         count=0
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].hot
 placearea.innerHTML=data[count].area
 
 
     }
     if(count<=3){
         count++
          
 winddiv.innerHTML=data[count].windspeed
 placediv.innerHTML=data[count].name
 compas.innerHTML=data[count].direction
 sun.innerHTML=data[count].hot
 placearea.innerHTML=data[count].area
 
     }
 
 
 
 })
 
 
 } )
 


