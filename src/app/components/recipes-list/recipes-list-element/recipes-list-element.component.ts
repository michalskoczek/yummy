import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { RecipeModel } from '../../../models/recipe.interface';

@Component({
  selector: 'app-recipes-list-element',
  templateUrl: './recipes-list-element.component.html',
  styleUrls: ['./recipes-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListElementComponent {
  @Input() recipe!: RecipeModel;

  constructor(private matDialog: MatDialog) {}

  public deleteRecipe(): void {
    this.matDialog.open(DeleteDialogComponent);
  }
}
