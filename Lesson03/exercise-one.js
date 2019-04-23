const pancakes = ['buttermilk', 'whole wheat', 'blueberry', 'Hawaiian', 'gingerbread'];

console.log(pancakes);

pancakes.push('crepes');

console.log(pancakes);

pancakes.splice(2, 1);

console.log(pancakes);

const typesOfPancakes= pancakes.join(',');

console.log(typesOfPancakes);

//The instructions say to "comma separate" the items; I have put a comma without a space; if a comma and a space were desired, the code on line 13 would read ', './/