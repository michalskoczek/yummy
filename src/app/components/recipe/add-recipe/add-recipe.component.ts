import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';
import { catchError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  public recipeForm!: FormGroup;

  constructor(
    private _apiService: ApiService,
    private _snackbarService: SnackbarService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeForm = this.createForm();
  }

  public onSubmit(): void {
    this._apiService
      .postRecipe(this.recipeForm.value)
      .pipe(catchError((err: HttpErrorResponse) => err.message))
      .subscribe(_ => {
        this._snackbarService.openSnackBar('New recipe added!', '', 'snackbar-success');
        this._router.navigate(['/recipes'], {
          relativeTo: this._activatedRoute,
        });
      });
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(255)]),
      preparationTimeInMinutes: new FormControl(null, [Validators.required]),
      ingredients: new FormGroup({
        name: new FormControl(null),
        quantity: new FormControl(null),
      }),
    });
  }
}
