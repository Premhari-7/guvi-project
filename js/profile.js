$(document).ready(function(){

    let email = localStorage.getItem("email");

    if(!email){
        window.location.href = "login.html";
    } else {
        $("#userEmail").text("Email: " + email);
    }

});

function saveProfile() {

    let email = localStorage.getItem("email"); 
    let age = $("#age").val();
    let dob = $("#dob").val();
    let contact = $("#contact").val();

    if(!email){
        showPopup("Login again");
        return;
    }

    if(!age || !dob || !contact){
        showPopup("Fill all fields");
        return;
    }

    if(age <= 0){
        showPopup("Invalid age");
        return;
    }

    if(!/^\d{10}$/.test(contact)){
        showPopup("Enter valid 10-digit number");
        return;
    }

    $.ajax({
        url: "php/save_profile.php",
        type: "POST",
        data: {
            email: email,
            age: age,
            dob: dob,
            contact: contact
        },

        success: function(res) {
            console.log(res); 
            showPopup(res);
        }
    });
}

function logout() {
    localStorage.removeItem("email");
    window.location.href = "login.html";
}