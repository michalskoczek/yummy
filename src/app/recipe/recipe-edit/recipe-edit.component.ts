import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  editMode: boolean = false;
  formTitle: string = '';
  id: number = 0;
  btnSubmitTitle: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private apiService: ApiService
  ) {
    this.recipeForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get name() {
    return this.recipeForm.get('name') as FormArray;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        quantity: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    this.apiService.createRecipe(this.recipeForm.value);
    this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }

  private initForm() {
    let recipeName: string = '';
    let recipePreparationTime: number = 0;
    let recipeDescription: string = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.formTitle = 'Edit your recipe';
      this.btnSubmitTitle = 'Save';
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipePreparationTime = recipe.preparationTimeInMinutes;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              quantity: new FormControl(ingredient.quantity, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    } else {
      this.formTitle = 'Add a new recipe';
      this.btnSubmitTitle = 'Add recipe';
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [
        Validators.required,
        Validators.min(3),
        Validators.max(80),
      ]),
      preparationTime: new FormControl(
        recipePreparationTime,
        Validators.required
      ),
      description: new FormControl(recipeDescription, [
        Validators.required,
        Validators.min(15),
        Validators.max(255),
      ]),
      ingredients: recipeIngredients,
    });
  }
}
