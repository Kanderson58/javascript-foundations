class Ingredient {
    constructor(ingredientObj) {
        this.name = ingredientObj.name;
        this.amount = ingredientObj.amount;
    }
    changeAmount(newAmount) {
        this.amount = newAmount;
    }
}

module.exports = Ingredient;
