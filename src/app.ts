import { Person, people } from './data/persons.js';

console.table(people);
console.log('Hello from app.ts!');

const onlyName: string[] = people.map((cObj) => cObj.name);
console.log('onlyName ===', onlyName);
