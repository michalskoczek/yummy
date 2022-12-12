export interface Ingredient {
  readonly _id: string;
  readonly name: string;
  readonly quantity: string;
}

export interface RecipeModel {
  readonly _id: string;
  readonly name: string;
  readonly preparationTimeInMinutes: number;
  readonly description: string;
  readonly ingredients: Ingredient;
}
