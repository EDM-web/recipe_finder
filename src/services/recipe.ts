import type { Recipe, RecipeResponse } from "../types/recipe";

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

export const getOneRecipe = async (id: string | undefined) => {
  try {
    const response = await fetch(`${API_URL}/recipes/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch one recipe");
    }

    const data: Recipe = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};

export const searchRecipe = async (searchName: string) => {
  try {
    const response = await fetch(
      `${API_URL}/recipes/search?q=${encodeURIComponent(searchName)}`,
    );

    if (!response.ok) {
      throw new Error("Failed to search recipes");
    }

    const data: RecipeResponse = await response.json();

    return data.recipes;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
};
