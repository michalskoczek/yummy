import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeDeleteService {
  constructor(private recipeService: RecipeService) {}

  deleteRecipe(index: number) {
    const recipes = this.recipeService.getRecipes();
    recipes.splice(index, 1);
  }
}
