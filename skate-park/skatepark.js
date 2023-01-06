class SkatePark {
    constructor(skateParkObj) {
        this.name = skateParkObj.name;
        this.yearFounded = skateParkObj.year;
        this.style = skateParkObj.type;
        this.features = skateParkObj.features;
        this.isPrivate = skateParkObj.isPrivate || false;
        this.cost = skateParkObj.price || 0;
        this.occupants = [];
    }
    admit(skaterInst) {
        if(this.isPrivate && skaterInst.money >= this.cost && this.occupants.length < 3) {
            skaterInst.money = skaterInst.money - this.cost;
            this.occupants.push(skaterInst);
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
        } else if (this.isPrivate && skaterInst.money < this.cost) {
            return `Sorry, you don't have enough money.`
        }else if (!this.isPrivate && this.occupants.length < 3){
            this.occupants.push(skaterInst);
            return `Welcome to the free ${this.name} Skatepark!`;
        } else {
            return 'Sorry, we are at max capacity. Thank you for understanding.'
        }
    }
}

module.exports = SkatePark