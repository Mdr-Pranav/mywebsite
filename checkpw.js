function checkPassword() {
    // Get the entered password
    let enteredPassword = document.getElementById("password").value;
    let enteredId = document.getElementById("iden").value;

    // Replace 'your_password' with the correct password
    const correctPassword = "pa";
    const correctiden = "cs362";
    

    if (enteredId===correctiden) {
       if (enteredPassword === correctPassword) {
        // return true;
        window.location.href = "https://mdr-pranav.github.io/mywebsite/pranav.html";
       }
       else {
        alert("Please try again");
        console.log("TRY AGAIN" );
        // Prevent form submission if the password is incorrect
        return false;
        }
    } 
    else {
        alert("Please try again");
        console.log("TRY AGAIN" );
        // Prevent form submission if the password is incorrect
        return false;
    }
}
