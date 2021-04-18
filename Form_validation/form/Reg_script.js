function checkname(){
    var regx = /^[a-zA-Z ]{3,10}$/;
    var uname = document.getElementById('fname').value;
    var surname = document.getElementById('fsurname').value;
    if(regx.test(uname) || regx.test(surname)){
        document.getElementById('space').style.visibility = 'hidden';
        
    }
    else
    document.getElementById('space').style.visibility = 'visible';
    document.getElementById('space').innerText = "Enter valid name";   
}

function checkmail(){
    
    var regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var email = document.getElementById('email').value;

    if(regx.test(email)){
        document.getElementById('spaceE').style.visibility = 'hidden';
    }
    else {
        document.getElementById('spaceE').style.visibility = 'visible';
        document.getElementById('spaceE').innerText = "Enter Valid email ID";
    }
    
}

function checkpass(){
    var regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass = document.getElementById('pass').value;

    if(regx.test(pass)){
        document.getElementById('spaceP').style.visibility = 'hidden';
    }
    else {
        document.getElementById('spaceP').style.visibility = 'visible';
        document.getElementById('spaceP').innerText = "At least one number, one uppercase and one special character";
    }
}

function checkRePass(){
    var RePass = document.getElementById('rePass').value;
    var pass = document.getElementById('pass').value;

    if(RePass == pass){
        document.getElementById('spaceReP').style.visibility = 'hidden';
    }
    else {
        document.getElementById('spaceReP').style.visibility = 'visible';
        document.getElementById('spaceReP').innerText = "Does not match with your password";
    }
}