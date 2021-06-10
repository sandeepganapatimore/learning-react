// spread operators is three dots(...) that performs several different tasks.
// first, the spread operator alliows us to combine the contents of arrays.

const outdoorGames = ['Football', 'Cricket', 'Volleyball', 'Hockey'];
const indoorGames = ['TableTennise', 'Chess', 'CarromBoard'];
const games = [...indoorGames, ...outdoorGames];
console.log(games.join(','));

// spread oprator help us is many ways If we want to get last element of the array.

const [last] = indoorGames.reverse(); // here by usung the reverse function we have mutated the array........
console.log(last);
console.log(indoorGames.join(','));


// We can reverse the list by immutating the list.

const [end] = [...outdoorGames].reverse();
console.log(end);
console.log(outdoorGames.join(','));