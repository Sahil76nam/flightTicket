gsap.to(".move",{
    
    
    transform:'translateX(-100%)',
    
    repeat:-1,
    duration:3,
    yoyo:true,
    ease:"power0"
    

})
var tl=gsap.timeline()
gsap.from(".logo ",{
  y:-30,
  delay:3,
  opacity:0
})
tl.from("#nav .nav1",{
  y:-30,
  opacity:0,
  duration:1,
  
  stagger:1
})

tl.to(".vdeo video",{
  scale:0,
  duration:1,
  backgroundColor:"red",
  scrollTrigger:{
    trigger:".home ",
    scroller:"body",
      // markers:true,
     start:"top top",
    end:"top end",
     scrub:2,
     pin:true
    
  }
})
tl.from("#content",{
  transform:"translate(-100%)",
  duration:2
})

gsap.from("#c6",{
  x:100,
  duration:2,
  stagger:true,
  
  
    
  })

gsap.from(".cont2",{
    x:100,
    duration:4,
    opacity:.5,
    yoyo:true,
    stagger:true,
    repeat:-1

})
gsap.from("#page7 .page7cont",{
  x:400,
  stagger:"time",
  
  
  delay:1,
   scrollTrigger:{
    trigger:"#page7 .page7cont ",
    scroller:"body",
    
    start:"top 60%",
    end:"top 30%",
    scrub:3
   }
})
 var elemc=document.querySelector("#page4")
 var fixed=document.querySelector("#fixid-image")
 elemc.addEventListener("mouseenter",function(){
    fixed.style.display="block"

 })
 elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
 })

 var change=document.querySelectorAll(".divlay")
 change.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        
         fixed.style.backgroundImage=`url(${image})`
    })
 })
 var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}
var loader=document.querySelector("#loader")
setTimeout(function(){
  loader.style.top="-100%"
},2500)
gsap.from("#loader h1",{
  
 scale:0.5,
 rotate:360,
 duration:2,
 opacity:0
 
  

 })

 let ticketbook=()=>{
  
  if(localStorage.getItem("isLogin")==true){
    location.href="flightticket.html"
  }
  else{
    alert("Login first")
  }

 }
 let logout=()=>{
  localStorage.clear()
  location.href='Login1.html'
  alert(localStorage.name);
  
}

// let datafetch=async()=>{
  
//     try{
//       let url=`http://localhost:3000/tickets`
//       let res=await fetch(url,{method:"GET"})
//       let data=await res.json()
//       console.log(data);


//      let output=document.querySelector("#display")
//      data.map((e)=>{
//       output.innerHTML+=`
//       <tr>
//       <td>${e.Travellername}</td>
//       <td>${e.Origen}</td>
//       <td>${e.Distiantion}</td>
//       <td>${e.Ticketnumber}</td>
//       <td>${e.Categrey}</td>
//       <td onclick="tdelete('${e.id}')">DELETE</td>
//       <td onclick="tupdate('${e.id}')">UPDATE</td> `
//      })



//     }
//     catch(error){
//       console.log(error);
//     }
// }
// let tdelete=(id)=>{
//   Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//           if (result.isConfirmed) {
//               tdel(id)
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success"
//             });
//           }
//         });
   
// }
// let tdel=(id)=>{
//    let url=`http://localhost:3000/tickets/${id}`
//    fetch(url,{
//     method:"DELETE"
//    })
// }
// let ins=()=>{
//   let Travellername=document.querySelector("#tname").value;
//   let Origenplace=document.querySelector("#torigen").value;
//   let Distinationplace=document.querySelector("#tdistination").value;
//   let Ticketnumber=document.querySelector("#tno").value;
//   let Categrey=document.querySelector("#tcategery").value;


//   let url=`http://localhost:3000/tickets`
//   fetch(url,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"

//     },
//     body:JSON.stringify({
//       "Travellername":Travellername,
//       "Origen":Origenplace,
//       "Distiantion":Distinationplace,
//       "Ticketnumber":Ticketnumber,
//       "Categrey":Categrey
//     })
//   })
//   return false;
// }
// let fillform=async(id)=>{
//   let url=`http://localhost:3000/tickets`
//   let res=await fetch(url)
//   let data=await res.json()


//   let formdata=`
//   Traveller Name <input type="text" value=${data.tname} id="tname1> <br>
//  Origen place <input type="text" value=${data.torigen} id="torigen1> <br>
//   Distination place <input type="text" value=${data.tdistination} id="tdistination1> <br>
//   Number of Ticket <input type="text" value=${data.tno} id="tno1> <br>
//   Categrey <input type="text" value=${data.tcategrey} id="tategrey1> <br>
//   <input type="submit" onclick="update('${data.id}')">
//   ` 
//   document.querySelector("#formdata").innerHTML=formdata;
// }
// let update=(id)=>{
//   let Travellername=document.querySelector("#tname1").value;
//   let Origen=document.querySelector("#torigen1").value;
//   let Distination=document.querySelector("#tdistination1").value;
//   let Ticketnumber=document.querySelector("#tno1").value;
//   let Categrey=document.querySelector("#tcategrey1").value;

// let url=`http://localhost:3000/tickets`
// fetch(url,{
//   method:"PUT",
//   headers:{
//     "Content-Type":"application/json"

//   },
//   body:JSON.stringify({
//     "Travellername":Travellername,
//     "Origen":Origen,
//     "Distiantion":Distination,
//     "Ticketnumber":Ticketnumber,
//     "Categrey":Categrey
//   })
// })

// }

var menu=document.querySelector(".nav2 i")
var cutt=document.querySelector(".fullnav .cut i")
var full=document.querySelector(".fullnav")
menu.addEventListener("click",function(){
  full.style.top=0;
})
cutt.addEventListener("click",function(){
  full.style.backgroundColor=-100;
  console.log("sahil")
})





