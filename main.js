const HashMap = require('./hashMap');

function main1() {
  const lor = new HashMap();
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  // console.log(lor.get('Hobbit')); //Sauron

  console.log(JSON.stringify(lor, null , 2));
}
main1();

function palindromeFinder(str) {
  //Create a map
  let regex = /[^a-zA-Z0-9]/g;
  let formmatedStr = str.toLowerCase().replace(regex, '');
  let letters = new Map();

  //Loop through input str
  for (let i = 0; i < formmatedStr.length; i++) {
    //with the map keep a count of all occurences of a single letter
    // if the letter is already in the map Map.letter++
    if (letters.has(formmatedStr[i])) {
      const count = letters.get(formmatedStr[i]);
      letters.set(formmatedStr[i], count + 1);
    } else {
      // otherwise add the letter to the map
      letters.set(formmatedStr[i], 1);
    }
  }
  let falseCount = 0;
  // forEach value in map
  letters.forEach((value, key) => {
    // check if the value % 2 === 0
    if (value % 2 !== 0) {
      falseCount++;
    }
  });
  if (falseCount > 1) {
    return false;
  }
  return true;
}

const str = 'aaaa';
// console.log(palindromeFinder(str));

/*====== Anagram grouping =====*/

// if the two + words are anagrams, add to an array,
//  input: array of strings
// input: strArray

function algorithmGrouper(strArray) {
  const Anagram = new Map();
  let outputArray = [];
  //  loop over array
  for (let i = 0; i < strArray.length; i++) {
    let currentWord = strArray[i];
    // cosnt alphabetixedstr tolowercase split sort join
    const alphabetString = currentWord
      .toLowerCase()
      .split('')
      .sort()
      .join('');
    //  if map.has(key : alphstr?  value: indexOfOutputarray )
    if (Anagram.has(alphabetString)) {
      let index = Anagram.get(alphabetString);
      // outputArray[value].push( input array[i])
      outputArray[index].push(currentWord);
    } else {
      const matchingAnagramsArray = [];
      matchingAnagramsArray.push(currentWord);
      outputArray.push(matchingAnagramsArray);
      Anagram.set(alphabetString, outputArray.length - 1);
      console.log(Anagram);
    }
    // console.log(outputArray);
  }
  return outputArray;
}
// key : alphabetString
// value: index of matchinganagramsarray in output array

// else map.set(newAlphstr: value)
// [[    ],   [  ] ]
// Map.set()
// const  outputArray = [ ]
//

const strArr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

// console.log(algorithmGrouper(strArr));
