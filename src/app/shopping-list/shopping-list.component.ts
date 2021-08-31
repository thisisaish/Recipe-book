import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[];
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged
      .subscribe(
        (ings : Ingredient[]) => {
          this.ingredients = ings;
        }
      )
  }  

  loadIngredient(ingredient: Ingredient){
    this.shoppingListService.loadSelectedIngredient(ingredient);
  }
}
