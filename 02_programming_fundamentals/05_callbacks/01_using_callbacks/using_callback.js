const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
}

// Write a function sayHello that greets: "Hello, Spartacus".

thisIsThePlayer(sayHello);
