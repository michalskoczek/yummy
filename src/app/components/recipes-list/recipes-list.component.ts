import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeModel } from '@common/../models/recipe.interface';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  constructor(private _apiService: ApiService) {}

  readonly recipes$: Observable<RecipeModel[]> = this._apiService.getRecipes();
}
