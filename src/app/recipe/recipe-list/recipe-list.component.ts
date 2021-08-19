import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Biryani', 'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yot9zfocxiqxeghusxny'),
    new Recipe('Phulka', 'The Indian bread is high in fibre, protein and other essential nutrients.', 'https://images.edexlive.com/uploads/user/imagelibrary/2018/9/12/original/naan-bread-sweet-naan-958517.jpg'),
    new Recipe('Mutton Kola Urundai','Kola Balls or Kola Urundai in the local language, is one of the crunchiest South-Indian delicacy.','https://www.avacare.in/images/recipes/madurai_mutton_kola_urundai.jpg'),
    new Recipe('Paneer Tikka','The sight of Paneer chunks floating on Tikka will make you feel ecstatic.','https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-3.jpg'),
    new Recipe('Fried Rice','This appetizing Chinese delicacy is one of the most popular food among kids.','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/0/FNK_Fried-Rice_s4x3.jpg.rend.hgtvcom.826.620.suffix/1594918949644.jpeg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
