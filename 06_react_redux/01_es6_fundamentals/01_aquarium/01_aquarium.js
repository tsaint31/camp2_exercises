// Insert code here
class Fish {
  constructor(name, sex, type) {
    this.name = name;
    this.sex = sex;
    this.type= type;
  }
}

class Algae {
  constructor(nb) {
    this.nb = nb;
  }
}

class Aquarium {
  constructor(newFish,newAlgae) {
    this.fishes = newFish;
    this.algaes = newAlgae;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  endTurn() {
    let nbcar=0;
    let nbveg=0;
    this.fishes.forEach(
      function (element) {
        if(element.type===0){
          nbcar=nbcar+1;
        }
        else {
          nbveg=nbveg+1;
        }
      }
    );
    const endFishTable=this.fishes.filter(function (element) {
      if(element.type===0){
        return true;
      } else {
        if (nbcar>=1) {
          nbcar=nbcar-1;
          return false;
        } else {
          return true;
        }
      }
    });

    const endAlgaeTable=this.algaes.filter(function () {
      if(nbveg>=1){
        nbveg=nbveg-1;
        return false;
      } else {
        return true;
      }
    });
    this.algaes=[];
    this.algaes=endAlgaeTable;
    this.fishes=[];
    this.fishes=endFishTable;
  }
}

const newCarnFish = new Fish("Lorem", "M", 0);
const newVeganFish = new Fish("Lorem", "M", 1);
const newAlgae = new Algae(12);
const newAquarium = new Aquarium([newVeganFish, newCarnFish,newVeganFish,newVeganFish,newVeganFish], [newAlgae,newAlgae,newAlgae,newAlgae,newAlgae]);
newAquarium.endTurn();

module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};


// "I want an aquarium, I need to put fish and algae in it. I also need to pass time in order to check that everything is fine".
// Implement this aquarium following these rules (respect the name of classes and methods):
// An aquarium contain fishes and algaes OK
// Fish has name and sex  OK
// The aquarium has a method to add a fish OK
// The aquarium has a method to add an algue OK
// The aquarium has a method to pass time, each turn we make some actions OK
// Each turn, we want to display the number of algaes and list fishes with name and sexes
// The aquarium should contain different kind of fishes (some carnivorous and some vegan)
// Each turn, fishes try to eat something (algue or other fishes if they are vegan or carnivorous)
// If something was eaten, it should be removed from the aquarium
