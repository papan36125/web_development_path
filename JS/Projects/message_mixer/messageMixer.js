function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
}

function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
}
function reverseWord(word) {
  return word.split("").reverse().join("");
}
function reverseAllWords(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
}
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
}
function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
}
function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
}
function palindrome(str){
    return `${str} ${reverseWord(str)}`;
  }
const pigLatin = function(sentence, character){
  return sentence.split(' ').join(character + ' ');
};
// let MessageMixer = {
//   countCharacter(inputString, inputCharacter) {
//   let count = 0;
//   let string = inputString.toLowerCase();
//   let character = inputCharacter.toLowerCase();
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === character) {
//          count++;
//       }
//     }
//   return count;
// },
//   capitalizeFirstCharacterOfWords(string) {
//   let arr = string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       let word = arr[i];
//         arr[i] = word[0].toUpperCase() + word.substring(1);
//     }
//   return arr.join(" ");
// },
//   reverseWord(word) {
//   return word.split("").reverse().join("");
// },
//   reverseAllWords(sentence) {
//   let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = this.reverseWord(words[i]);
//     }
//    return words.join(" ");
// },
//   replaceFirstOccurence(string, toBeReplaced, replaceWith) {
//   return string.replace(toBeReplaced, replaceWith);
// },
//   replaceAllOccurrences(string, toBeReplaced, replaceWith) {
//   return string.split(toBeReplaced).join(replaceWith);
// },
//   encode(string) {
//   let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
//     for (let key in replacementObject) {
//       string = this.replaceAllOccurrences(string, key, replacementObject[key]);
//     }
//     return string;
// },
//   palindrome(str){
//     return `${str} ${MessageMixer.reverseWord(str)}`;
//   }
// };
// MessageMixer.pigLatin = function(sentence, character){
//   return sentence.split(' ').join(character + ' ');
// };
// module.exports = MessageMixer;
// export default MessageMixer;
export { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin};
