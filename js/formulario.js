window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("fname").value;
    const email = document.getElementById("lname").value;
    const necessidade = document.getElementById("cars").value;
    const comentario = document.getElementById("lt").value;

    const validacao = (campo, classErro, Input, mensagemErro) => {
      if (campo === "") {
        document.querySelector(classErro).innerHTML = mensagemErro;
        document.querySelector(Input).classList.add("inputError");
      }
    };

    validacao(nome, ".error-name", ".input-name", "Digite seu nome");
    validacao(email, ".error-email", ".input-email", "Digite seu email");
    validacao(
      comentario,
      ".error-comentario",
      ".input-coment",
      "Digite um comentário"
    );

    if (nome != "" && email != "" && comentario != "") {
      const meng = [];
      const toSend = {
        nome: nome,
        email: email,
        necessidade: necessidade,
        comentario: comentario,
      };

      
      meng.push(toSend);
      console.log(meng);
      limparCampo();
    }
  });
});

function limparCampo() {
  document.getElementById("fname").value = ""
  document.getElementById("lname").value = ""
  document.getElementById("lt").value = ""
}
