const rightEmail = "admin@gmail.com";
const rightPassword = "1234"

let userEmail = prompt("enter the email which given by admin : ");
let userPassword = prompt("enter the password : ");
if (userEmail === rightEmail && userPassword === rightPassword) {
    alert("acces granted");
} else {
    alert("invailid Email or Password ");
    // window.location.href = "index.html";
    window.history.back();
}
