import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('ingredientName') 
  // nameEl!: ElementRef;

  // @ViewChild('ingredientAmt')
  // amt!: ElementRef;

  @ViewChild('f')
   form!: NgForm;

  editMode = false;
  editItemIndex! : number;
  ingredient! : Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.slService.selectedIngredient
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editItemIndex = index;
          this.ingredient = this.slService.getIngredient(index);
          this.form.setValue({
            name: this.ingredient.name,
            amount: this.ingredient.amount
          });
          // this.nameEl.nativeElement.value = ingredient.name;
          // this.amt.nativeElement.value = ingredient.amount;
        }
      )
  }

  onAddClicked(){
    // const ingName = this.name.nativeElement.value;
    // const ingAmt = this.amt.nativeElement.value;
    const value = this.form.value;
    const ingName = value.name;
    const ingAmt = value.amount;
    const newIng = new Ingredient(ingName, ingAmt);
    if(this.editMode){
      this.slService.updateIngredient(newIng, this.editItemIndex);
      this.editMode = false;
    }else{
      this.slService.addNewIngredient(newIng);
    }
    this.onClear();
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.editMode = false;
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    // this.form.setValue({
    //   name : "",
    //   amount : ""
    // })
    this.form.reset();
  }
}
