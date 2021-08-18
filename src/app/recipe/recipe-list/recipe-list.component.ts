import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biriyani', 'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.','https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yot9zfocxiqxeghusxny'),
    new Recipe('Phulka', 'The Indian bread is high in fibre, protein and other essential nutrients.', 'https://images.edexlive.com/uploads/user/imagelibrary/2018/9/12/original/naan-bread-sweet-naan-958517.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
