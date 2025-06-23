const texto = "Onde ideias ganham forma e sonhos viram tela.💻🌸";
const elemento = document.getElementById("digitando");
const cursor = document.querySelector(".cursor");

let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 80); // velocidade da digitação (em ms)
  }
}

digitar();
