import cipher from './cipher.js';

const caixaTexto1 = document.querySelector("#caixaTexto1");
const caixaTexto2 = document.querySelector("#caixaTexto2");
const deslocamento = document.querySelector("#deslocamento");
const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");

// Botao Criptografar
btnCriptografar.addEventListener("click", function () {
  const offset = parseInt(deslocamento.value);
  const mensagem = caixaTexto1.value;
  caixaTexto1.value = cipher.encode(offset, mensagem);
})

// Botao Descriptografar
btnDescriptografar.addEventListener("click", function () {
  const offset = parseInt(deslocamento.value);
  const mensagem = caixaTexto1.value;
  caixaTexto2.value = cipher.decode(offset, mensagem);
})
