var rightEmail = "flexkid02@gmail.com";
var Password = "Olamilekan9@"


var users =[];

$("#register").on("click", function () {
    var emailInput = $("#email").val();
    var passwordInput = $("#password").val();

    if (emailInput && passwordInput) {
        // Create a new user object
        var newUser = {
            email: emailInput,
            password: passwordInput
        };

        // Push the new user object into the users array
        users.push(newUser);

        // Clear the input fields for the next set of credentials
        $("#email").val('');
        $("#password").val('');

        alert("User added successfully! Enter new credentials to add another user.");
    } else {
        alert("Please fill in both email and password fields.");
    }
});

$("#login").on("click", function () {
    var emailInput = $("#email").val();
    var passwordInput = $("#password").val();

    // Check if the entered credentials match any user in the users array
    var userFound = users.find(function (user) {
        return user.email === emailInput && user.password === passwordInput;
    });

    $("#email").val('');
    $("#password").val('');
    
    if (userFound) {
        alert("You are logged in!");
    } else {
        alert("Email or Password is incorrect.");
    }


});


//$("#login").on("click",function(){
//   var passwordInput = $("#password").val();
 //  var emailInput = $("#email").val();
//
//   if(emailInput === rightEmail  &&  passwordInput === Password){
//    alert("You are Logged in")
//   }
//   else{
//    alert("Email or Password Incorrect")
//   }
//})