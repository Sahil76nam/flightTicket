let datafetch=async()=>{
  
    try{
      let url=`http://localhost:3000/tickets`
      let res=await fetch(url,{method:"GET"})
      let data=await res.json()
      console.log(data);


     let output=document.querySelector("#display")
     data.map((e)=>{
      output.innerHTML+=`
      <tr>
      <td>${e.Travellername}</td>
      <td>${e.Origen}</td>
      <td>${e.Distiantion}</td>
      <td>${e.Ticketnumber}</td>
      <td>${e.Categrey}</td>
      <td onclick="tdelete('${e.id}')">DELETE</td>
      <td onclick="fillform('${e.id}')">UPDATE</td> `
     })



    }
    catch(error){
      console.log(error);
    }
}
let tdelete=(id)=>{
  Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
              tdel(id)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
   
}
let tdel=(id)=>{
   let url=`http://localhost:3000/tickets/${id}`
   fetch(url,{
    method:"DELETE"
   })
}
let ins=()=>{
  let Travellername=document.querySelector("#tname").value;
  let Origenplace=document.querySelector("#torigen").value;
  let Distinationplace=document.querySelector("#tdistination").value;
  let Ticketnumber=document.querySelector("#tno").value;
  let Categrey=document.querySelector("#tcategery").value;


  let url=`http://localhost:3000/tickets`
  fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"

    },
    body:JSON.stringify({
      "Travellername":Travellername,
      "Origen":Origenplace,
      "Distiantion":Distinationplace,
      "Ticketnumber":Ticketnumber,
      "Categrey":Categrey
    })
  })
  return false;
}
let fillform=async(id)=>{
  let url=`http://localhost:3000/tickets/${id}`
  let res=await fetch(url)
  let data=await res.json()
  console.log("DATA",data);
  


  let formdata=`
  Traveller Name <input type="text" value=${data.Travellername} id="tname1"> <br>
 Origen place <input type="text" value=${data.Origen} id="torigen1"> <br>
  Distination place <input type="text" value=${data.Distination} id="tdistination1"> <br>
  Number of Ticket <input type="text" value=${data.Ticketnumber} id="tno1"> <br>
  Categrey <input type="text" value=${data.Categrey} id="tcategrey1"> <br>
  <input type="submit" onclick="update('${data.id}')">
  ` 
  document.querySelector("#formd").innerHTML=formdata;
}
let update=(id)=>{
  let Travellername=document.querySelector("#tname1").value;
  let Origen=document.querySelector("#torigen1").value;
  let Distination=document.querySelector("#tdistination1").value;
  let Ticketnumber=document.querySelector("#tno1").value;
  let Categrey=document.querySelector("#tcategrey1").value;

let url=`http://localhost:3000/tickets/${id}`
fetch(url,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"

  },
  body:JSON.stringify({
    "Travellername":Travellername,
    "Origen":Origen,
    "Distiantion":Distination,
    "Ticketnumber":Ticketnumber,
    "Categrey":Categrey
  })
})

}