function checkData(){
    var enterName = document.getElementById("name").value;
    var enterPassword = document.getElementById("password").value;

    var getName = localStorage.getItem("userName"); 
    var getPassword = localStorage.getItem("userPassword"); 

    if (enterName === getName && enterPassword === getPassword) {
        alert("Login Succesful");
        window.location.href = "main.html";
        
    } else if (enterName === getName && enterPassword !== getPassword) {
        alert("Invalid Password");
    } else {
        alert("Invalid Details");
    }
}