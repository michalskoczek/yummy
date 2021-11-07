import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeEditService } from 'src/app/recipe/recipe-edit/recipe-edit.service';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipes-list-element',
  templateUrl: './recipes-list-element.component.html',
  styleUrls: ['./recipes-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListElementComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(
    private recipeEditService: RecipeEditService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.recipe = this.recipeService.initRecipe();
    this.index = 1;
  }

  ngOnInit(): void {}

  onEdit() {
    this.recipeEditService.onEdit(this.index, this.activatedRoute);
  }
}
