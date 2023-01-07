class VendingMachine {
    constructor(machineObject) {
        this.id = machineObject.id;
        this.isBroken = machineObject.isBroken;
        this.snacks = [];
    }
    addSnacks(snackInst) {
        var compareArray = [];
        compareArray.push(snackInst);
        for(var i = 0; i < this.snacks.length; i++) {
            if(this.snacks[i].name === compareArray[0].name){
                return 'Sorry, that snack is already stocked! Try adding a different snack.'
            }
        } this.snacks.push(snackInst);
    }
    purchaseSnack(snackName, moneyGiven) {
        for(var i = 0; i < this.snacks.length; i++) {
            if(this.snacks[i].name === snackName && this.snacks[i].price <= moneyGiven && this.snacks[i].itemsInStock > 0) {
                var change = moneyGiven - this.snacks[i].price
                this.snacks[i].removeItem()
                return `Success! Here is $${change} back!`
            } else if (this.snacks[i].itemsInStock === 0) {
                return 'Sorry, no items in stock. Try another item.'
            } else if (this.snacks[i].price > moneyGiven) {
                return 'Sorry, not enough payment. Please add more money.'
            }
        }
    }
}

module.exports = VendingMachine;
