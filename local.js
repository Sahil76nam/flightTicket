
let signup=()=>{


    let signname=document.querySelector("#name").value
    let signemail=document.querySelector("#email").value
    let signnum=document.querySelector("#number").value
    let signpass=document.querySelector("#pass").value


    if(signname==""){
     
       let err=document.querySelector("#name")
          err.style.border="1px solid red";
          return false
    }
    else if(signemail==""){
        let err=document.querySelector("#email")
        err.style.border="1px solid red";
        return false
    }
    else if(signnum==""){
        let err=document.querySelector("#number")
        err.style.border="1px solid red";
        return false
    }
    else if(signpass==""){
        let err=document.querySelector("#pass")
        err.style.border="1px solid red";
        return false
    }
   
    localStorage.setItem("name",signname)
    localStorage.setItem("email",signemail)
    localStorage.setItem("number",signnum)
    localStorage.setItem("password",signpass)

    location.href='login1.html'
    return false

}


let login=()=>{
    
   let loginname=document.querySelector("#loginname").value
   let loginpass=document.querySelector("#loginpass").value

   let localname=localStorage.getItem("name")
   let localpass=localStorage.getItem("password")


   if(loginname==localname && loginpass==localpass){
       localStorage.setItem("isLogin",true)
       location.href='index.html'
   }else{
       alert("Invalid Credentials")
   }

   return false


}


