var Recipe = require('../src/recipe.js');

class Chef {
    constructor(name, recipes) {
        this.name = name;
        this.recipeBox = recipes;
    }
    tryRecipe(recipeName, rating) {
        for(var i = 0; i < this.recipeBox.length; i++) {
            if(this.recipeBox[i].name === recipeName) {
                this.recipeBox[i].rateRecipe(rating);
            }
        }
    }
    addRecipe(recipeName, ingredientsArray) {
        var recipeName = new Recipe({ name: recipeName, ingredients: ingredientsArray });
        this.recipeBox.push(recipeName);
    }
    changeRecipe(recipeName, ingredientName, amount) {
        for(var i = 0; i < this.recipeBox.length; i++) {
            if(this.recipeBox[i].name === recipeName) {
                for(var j = 0; j < this.recipeBox[i].ingredients.length; j++) {
                    if(this.recipeBox[i].ingredients[j].name === ingredientName){
                        this.recipeBox[i].ingredients[j].amount = amount;
                    }
                }
            }
        }
    }
}

module.exports = Chef;
