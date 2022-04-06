import * as model from './model.js';
import { getJson } from './helpers.js';
class Recipe {
  constructor(id, title, publisher, source, imageUrl, ingredients) {
    (this.id = id),
      (this.title = title),
      (this.publisher = publisher),
      (this.source = source),
      (this.imageUrl = imageUrl),
      (this.ingredients = ingredients);
  }
}

export async function queryRecipeById(id) {
  try {
    const data = await getJson(model.queryRecipeById(id));
    const recipe = createRecipe([data.recipe]);
    return recipe[0];
  } catch (error) {
    throw error;
  }
}

export async function queryRecipes(query) {
  try {
    const result = await getJson(model.queryRecipes(query));
    const recipes = createRecipe(result.recipes);
    return recipes;
  } catch (error) {
    throw error;
  }
}

function createRecipe(recipes) {
  if (!recipes) return;
  const result = recipes.map(recipe => {
    return new Recipe(
      recipe.recipe_id,
      recipe.title,
      recipe.publisher,
      recipe.source_url,
      recipe.image_url,
      recipe.ingredients
    );
  });
  return result;
}
