import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  constructor() { 

  }

  ngOnInit(): void {
  }

}
