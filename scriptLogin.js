function showRegistrationForm() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("registration-section").style.display = "block";
}

function showLoginForm() {
    document.getElementById("registration-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
}
function Entrar() {
    window.location.href = "home.html";
  }