import { useEffect, useState } from "react";
import type { Recipe } from "../types/recipe";
import { getRecipes } from "../services/recipe";
import { Star } from "lucide-react";

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
          <div
            key={recipe.id}
            className=" border border-gray-200 rounded-xl space-y-0 transition-all duration-200 hover:-translate-y-1  hover:shadow-xl"
          >
            <div className="relative ">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="rounded-t-xl h-48 w-full object-cover "
              />

              <span className="text-xs absolute top-3 right-3  px-3 py-0.5 text-gray-600 border rounded-full border-gray-200 bg-white/80 font-medium">
                {recipe.cuisine}
              </span>
            </div>

            <div className="space-y-3  p-4">
              <p className="text-base font-medium text-gray-600 line-clamp-1">
                {recipe.name}
              </p>

              <div className="flex justify-start items-center  ">
                <span className="text-orange-600 inline-flex items-center text-sm gap-1 ">
                  <Star size={"16px"} className="" /> {recipe.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
