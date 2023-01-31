const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXYZ" 

const cipher = {
  encode: function encode (offset, mensagem) {

    if (offset == null) {
      throw new TypeError("Escolha um número de deslocamento");
    } else {
      let resultadoCifra = "";
      for (let i = 0; i < string.length; i++) {
        const cifra = string.charCodeAt(i);
        let codificar =
          ((cifra - codigoAscii + offset) % tamanhoAlfabeto) + codigoAscii;
        if (cifra <= 64 || cifra >= 91) {
          codificar = cifra;
        }
        resultadoCifra += String.fromCharCode(codificar);
      } 
      return resultadoCifra;
    }
    
  } 
}
export default cipher;

