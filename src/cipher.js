const tamanhoAlfabeto = 26;
const codigoAscii = 65;

const cipher = {
  encode: function encode(offset, string) {
    if (typeof offset === null || typeof string === string) {
      throw new TypeError("Erro");
      // alert("Escolha um descolamento de 1 a 10!");
    } else {
      let resultadoCifra = "";
      for (let i = 0; i < string.length; i++) {
        const cifra = string.charCodeAt(i);
        let codificar = 
        ((cifra - codigoAscii + offset) % tamanhoAlfabeto) + codigoAscii;
        if (cifra <= 65 || cifra >= 97) {
          codificar = cifra;
        }
        resultadoCifra += String.fromCharCode(codificar);
      }
      return resultadoCifra;
    }
  },

  decode: function decode(offset, string) {
    if (offset === null || !string) {
    // alert("Use o mesmo deslocamento utilizado anteriormente!");
      throw new TypeError("Erro");
    } else {
      let resultadoDecrifra = "";
      for (let i = 0; i <string.length; i++) {
        const decifra = string.charCodeAt(i);
        let decodificar =
      ((decifra + codigoAscii - offset) % tamanhoAlfabeto) + codigoAscii;
        if (decifra <= 65 || decifra >= 97) {
          decodificar = decifra;
        }
        resultadoDecrifra += String.fromCharCode(decodificar);
      }
      return resultadoDecrifra;
    }
  }
}

export default cipher;