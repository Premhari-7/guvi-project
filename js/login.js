function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email);
}

function loginUser() {

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if(email === "" || password === ""){
        showPopup("Fill required fields");
        return;
    }

    if(!isValidEmail(email)){
        showPopup("Enter valid Gmail");
        return;
    }

    $.ajax({
        url: "php/login.php",
        type: "POST",
        data: { email, password },

        success: function(res) {

            console.log(res); 

            if(res.trim() === "success"){
                showPopup("Login Successful");

                localStorage.setItem("email", email);

                
                $.ajax({
                    url: "php/redis_store.php",
                    type: "POST",
                    data: { email: email },
                    success: function(r){
                        console.log("Redis:", r); 
                    }
                });

                setTimeout(() => {
                    window.location.href = "profile.html";
                }, 1000);

            } else {
                showPopup("Invalid Login");
            }
        }
    });
}