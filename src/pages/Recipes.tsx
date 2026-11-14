import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";
import { getRecipes, searchRecipe } from "../services/recipe";
import RecipeCard from "../components/recipe/RecipeCard";
import { X } from "lucide-react";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let data: Recipe[];

        if (searchName.trim()) {
          data = await searchRecipe(searchName.trim());
        } else {
          data = await getRecipes();
        }

        setRecipes(data);
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong on fetchRecipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchName]);
  return (
    <section className="px-8 py-8 ">
      {/* search  */}
      <div className="flex relative w-2/3 items-center my-8 mx-auto">
        <input
          type="text"
          name="name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search recipe by name"
          className="px-6 py-3 w-full border border-gray-300 rounded-full bg-white focus:ring-1 focus:ring-orange-400 focus:outline-none"
        />

        {searchName && (
          <button
            type="button"
            onClick={() => setSearchName("")}
            className="absolute right-4 text-gray-400 hover:text-gray-600"
            title="Clear search"
          >
            <X />
          </button>
        )}
      </div>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">All Recipes </h1>

      {!loading && recipes.length > 0 && (
        <p className="text-xl text-gray-500 mb-5">Total : {recipes.length}</p>
      )}

      {loading && <p className="text-lg text-gray-500">Fetching Recipes...</p>}

      {!loading && recipes.length === 0 && (
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-500 ">Recipe not found</p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
