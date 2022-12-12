import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, switchMap } from 'rxjs';
import { RecipeModel } from '../../models/recipe.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
  readonly recipesDetails$: Observable<RecipeModel> =
    this._activatedRoute.params.pipe(
      switchMap((params: Params) =>
        this._apiService.getSingleRecipe(params['id'])
      )
    );

  constructor(
    private _apiService: ApiService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
