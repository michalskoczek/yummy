import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MainComponent } from './main/main.component';
import { NavbarMaterialDialogComponent } from './navbar/navbar-material-dialog/navbar-material-dialog.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesListElementComponent } from './recipes-list/recipes-list-element/recipes-list-element.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DeleteDialogComponent } from './recipes-list/recipes-list-element/delete-dialog/delete-dialog.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { SnackbarComponent } from './common/components/snackbar/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeComponent,
    MainComponent,
    NavbarMaterialDialogComponent,
    RecipesListComponent,
    RecipesListElementComponent,
    RecipeComponent,
    RecipeDetailComponent,
    DeleteDialogComponent,
    AddRecipeComponent,
    RecipeEditComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
