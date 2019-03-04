const HashMap = require('./hashMap');

function main1() {
  // const lor = new HashMap();
  // lor.set('Hobbit', 'Bilbo');
  // lor.set('Hobbit', 'Frodo');
  // lor.set('Wizard', 'Gandolf');
  // lor.set('Human', 'Aragon');
  // lor.set('Elf', 'Legolas');
  // lor.set('Maiar', 'The Necromancer');
  // lor.set('Maiar', 'Sauron');
  // lor.set('RingBearer', 'Gollum');
  // lor.set('LadyOfLight', 'Galadriel');
  // lor.set('HalfElven', 'Arwen');
  // lor.set('Ent', 'Treebeard');
  // console.log(lor.get('Hobbit')); //Sauron
}

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
console.log(palindromeFinder(str));
