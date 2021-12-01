//shorthand property names
const getName = (name='christian', lastname='chavez') => console.log(`${name} ${lastname}`);

getName();

const numbers1 = [1, 2, 3, 4 , 5];
const numbers2 =  [6, 7, 8, 9];

const numbers3 = [{...numbers1}, {...numbers2}];
console.log(numbers3);