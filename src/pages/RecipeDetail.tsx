import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import type { Recipe } from "../types/recipe";
import { getOneRecipe } from "../services/recipe";
import {
  ChartBar,
  ChartNoAxesColumnIncreasing,
  ChefHat,
  ChevronRight,
  Clock,
  Soup,
  Star,
} from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOneRecipe = async () => {
      if (!id) return;

      try {
        const recipe = await getOneRecipe(id);

        setRecipe(recipe);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOneRecipe();
  }, []);
  return (
    <>
      {/* Loading UI  */}
      {loading ? (
        <p className="text-lg text-gray-500 col-span-12 flex justify-center items-center ">
          Fetching Recipes...
        </p>
      ) : (
        <main className="px-8 py-8">
          {/* Breadcrumb  */}
          <div className="flex gap-3 items-center mb-8">
            <NavLink to={"/"} className={"text-base text-gray-500"}>
              Home
            </NavLink>
            <ChevronRight
              size={15}
              strokeWidth={1.5}
              className="text-gray-500"
            />
            <NavLink to={"/recipes"} className={"text-base text-gray-500"}>
              Recipes
            </NavLink>
            <ChevronRight
              size={15}
              strokeWidth={1.5}
              className="text-gray-500"
            />
            <p className={"text-base text-gray-700"}>{recipe?.name}</p>
          </div>

          <section className=" grid grid-cols-12 gap-8 items-center mb-20">
            <div className="space-y-3 col-span-6 ">
              <div className="flex gap-8">
                {/* Cuisine */}
                <p className="text-sm w-fit  px-3 py-0.5 bg-orange-100/50 text-orange-500  rounded-full  font-medium">
                  {recipe?.cuisine} Cuisine
                </p>

                {/* Rating */}
                <div className="inline-flex gap-3 items-center  ">
                  <div className="flex text-amber-400">
                    <Star
                      size={20}
                      strokeWidth={1}
                      className="fill-amber-400"
                    />
                    <Star
                      size={20}
                      strokeWidth={1}
                      className="fill-amber-400"
                    />
                    <Star
                      size={20}
                      strokeWidth={1}
                      className="fill-amber-400"
                    />
                    <Star
                      size={20}
                      strokeWidth={1}
                      className="fill-amber-400"
                    />
                    <Star
                      size={20}
                      strokeWidth={1}
                      className="fill-amber-400"
                    />
                  </div>
                  <span className="text-gray-600 font-bold text-lg">
                    {recipe?.rating}
                  </span>
                  <span className="text-gray-500">
                    ({recipe?.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Name  */}
              <h2 className="text-4xl font-bold text-gray-600">
                {recipe?.name}
              </h2>

              <div className=" inline-grid  grid-cols-2 gap-12 my-10 ">
                {/* Prepare  */}
                <div className="flex gap-4 items-center rounded-xl  ">
                  <span className="flex justify-center items-center w-12 h-12 rounded-xl text-orange-500 bg-orange-100/50">
                    <Clock size={25} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-gray-500">Prepare Time</h4>
                    <p className="font-bold text-xl text-gray-600">
                      {recipe?.prepTimeMinutes} mins
                    </p>
                  </div>
                </div>

                {/* Cook  */}
                <div className="flex gap-4 items-center rounded-xl  ">
                  <span className="flex justify-center items-center w-12 h-12 rounded-xl text-orange-500 bg-orange-100/50">
                    <ChefHat size={25} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-gray-500">Cook Time</h4>
                    <p className="font-bold text-xl text-gray-600">
                      {recipe?.cookTimeMinutes} mins
                    </p>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="flex gap-4 items-center rounded-xl ">
                  <span className="flex justify-center items-center w-12 h-12 rounded-xl text-orange-500 bg-orange-100/50">
                    <ChartNoAxesColumnIncreasing size={25} strokeWidth={1.5} />
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-gray-500">Difficulty</h4>
                    <p
                      className={`font-bold text-xs 
                      ${recipe?.difficulty === "Easy" ? "text-green-600 bg-green-100/70 border-green-200" : "text-amber-600 bg-amber-100/70 border-amber-200"}  w-fit px-4 border rounded-full`}
                    >
                      {recipe?.difficulty}
                    </p>
                  </div>
                </div>

                {/* Meal Type */}
                <div className="flex gap-4 items-center rounded-xl ">
                  <span className="flex justify-center items-center w-12 h-12 rounded-xl text-orange-500 bg-orange-100/50">
                    <Soup size={25} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-gray-500">Meal Type</h4>
                    <div
                      className={`font-bold text-base flex gap-1
                      
                       text-gray-600`}
                    >
                      {recipe?.mealType.map((type, index) => (
                        <p key={index}>{type}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image  */}
            <div className="col-span-5 overflow-hidden rounded-3xl">
              {/* Images */}
              <img
                src={recipe?.image}
                alt={recipe?.name}
                className="aspect-[3/2] w-full h-full  object-cover  transition-transform duration-700 hover:scale-105 "
              />
            </div>
          </section>
          {/* Ingredients and Instructions Section  */}
          <div className="grid grid-cols-12 border border-gray-300 my-10 rounded-3xl p-8">
            {/* ingredients */}
            <div className="text-gray-600  space-y-3 col-span-6">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">
                Ingredients
              </h2>
              {recipe?.ingredients.map((ingredient, index) => (
                <p key={index} className="flex items-start gap-3">
                  <span className="inline-flex w-7 h-7 justify-center items-center shrink-0 text-orange-500 bg-orange-100/50 rounded-full">
                    {index + 1}
                  </span>
                  {ingredient}
                </p>
              ))}
            </div>

            {/* instructions */}
            <div className="text-gray-600 space-y-3 col-span-6">
              <h2 className="text-2xl font-bold text-gray-600 mb-6">
                Instructions
              </h2>

              {recipe?.instructions.map((instruction, index) => (
                <p key={index} className="flex items-starts gap-3">
                  <span className="inline-flex justify-center items-center shrink-0 text-orange-600 bg-orange-100/50  w-7 h-7 text-sm font-medium rounded-full">
                    {index + 1}
                  </span>{" "}
                  {instruction}
                </p>
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default RecipeDetail;
