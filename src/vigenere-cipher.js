const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(x = true) {
    this.mode = x;
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    const textArr = text.split('').map(e => e.toUpperCase());
    const keyArr = key.split('').map(e => e.toUpperCase());
    let keyIndex = 0;

    let encryptedArr = textArr.map((e, i) => {
      if (keyIndex >= keyArr.length) {
        keyIndex = 0;
      }
      let charCode = textArr[i].charCodeAt(0)
      if (charCode < 65 || charCode > 90) return String.fromCharCode(charCode);


      let encryptedCode = textArr[i].charCodeAt(0) + keyArr[keyIndex].charCodeAt(0) - 65;
      let encryptedSymbol = null;
      if (encryptedCode > 90) {
        encryptedSymbol = String.fromCharCode(encryptedCode - 26);
      } else {
        encryptedSymbol = String.fromCharCode(encryptedCode);
      }

      keyIndex++;

      return encryptedSymbol;
    });

    if (!this.mode) encryptedArr.reverse();

    return encryptedArr.join('');
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    const textArr = text.split('').map(e => e.toUpperCase());
    const keyArr = key.split('').map(e => e.toUpperCase());
    let keyIndex = 0;

    let encryptedArr = textArr.map((e, i) => {
      if (keyIndex >= keyArr.length) {
        keyIndex = 0;
      }
      let charCode = textArr[i].charCodeAt(0)
      if (charCode < 65 || charCode > 90) return String.fromCharCode(charCode);


      let encryptedCode = textArr[i].charCodeAt(0) - keyArr[keyIndex].charCodeAt(0) + 65;
      let encryptedSymbol = null;
      if (encryptedCode < 65) {
        encryptedSymbol = String.fromCharCode(encryptedCode + 26);
      } else {
        encryptedSymbol = String.fromCharCode(encryptedCode);
      }

      keyIndex++;

      return encryptedSymbol;
    });

    if (!this.mode) encryptedArr.reverse();

    return encryptedArr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

const a = new VigenereCipheringMachine(false);
// let str = 'attacking tonight';
// str = str.split('').reverse().join('');
// let strEnRe = a.encrypt(str, 'OCULORHINOLARINGOLOGY');
// console.log(strEnRe);
// strEnRe = strEnRe.split('').reverse().join('');
// console.log(strEnRe);
// console.log(a.decrypt(strEnRe, 'OCULORHINOLARINGOLOGY'));

// console.log(a.decrypt('AEIHQX SX DLLU!', undefined));
// a.decrypt('AEIHQX SX DLLU!', undefined);
// a.decrypt();