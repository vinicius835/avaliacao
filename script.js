// Adicione no script.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.opacity = '1';
      }, 300);
    });
  });
document.addEventListener("scroll",function(){
  
  var navbar = document.querySelector(".bg-navbar")
  if (window.scrollY >50){navbar.classList.add('scrolled')}else{navbar.classList.remove("scrolled")}
});


document.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtendo os valores dos campos
  var motivo_contactar = document.getElementById("motivo_contactar");
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;

  // Validação dos campos
  if (motivo_contactar.value == "-1") {
    document.getElementById("Ocorreu_um_erro").classList.remove("d-none");
    return;
  }

  if (email === "") {
    document.getElementById("Ocorreu_um_erro").innerHTML = "Favor digitar o E-mail";
    document.getElementById("Ocorreu_um_erro").classList.remove("d-none");
    return;
  }

  // Verificação simples do e-mail
  if (!email.includes("@")) {
    document.getElementById("Ocorreu_um_erro").innerHTML = "Favor digitar um E-mail válido com '@'";
    document.getElementById("Ocorreu_um_erro").classList.remove("d-none");
    return;
  }

  if (tel === "") {
    document.getElementById("Ocorreu_um_erro").innerHTML = "Favor digitar o Telefone";
    document.getElementById("Ocorreu_um_erro").classList.remove("d-none");
    return;
  }

  // Se tudo estiver ok, esconder o erro e mostrar o sucesso
  document.getElementById("Ocorreu_um_erro").classList.add("d-none");
  document.getElementById("tudo_pronto").classList.remove("d-none");

  // Resetar o formulário
  document.getElementById("contact-form").reset();
});
