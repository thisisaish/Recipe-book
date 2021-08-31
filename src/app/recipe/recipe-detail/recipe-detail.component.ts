import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @ViewChild('recipeDetailModal')
  // detailModal!: ElementRef;

  @Output() recipeModal! : ElementRef;

  // @Input() recipe!: Recipe;
  recipe! : Recipe;
  id!: number;
  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  addToShoppingList(ingredients: Ingredient[]){
    ingredients.forEach(ing => {
      this.slService.addNewIngredient(ing);
    });
  }

}
