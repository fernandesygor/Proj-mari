
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    
    if (username === "Mariana" && password === "mari") {
      
      window.location.href = "index.html";
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  });
});
