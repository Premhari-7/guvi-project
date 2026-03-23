function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email);
}

function registerUser() {

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if(email === "" || password === ""){
        showPopup("Fill required fields");
        return;
    }

    if(!isValidEmail(email)){
        showPopup("Enter valid Gmail (example@gmail.com)");
        return;
    }

    $.ajax({
        url: "php/register.php",
        type: "POST",
        data: { email, password },

        success: function(res) {

            if(res === "exists"){
                showPopup("Email already exists");
            }
            else if(res === "invalid"){
                showPopup("Invalid email format");
            }
            else if(res === "success"){
                showPopup("Registered Successfully");

                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
            }
            else{
                showPopup(res);
            }
        }
    });
}