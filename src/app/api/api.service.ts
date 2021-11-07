import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://crudcrud.com/api/a7cf7999cc26467d99b4994c2441dfaa';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  createRecipe(recipe: Recipe) {
    this.http
      .post(`${this.url}/recipe`, recipe)
      .subscribe((responseData) => console.log(responseData));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(`${this.url}/recipe`).subscribe((recipes) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
