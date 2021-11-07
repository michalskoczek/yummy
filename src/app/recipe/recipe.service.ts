import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      _id: 1,
      name: 'Bigos',
      preparationTimeInMinutes: 180,
      description: 'Dużo kapusty, kiełbasy i grzybów',
      ingredients: [
        {
          _id: '1',
          name: 'kapusta',
          quantity: '1',
        },
        {
          _id: '1',
          name: 'kiełbasa',
          quantity: '10',
        },
        {
          _id: '1',
          name: 'grzyby',
          quantity: '5',
        },
      ],
    },
    {
      _id: 2,
      name: 'Pizza',
      preparationTimeInMinutes: 80,
      description: 'Ciasto ugnieść, dosypać składniki i dużo sosu pomidorowego',
      ingredients: [
        {
          _id: '1',
          name: 'mąka',
          quantity: '2',
        },
        {
          _id: '1',
          name: 'drożdże',
          quantity: '5',
        },
        {
          _id: '1',
          name: 'sos pomidorowy',
          quantity: '10',
        },
      ],
    },
  ];
  constructor() {}

  initRecipe() {
    return new Recipe(1, '', 0, '', [{ _id: '', name: '', quantity: '1' }]);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
