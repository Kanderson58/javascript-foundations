class TrickOrTreater {
    constructor(costumeObject, bagObject) {
        this.dressedUpAs = costumeObject.style;
        this.bag = bagObject;
        this.hasCandy = false;
        this.countCandies = 0;
    }
    putCandyInBag(candyObject) {
        this.hasCandy = true;
        this.countCandies ++
        this.bag.fill(candyObject);
    }
    eat() {
        this.countCandies--
        this.bag.candies.splice(0, 1)
    }
}

module.exports = TrickOrTreater