var Dog = require("./dog.js");

class Person {
  constructor(personName, personDog) {
    this.name = personName;
    this.dog = personDog;
  }
  fillFoodBowl() {
    this.dog.hungry = false;
  }
  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`;
  }
  introduceNewFriends(newFriend) {
    this.dog.friends.push(newFriend.name);
  }
  adoptAPup(pupName, pupAge) {
    if(this.dog === undefined) {
      var adoptPup = new Dog({name: pupName, age: pupAge});
      this.dog = adoptPup;
    } else {
      return `You can\'t adopt ${pupName}. You already have ${this.dog.name}!`
    }
  }
}

module.exports = Person;
