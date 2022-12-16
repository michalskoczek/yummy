import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddRecipeComponent } from './components/recipe/add-recipe/add-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';
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
        path: 'new',
        component: AddRecipeComponent,
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
