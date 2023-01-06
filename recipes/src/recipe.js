class Recipe {
    constructor(recipeObj) {
        this.name = recipeObj.name;
        this.ingredients = recipeObj.ingredients;
        this.attempted = false;
        this.rating = null;
    }
    rateRecipe(rating) {
        this.attempted = true;
        this.rating = rating;
    }
    changeIngredientAmount(ingredient, amount) {
        for(var i = 0; i < this.ingredients.length; i++) {
            if(ingredient === this.ingredients[i].name) {
                this.ingredients[i].amount = amount;
            }
        }
    }
    generateGroceryList() {
        var list = 'You need:'
            for(var i = 0; i < this.ingredients.length; i++) {
            list += ` ${this.ingredients[i].amount} ${this.ingredients[i].name},`
        } return list
    }
}

module.exports = Recipe;
