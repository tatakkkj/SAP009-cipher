import cipher from './cipher.js';

const caixaTexto1 = document.querySelector("#caixaTexto1");
const caixaTexto2 = document.querySelector("#caixaTexto2");
const deslocamento = document.querySelector("#deslocamento");
const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");

// Botao Criptografar
btnCriptografar.addEventListener("click", function (){
  const mensagem = caixaTexto1.value;
  const offset = parseInt(deslocamento.value);
  caixaTexto2.value = cipher.encode(mensagem, offset);
})

// Botao Descriptografar
btnDescriptografar.addEventListener("click", function () {
  const mensagem = caixaTexto1.value;
  const offset = parseInt(deslocamento.value);
  caixaTexto2.value = cipher.decode(mensagem, offset);
})
