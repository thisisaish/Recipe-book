import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  // @Input() selectedRecipe!: Recipe;
  // selectedRecipe!: Recipe;
  @Input() detailModal! : ElementRef;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // router link added instead
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   )
  }

  // onSelectRecipe(recipe: Recipe){
  //   this.selectedRecipe = recipe;
  // }

}
