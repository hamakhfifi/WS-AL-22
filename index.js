let str = "your long string with many words.";
let wordCount = str.match(/(\w+)/g).length; // The number of words in the sentence
let n = str.length; //The length of the sentence
let m = str.replace(/[^aeiou]/gi, "").length; //The number of vowels in the sentence 