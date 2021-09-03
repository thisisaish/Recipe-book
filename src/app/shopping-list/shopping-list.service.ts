import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientChanged = new Subject<Ingredient[]>();
    selectedIngredient = new EventEmitter<number>();
    existingIng!: Ingredient | undefined;

    private ingredients: Ingredient[] = [
        new Ingredient('Rice', 600),
        new Ingredient('Onion', 2)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }
    
    loadSelectedIngredient(index: number){
        this.selectedIngredient.emit(index);
    }
    
    addNewIngredient(ingredient: Ingredient){
        this.existingIng = this.ingredients.find((ing) => {
            return ing.name.toLowerCase() === ingredient.name.toLowerCase();
        });  
        if(this.existingIng){
            this.existingIng.amount += ingredient.amount;
        }else{
            this.ingredients.push(ingredient);
        }      
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(ingredient: Ingredient, index: number){
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}