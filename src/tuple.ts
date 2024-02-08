//  Tuple

type UserArr = [string, number, boolean];

const user: [string, number, boolean] = ['James', 23, true];

user[0] = 'Mike';
// su tuple nereikia push, pop, shift, unshift, splice
user.push('mike'); // zinomas bug
const users: [number, string][] = [
  [1, 'james@email.com'],
  [2, 'mike@email.com'],
  [3, 'jill@email.com'],
];
