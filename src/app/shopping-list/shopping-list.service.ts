import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientChanged = new EventEmitter<Ingredient[]>();
    selectedIngredient = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('Rice', 600),
        new Ingredient('Onion', 2)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    loadSelectedIngredient(ingredient: Ingredient){
        this.selectedIngredient.emit(ingredient);
    }

    deleteIngredient(ingredient: Ingredient){}
}