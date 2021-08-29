import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  @Input() selectedRecipe!: Recipe;
  @Input() detailModal! : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

}
