import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Recipe } from '@common/interfaces/recipe.interface';
import { tap } from 'rxjs';
import { ApiService } from '../api/api.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.apiService
      .getRecipes()
      .pipe(tap(recipes => (this.recipes = recipes)))
      .subscribe();
  }
}
