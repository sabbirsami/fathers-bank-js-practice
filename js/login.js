document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(password);
    if (email === "son@father.com" && password === "father'sSon") {
        console.log("valid user");
    } else {
        console.log("invalid user");
    }
});
