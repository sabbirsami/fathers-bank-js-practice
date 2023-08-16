// LOGIN
document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(password);
    if (email === "son@father.com" && password === "a") {
        console.log("valid user");
        window.location.href = "bank.html";
    } else {
        console.log("invalid user");
    }
});
