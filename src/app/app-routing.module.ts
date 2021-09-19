import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";

import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, //only redirects if the full path is empty
    { path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'auth', component: AuthComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}