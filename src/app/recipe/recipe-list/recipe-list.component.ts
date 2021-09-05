import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes?: Recipe[];
  private recipeSub!: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSub = this.recipeService.recipesChanged
        .subscribe(
          (updatedRecipes: Recipe[]) => {
            this.recipes = updatedRecipes;
          }
        );
  }

  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
