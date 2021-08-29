import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') 
  name!: ElementRef;

  @ViewChild('ingredientAmt')
  amt!: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked(){
    console.log(typeof this.name.nativeElement.value);
    console.log(typeof this.amt.nativeElement.value);
    this.newIngredient.emit(new Ingredient(this.name.nativeElement.value, this.amt.nativeElement.value));
  }
}
