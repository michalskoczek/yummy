import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent implements OnInit {
  recipesList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipesList = this.recipeService.getRecipes();
  }
}
