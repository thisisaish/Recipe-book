import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() selectedRecipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

}
