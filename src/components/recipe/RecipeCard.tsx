import type { Recipe } from "../../types/recipe";
import { Star } from "lucide-react";

type RecipeCardProps = {
  recipe: Recipe;
};
const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className=" border border-gray-200 rounded-xl space-y-0 transition-all duration-200 hover:-translate-y-1  hover:shadow-xl">
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
  );
};

export default RecipeCard;
