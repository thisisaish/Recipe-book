import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

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

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.selectedIngredient
      .subscribe(
        (ingredient: Ingredient) => {
          this.name.nativeElement.value = ingredient.name;
          this.amt.nativeElement.value = ingredient.amount;
        }
      )
  }

  onAddClicked(){
    const ingName = this.name.nativeElement.value;
    const ingAmt = this.amt.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmt);
    this.slService.addNewIngredient(newIng);
  }

  onDelete(){
    const ingName = this.name.nativeElement.value;
    const ingAmt = this.amt.nativeElement.value;
    if(ingName !== ""){
      const newIng = new Ingredient(ingName, ingAmt);
      
    }
  }

  onClear(){
    this.name.nativeElement.value = "";
    this.amt.nativeElement.value = "";
  }
}
