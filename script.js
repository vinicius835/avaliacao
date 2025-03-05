// Adicione no script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    const tudo_pronto = document.getElementById("tudo_pronto");
    const ocorreu_erro = document.getElementById("Ocorreu_um_erro");
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.opacity = '1';
      }, 300);
    });
  

document.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:formData
  })
  .then(response => {
    if(!response.ok){
      throw new Error("Erro ao enviar a mensagem")
    }
    return response.json();
  })
  .then(data => {
    console.log("Resposta do Servidor:",data);
    tudo_pronto.classList.remove("d-none");
    ocorreu_erro.classList.add("d-none");
    form.reset();
  })
  .catch(error => {
    console.error("Erro:",error);
    tudo_pronto.classList.add("d-none");
    ocorreu_erro.classList.remove("d-none");
  })
  
  // Resetar o formulário
  document.getElementById("contact-form").reset();
});
});
document.addEventListener("scroll",function(){
  
  var navbar = document.querySelector(".bg-navbar")
  if (window.scrollY >50){navbar.classList.add('scrolled')}else{navbar.classList.remove("scrolled")}
});
