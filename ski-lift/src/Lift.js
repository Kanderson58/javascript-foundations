var Skier = require('./Skier');

class Lift {
    constructor(maxPeople) {
        this.inService = true;
        this.limit = maxPeople;
        this.skiers = [];
        this.safetyBar = "up";
    }
    admitSkier(name, hasTicket) {
        var skier = new Skier(name, hasTicket)
        if(this.skiers.length < this.limit && hasTicket) {
            this.skiers.push(skier);
        } else if(this.skiers.length >= this.limit){
            return `Sorry, ${skier.name}. Please wait for the next lift!`;
        } else {
            return `Sorry, ${skier.name}. You need a lift ticket!`;
        }
    }
    startLift() {
        var remainingSpots = this.limit - this.skiers.length;
        if(this.skiers.length === this.limit) {
            this.safetyBar = "down";
        } else if (remainingSpots === 1){
            return 'We still need 1 more skier!'
        } else {
            return `We still need ${remainingSpots} more skiers!`
        }
    }
}

module.exports = Lift;