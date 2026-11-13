export type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  difficulty: Difficulty;
  rating: number;
  mealType: MealType;
  reviewCount: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
};

type MealType = ("Breakfast" | "Lunch" | "Dinner")[];

type Difficulty = "Easy" | "Medium";

export type RecipeResponse = {
  recipes: Recipe[];
  limit: number;
  skip: number;
  total: number;
};
