const numbers = [12, 10, 4, 15, 7];

const doubled = numbers.map(num => num * 2);
console.log('Doubled the numbers:',doubled);

const addFive = numbers.map(num => num + 5);
console.log('Add five:',addFive)

const half = numbers.map(num => num / 2);
console.log('Half of the numbers',half)

const friends = ['tom', 'john', 'olive', 'micheal'];

const lengths = friends.map(frnd => frnd.length);
console.log('Length of the friends:',lengths)

const firstLetter = friends.map(frnd => frnd[0]);
console.log('First letter of the friends',firstLetter)
