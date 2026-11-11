export type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  difficulty: string;
  rating: number;
  mealType: MealType;
  reviewCount: number;
};

type MealType = {
  mealType: "Breakfast" | "Lunch" | "Dinner";
};

export type RecipeResponse = {
  recipes: Recipe[];
  limit: number;
  skip: number;
  total: number;
};
