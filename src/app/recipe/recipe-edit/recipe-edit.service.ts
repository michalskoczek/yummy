import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecipeEditService {
  constructor(private router: Router) {}

  onEdit(index: number, activatedRoute: ActivatedRoute) {
    this.router.navigate([`${index}/edit`], {
      relativeTo: activatedRoute,
    });
  }
}
