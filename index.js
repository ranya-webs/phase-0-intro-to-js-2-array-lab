let cats = ["Milo", "Otis", "Garfield"];

// appends a cat to the end of the cats array
const destructivelyAppendCat = () => cats.push("Ralph");

// prepends a cat to the beginning of the cats array
const destructivelyPrependCat = () => cats.unshift("Bob");

// removes the last cat from the cats array
const destructivelyRemoveLastCat = () => cats.pop();

// removes the first cat from the cats array
const destructivelyRemoveFirstCat = () => cats.shift();

// appends a cat to the cats array and returns a new array, leaving the cats array unchanged
const appendCat = (name) => [...cats, `${name}`];

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
const prependCat = (name) => [`${name}`, ...cats];

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
const removeLastCat = () => cats.slice(0,-1);

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
const removeFirstCat = () => cats.slice(1);