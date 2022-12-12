import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: MainComponent,
    children: [
      {
        path: '',
        component: RecipeComponent,
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
      },
      // {
      //   path: 'new',
      //   component: AddRecipeComponent,
      // },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
