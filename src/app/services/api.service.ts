import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '@common/../models/recipe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _url: string = 'https://crudcrud.com/api/af2026580c11417583a08bd57fb75f7d';

  constructor(private _http: HttpClient) {}

  getRecipes(): Observable<RecipeModel[]> {
    return this._http.get<RecipeModel[]>(`${this._url}/recipes`);
  }

  getSingleRecipe(id: number): Observable<RecipeModel> {
    return this._http.get<RecipeModel>(`${this._url}/recipes/${id}`);
  }
  postRecipe(body: RecipeModel): Observable<RecipeModel> {
    return this._http.post<RecipeModel>(`${this._url}/recipes`, body);
  }

  //
  // putRecipe(id: number, body: any): Observable<void> {
  //   return this._http.put(`${this._url}/${id}`, body).pipe(map(_ => void 0));
  // }
  //
  // deleteRecipe(id: number): Observable<any> {
  //   return this._http.delete(`${this._url}/${id}`);
  // }
}
