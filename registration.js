function getUserData(){
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    

    localStorage.setItem("userName",name);
    localStorage.setItem("userPassword",password);
 
    
}

