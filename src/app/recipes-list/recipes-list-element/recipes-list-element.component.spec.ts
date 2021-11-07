import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListElementComponent } from './recipes-list-element.component';

describe('RecipesListElementComponent', () => {
  let component: RecipesListElementComponent;
  let fixture: ComponentFixture<RecipesListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesListElementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
