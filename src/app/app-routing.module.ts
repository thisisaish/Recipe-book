import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";

import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, //only redirects if the full path is empty
    { path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: ':id', component: RecipeDetailComponent}
    ] },
    { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}