function validateInputs(){
    var fullName=document.getElementById('fullName').value;
    var email=document.getElementById('email').value;
    var userName=document.getElementById('userName').value;
    var phoneNumber=document.getElementById('phoneNumber').value;
    var password=document.getElementById('password').value;
    var confirmPassword=document.getElementById('confirmPassword').value;
    if (fullName==='') {
        alert("Name is required");
        return false;
    }else{
        true;
    }
    if (email===''){
        alert("Email is required");
        return false;
    }
    else{
        true;
    }
    if (userName==='') {
        alert("username is required");
        return false;
    }else{
        true;
    }
    if (phoneNumber==='') {
        alert("phone number is required");
        return false;
    }else{
        true;
    }
    if (password===''){
        alert("password is required");
        return false;
    }else{
        true;
    }
    if (confirmPassword===''){
        alert("password confirmation is required");
        return false;
    }else if(confirmPassword!=password){
        alert("password not matching");
        return false;
    }else{
        true;
    }
}