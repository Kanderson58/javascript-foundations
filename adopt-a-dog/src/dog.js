class Dog {
  constructor(dogObject) {
    this.name = dogObject.name;
    this.age = dogObject.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }
  eat() {
    if(this.hungry) {
      this.hungry = false;
      return "Yum!";
    } else if (!this.hungry) {
      return "I refuse to eat."
    }
  }
  fetchBall() {
    if(this.energyLevel > 3) {
      this.energyLevel--
      return 'This is fun!'
    } else {
      return 'Nah, I\'m going to sleep instead.'
    }
  }
  sleep(){
    if(this.energyLevel < 10) {
      this.energyLevel++
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }
  }
  makeNewFriend(dogObject) {
    this.friends.push(dogObject.name)
  }
}

module.exports = Dog;
