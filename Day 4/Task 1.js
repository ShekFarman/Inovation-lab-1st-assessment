const animals = ["dog", "cat", "elephant", "ant", "lion"];

const longNamed = animals.filter(animal => animal.length > 3);
console.log(longNamed); 
const allNames = animals.reduce((text, animal) => text + " " + animal);
console.log(allNames);
const fewAnimals = animals.slice(1, 4);
console.log(fewAnimals);
animals.splice(2, 1);
console.log(animals);
animals.splice(1, 0, "tiger");
console.log(animals); 
const moreAnimals = ["zebra", "bear"];
const all = [...animals, ...moreAnimals];
console.log(all);
