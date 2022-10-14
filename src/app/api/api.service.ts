import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '@common/interfaces/recipe.interface.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly url: string =
    'https://crudcrud.com/api/f92acc4e33c742febd75f10446226ea6';

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
