const num = [1, 2, 3, 4, 6];
const players = [75, 65, 67, 72, 55, 59];

// foreach map er motoi kaj kore just return korena
const result = num.forEach(n => {
    n * 2
})
console.log(result)

// filter select elements based on a condition and returns an array with the elements that fulfilled the condition
// const filter = players.filter(p => p > 60)
// const filter = players.filter(p => p > 70)
const filters = players.filter(p => p % 2 === 1)
console.log(filters)

const friends = ['tom', 'john', 'olive', 'micheal'];
const oddFriends = friends.filter(fr => fr.length % 2 === 1);
// const oddFriends = friends.filter(fr => fr.length > 4);
console.log(oddFriends)

//find: kono array dibena just first man dibe
const heights = [75, 65, 67, 72, 55, 59];
const selected = heights.find(h => h > 80);
// const selected = heights.find(h => h > 70);
console.log(selected)

//reduce: shob element theke niye ultimate ekta jinish banabe

const nums = [2, 34, 5, 7, 89];
const total = nums.reduce((previous, current) => previous + current, 0);
console.log(total)

const sums = nums.reduce((p, c) => p + c, 0);
console.log(sums)

