import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { RecipeService } from "../recipe/recipe.service";
import { Recipe } from "../recipe/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://recipe-book-e61cc-default-rtdb.firebaseio.com/recipes.json', 
            recipes)
        .subscribe((response) => {
            console.log(response);
        });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://recipe-book-e61cc-default-rtdb.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                    });
                })
            )
            .subscribe(recipes => {
                // console.log(recipes);
                this.recipeService.setRecipes(recipes);
            });
    }
}