import cipher from './cipher.js';

// Botao Criptografar
const codificar = document.querySelector("#codificar");
function criptografar() {
  const textoOriginal = document.querySelector("#original").value.toLocaleUpperCase();
  const offset = document.querySelector("#offset");
  const deslocamento = Number(offset.value);
  const textoCodificado = cipher.encode(textoOriginal, deslocamento);
  document.querySelector("#cifrada").innerText = textoCodificado;    

  //document.querySelector("#textoOriginal").value = textoCodificado;
}
codificar.addEventListener("click", criptografar);

// Botao Descriptografar
const descodificar = document.querySelector("#descodificar");
function descriptografar() {
  const cifrada = document.querySelector("#cifrada").value.toLocaleUpperCase();
  const offset = document.querySelector("#offset");
  const deslocamento2 = Number(offset.value);
  const textoDecodificado = cipher.decode(cifrada, deslocamento2);
  document.querySelector("#textoOriginal").value = textoDecodificado;
}
descodificar.addEventListener("click", descriptografar);

