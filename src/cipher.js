const cipher = {
  encode: function (deslocamento, caixaTexto1){
    if (typeof caixaTexto1 !== "string" || caixaTexto1 === "" || deslocamento === "" || caixaTexto1 === 0 || deslocamento === 0) {
      throw new TypeError;
    }

    let resultado = ""
    for(let i = 0 ; i < caixaTexto1.length ; i++){
      const formula = ((caixaTexto1.charCodeAt(i) - 65 + deslocamento) % 26) + 65;
      resultado += String.fromCharCode(formula);
    }
    return resultado
  },

  decode: function(deslocamento, caixaTexto1) {
    if (typeof caixaTexto1 !== "string" || caixaTexto1 === "" || deslocamento === "" || caixaTexto1 === 0 || deslocamento === 0) {
      throw new TypeError;
    }
    let resultado = ""
    for(let i = 0 ; i <caixaTexto1.length ; i++) {
      const formula = ((caixaTexto1.charCodeAt(i) - 65 - deslocamento) % 26) + 65;
      resultado += String.fromCharCode(formula);
    }
    return resultado
  }
};
export default cipher;