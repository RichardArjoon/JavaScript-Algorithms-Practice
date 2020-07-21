function introduction(firstName, lastName) {
  const introduction = 'Hi, my name is '.concat(firstName, ' ', lastName, '.');
  return introduction;
}

function introduction2(firstName, lastName) {
  const introduction = 'Hi, my name is ' + firstName + ' ' + lastName;
  return introduction;
}

function introduction3(firstName, lastName) {
  const introduction = `Hi, my name is ${firstName} ${lastName}`;
  return introduction;
}

console.log(introduction('Richard', 'Arjoon'));
console.log(introduction2('Richard', 'Arjoon'));
console.log(introduction3('Richard', 'Arjoon'));
