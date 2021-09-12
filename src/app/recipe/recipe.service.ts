import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe(
            'Biryani', 
            'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent.',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yot9zfocxiqxeghusxny',
            [
                new Ingredient('Rice', 600),
                new Ingredient('Meat', 600),
                new Ingredient('Onion', 4),
                new Ingredient('Tomatoes', 3),
                new Ingredient('Curd', 100)
            ]),
        new Recipe(
            'Phulka', 
            'The Indian bread is high in fibre, protein and other essential nutrients.', 
            'https://images.edexlive.com/uploads/user/imagelibrary/2018/9/12/original/naan-bread-sweet-naan-958517.jpg',
            []),
        new Recipe(
            'Mutton Kola Urundai',
            'Kola Balls or Kola Urundai in the local language, is one of the crunchiest South-Indian delicacies.',
            'https://www.avacare.in/images/recipes/madurai_mutton_kola_urundai.jpg',
            []),
        new Recipe(
            'Paneer Tikka',
            'The sight of Paneer chunks floating on Tikka will make you feel ecstatic.',
            'https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-3.jpg',
            []),
        new Recipe(
            'Fried Rice',
            'This appetizing Chinese delicacy is one of the most popular food among kids.',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/9/12/0/FNK_Fried-Rice_s4x3.jpg.rend.hgtvcom.826.620.suffix/1594918949644.jpeg',
            [])
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}