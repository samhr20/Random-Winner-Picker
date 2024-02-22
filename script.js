// index page

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.length == 0 && password.length == 0) {
        alert("Please enter username and password");
        return;
    } else if(username.length == 0){
        alert("Please enter username");
        return;
    } else if(password.length == 0){
        alert("Please enter your password");
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    window.location.href = "result.html";
}
