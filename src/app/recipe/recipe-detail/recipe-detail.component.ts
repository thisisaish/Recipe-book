import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @ViewChild('recipeDetailModal')
  // detailModal!: ElementRef;

  @Output() recipeModal! : ElementRef;

  @Input() recipe!: Recipe;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void { }

  addToShoppingList(ingredients: Ingredient[]){
    ingredients.forEach(ing => {
      this.slService.addNewIngredient(ing);
    });
  }

}
