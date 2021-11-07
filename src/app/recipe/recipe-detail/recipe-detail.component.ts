import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeDeleteService } from '../recipe-delete.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private recipeDelete: RecipeDeleteService
  ) {
    this.recipe = this.recipeService.initRecipe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
    });
  }

  onDelete() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.recipeDelete.deleteRecipe(this.id);
    this.router.navigateByUrl('recipes');
  }
}
