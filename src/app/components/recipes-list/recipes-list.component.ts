import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { RecipeModel } from '../../models/recipe.interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  public searchForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });

  constructor(private _apiService: ApiService) {}

  private startWith$: Observable<string> = this.searchForm.valueChanges.pipe(
    map(searchForm => searchForm.search),
    startWith(''),
    debounceTime(500)
  );

  readonly recipes$: Observable<RecipeModel[]> = combineLatest([this._apiService.getRecipes(), this.startWith$]).pipe(
    map(([recipes, startWith]: [RecipeModel[], string]) => {
      return recipes.filter((recipe: RecipeModel) => recipe.name?.toLowerCase().startsWith(startWith.toLowerCase()));
    })
  );
}
