## Two Fighters, One Winner

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having
health <= 0.

Each fighter will be a Fighter object/instance.

Both health and damagePerAttack will be integers larger than 0. You can mutate the Fighter objects.

Example:

```javascript
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"

// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
```

*Solution (one of many)*

```javascript
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

const declareWinner = (f1, f2, firstAttacker) => {
  return Math.ceil(f1.health / f2.damagePerAttack) === Math.ceil(f2.health / f1.damagePerAttack)
  ? f1.name === firstAttacker ? f1.name : f2.name
  : f1.health / f2.damagePerAttack > f2.health / f1.damagePerAttack  ? f1.name : f2.name
}
``
