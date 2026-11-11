import type { RecipeResponse } from "../types/recipe";

const API_URL = "https://dummyjson.com";

export const getRecipes = async () => {
  try {
    const response = await fetch(`${API_URL}/recipes`);

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    const data: RecipeResponse = await response.json();

    return data.recipes;
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Something went wrong at getRecipes");
  }
};
