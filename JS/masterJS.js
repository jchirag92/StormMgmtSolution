var main = function () {

    if (localStorage.getItem("password") != null) {

        var temp = localStorage.getItem("password");
        document.getElementById('HiddenField1').value = temp;
       
    }

}
$(document).ready(main);


$('#register').click(function () {
    $('#signin').addClass('hidden');
    $('#signup').removeClass('hidden');
});

$('#showSignInModal').click(function () {
    $('#signin').removeClass('hidden');
    $('#signup').addClass('hidden');
   
    
});

window.setInterval(function () {
    $('#stormAlert').toggle();
}, 300);


$('#registerButton').click(function () {

    localStorage.clear();

    var contactNum = $("#contactNo").val();
    var setPass = $("#password1").val();
    var confirmPass = $("#password2").val();

    if (setPass == confirmPass) {
        alert("Registeration Successful");
        localStorage.setItem('phonenum', contactNum);
        localStorage.setItem('password', setPass);

        document.getElementById('HiddenField1').value = setPass;
     
    }
    else {
        alert("Set Password and Confirm Password does not match");
    }


});

