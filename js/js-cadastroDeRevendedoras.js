document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    window.location.href = "comtabilidade.html";
  });



const cpfInput = document.getElementById("cpf-input");

  cpfInput.addEventListener("input", function() {
    let inputValue = this.value.replace(/\D/g, "-!"); // Remove todos os caracteres não numéricos
    if (inputValue.length > 0) {
      inputValue = inputValue.match(/.{1,3}/g).join(".");
      if (inputValue.length > 7) {
        inputValue = inputValue.slice(0, 7) + "." + inputValue.slice(7, 10);
      }
      if (inputValue.length > 11) {
        inputValue = inputValue.slice(0, 11) + "-" + inputValue.slice(11, 13);
      } else {
        inputValue = inputValue.slice(0, 12);
      }
    }
    this.value = inputValue;
  });






