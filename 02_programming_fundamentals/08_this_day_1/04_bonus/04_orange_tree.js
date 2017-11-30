// See Sparta courses for the exercise summary

const orangeTree = {
  oranges: 0,
  age: 0,
  height: 0,
  alive: true,
  seed: function() {
    this.oranges=0;
    this.age=0;
    this.height=0;
    this.alive=true;
  },
  pickAnOrange: function() {
    if (this.oranges>0)
    {
      this.oranges=this.oranges-1;
      return true;
    }
    else
    {
      return false;
    }
  },

  ageOneYear: function() {
    this.age=this.age+1;
    if (this.age <5) {
      this.height=this.height+25;
    }
    else if (this.age>=5 && this.age <10) {
      this.oranges=10;
      this.height=this.height+25;
    }
    else if (this.age>=10 && this.age <20) {
      this.oranges=20;
      this.height=this.height+10;
    }
    else if (this.age>=20 && this.age <40) {
      this.oranges=5;
    }
    else if (this.age>=40) {
      this.oranges=0;
      const ageDie=Math.ceil(Math.random());
      if ((this.age>=50 && (ageDie*this.age===this.age)) || this.age===100) {
        this.alive=false;
      }
    }
  }
};
//should be able to pick an orange when there are some'

orangeTree.seed();
for (let i=0;i<50;i++) {
  orangeTree.ageOneYear();
}
module.exports = orangeTree;
