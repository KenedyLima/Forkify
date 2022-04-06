import { getRecipeIdFromHash } from './helpers.js';
import * as manager from './manager.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
// https://forkify-api.herokuapp.com/v2

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////
async function controlRecipes() {
  const recipeId = getRecipeIdFromHash();

  if (!recipeId) return;

  try {
    recipeView.renderSpinner();
    const recipe = await manager.queryRecipeById(recipeId);
    recipeView.render(recipe);
  } catch (error) {
    recipeView.renderErrorMessage();
  }
}

async function controlQueries() {
  try {
    //1)Get query from search field
    const query = searchView.getquery();
    resultsView.renderSpinner();
    //2)queryRecipes from API
    const recipes = await manager.queryRecipes(query);
    //3)Render recipes in resultsView
    resultsView.render(recipes);
  } catch (error) {
    resultsView.renderErrorMessage();
  }
}
(function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlQueries);
})();
