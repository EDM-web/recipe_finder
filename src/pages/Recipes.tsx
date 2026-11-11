import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";
import { getRecipes } from "../services/recipe";
import RecipeCard from "../components/recipe/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipes = await getRecipes();

        setRecipes(recipes);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong on fetchRecipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <section className="px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">All Recipes </h1>

      {loading && <p className="text-lg text-gray-500">Fetching Recipes...</p>}

      <div className="grid grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
