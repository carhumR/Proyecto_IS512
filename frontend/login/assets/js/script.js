// This is a simple JavaScript function that validates the login form.
function validateForm() {
    // Check if the email field is empty.
    if (document.getElementById("email").value == "") {
        alert("Please enter an email address.");
        return false;
    }

    // Check if the password field is empty.
    if (document.getElementById("password").value == "") {
        alert("Please enter a password.");
        return false;
    }

    // The form is valid, so submit it.
    document.getElementById("form").submit();
}