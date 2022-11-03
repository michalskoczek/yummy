import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '@common/interfaces/recipe.interface.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url: string =
    'https://crudcrud.com/api/ad71ced803a84f3d9503a72cf158c05c';

  constructor(private http: HttpClient) {}

  postRecipe(body: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.url}/recipes`, body);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.url}/recipes`);
  }

  getSingleRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}/${id}`);
  }

  putRecipe(id: number, body: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, body);
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
