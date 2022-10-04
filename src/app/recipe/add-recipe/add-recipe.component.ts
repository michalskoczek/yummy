import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  public recipeForm!: FormGroup;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.recipeForm = this.createForm();
  }

  public onSubmit(): void {
    this.apiService
      .postRecipe(this.recipeForm.value)
      .pipe(
        tap(r => console.log(r)),
        catchError((err: HttpErrorResponse) => err.message)
      )
      .subscribe(_ => console.log('success alert => poszło'));
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(255),
      ]),
      preparationTimeInMinutes: new FormControl(null, [Validators.required]),
      ingredients: new FormGroup({
        ingredientName: new FormControl(null),
        quantity: new FormControl(null),
      }),
    });
  }
}
