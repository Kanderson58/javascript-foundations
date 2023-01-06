var Dog = require("./dog.js");

class Person {
  constructor(name, dogObject) {
    this.name = name; 
    this.dog = dogObject;
  }
  fillFoodBowl() {
    this.dog.eat();
  }
  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`
  }
  introduceNewFriends(dogObject) {
    this.dog.makeNewFriend(dogObject)
  }
  adoptAPup(pupName, pupAge){
    if(this.dog === undefined) {
      this.dog = new Dog({name: pupName , age: pupAge})
    } else {
      return `You can\'t adopt ${pupName}. You already have ${this.dog.name}!`
    }
  }
}

module.exports = Person;
