function checkPassword() {
    // Get the entered password
    let enteredPassword = document.getElementById("password").value;
    let enteredId = document.getElementById("iden").value;

    // Replace 'your_password' with the correct password
    var correctPassword = "pa";
    var correctiden = "cs362";
    var correctiden1="Cs362";
    var correctiden2="CS362";
    

    if (enteredId===correctiden & enteredPassword === correctPassword ) {
    //   if (enteredPassword === correctPassword) {}
        // return true;
        window.location.href = "pranav.html";
    } 
    if (enteredId===correctiden1 & enteredPassword === correctPassword ) {
    //   if (enteredPassword === correctPassword) {}
        // return true;
        window.location.href = "pranav.html";
    } 
    if (enteredId===correctiden2 & enteredPassword === correctPassword ) {
    //   if (enteredPassword === correctPassword) {}
        // return true;
        window.location.href = "pranav.html";
    } 
else {
        alert("Please try again.");
        // Prevent form submission if the password is incorrect
        return false;
    }
}
