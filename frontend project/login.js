function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var correctUsername = "user";
    var correctPassword = "123456";
    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}