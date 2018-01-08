const aquarium =  require("../01_aquarium.js");

test("aquarium can contains fishes and algaes", () => {
  const newFish = new aquarium.fish("Lorem", "M", 0);
  const newAlgae = new aquarium.algae(12);

  const newAquarium = new aquarium.aquarium([newFish], [newAlgae]);

  expect(newAquarium.fishes).toEqual([newFish]);
  expect(newAquarium.algaes).toEqual([newAlgae]);
});

test("fish has name and sex", () => {
  const newFish = new aquarium.fish("Lorem", "M", 0);

  expect(newFish.name).toBe("Lorem");
  expect(newFish.sex).toBe("M");
});

test("we can add a fish", () => {
  const newAquarium = new aquarium.aquarium([], []);
  const newFish = new aquarium.fish("Lorem", "M", 0);

  newAquarium.addFish(newFish);

  expect(newAquarium.fishes[0]).toEqual(newFish);
});

test("we can add an algae", () => {
  const newAquarium = new aquarium.aquarium([], []);
  const newAlgae = new aquarium.algae(12);

  newAquarium.addAlgae(newAlgae);

  expect(newAquarium.algaes[0]).toEqual(newAlgae);
});

test("we can end the turn", () => {
  console.log = jest.fn();

  const newCarnFish = new aquarium.fish("Lorem", "M", 0);
  const newVeganFish = new aquarium.fish("Lorem", "M", 1);

  const newAlgae = new aquarium.algae(12);

  const newAquarium = new aquarium.aquarium([newVeganFish, newCarnFish], [newAlgae]);
  newAquarium.endTurn();

  expect(newAquarium.algaes.length).toBe(0);
  expect(newAquarium.fishes.length).toBe(1);
});
