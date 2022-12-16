import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '@common/../models/recipe.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _url: string = 'https://crudcrud.com/api/aac50fc6a0104115a61c1e5798811c13';

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
