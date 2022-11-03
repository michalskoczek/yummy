import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '@common/interfaces/recipe.interface';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-recipes-list-element',
  templateUrl: './recipes-list-element.component.html',
  styleUrls: ['./recipes-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListElementComponent {
  @Input() recipe!: Recipe;

  constructor(private matDialog: MatDialog) {}

  public deleteRecipe(): void {
    this.matDialog.open(DeleteDialogComponent);
  }
}
