function checkPassword() {
    // Get the entered password
    let enteredPassword = document.getElementById("password").value;
    let enteredId = document.getElementById("iden").value;

    // Replace 'your_password' with the correct password
    const correctPassword = "pa";
    const correctiden = "cs362";
    

    if (enteredId===correctiden & enteredPassword === correctPassword ) {
    //   if (enteredPassword === correctPassword) {}
        // return true;
        window.location.href = "https://yourusername.github.io/mywebsite/pranav.html";
    } 
    else {
        alert("Please try again.");
        // Prevent form submission if the password is incorrect
        return false;
    }
}
