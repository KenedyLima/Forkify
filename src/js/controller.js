import { getRecipeIdFromHash, handleActiveRecipe } from './helpers.js';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
// https://forkify-api.herokuapp.com/v2

if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////
async function controlRecipes() {
  const recipeId = getRecipeIdFromHash();
  let recipe;
  if (!recipeId) return;

  try {
    //1)Render Spinner
    recipeView.renderSpinner();

    //2)Get Recipe Data From Model
    recipe = await model.queryRecipeById(recipeId);

    //3)Render Recipe Data On Recipe View
    recipeView.render(recipe);
    recipeView.handleBookmarks(controlBookmarks);
  } catch (error) {
    console.log(error);

    recipeView.renderErrorMessage();
  }
}

async function controlQueries() {
  try {
    //1)Get query from search field
    const query = searchView.getquery();
    if (query === '') throw new Error('Search field is empty');
    resultsView.renderSpinner();

    //2)queryRecipes from API
    const data = await model.queryRecipes(query);
    const userData = model.queryUserGeneratedRecipes(query);
    const recipes = [];
    userData.forEach(recipe => recipes.push(recipe));
    if (data.recipes) {
      data.recipes.forEach(recipe => recipes.push(recipe));
    }
    if (!recipes.length > 0) throw new Error();
    //3)Render recipes in resultsView
    resultsView.render(recipes);

    //4)Handle active recipe
    handleActiveRecipe();
  } catch (error) {
    console.log(error);

    resultsView.renderErrorMessage();
  }
}

function controlBookmarks(recipe, bookmarked) {
  let bookmarks;
  if (bookmarked) {
    bookmarks = model.addBookmark(recipe);
  } else {
    bookmarks = model.removeBookmark(recipe);
  }
  bookmarkView.render(bookmarks);
  handleActiveRecipe();
}

function controlRecipeUploads(data) {
  const recipe = model.submitRecipe(data);
  recipeView.render(recipe);
}

(async function init() {
  bookmarkView.render(model.getBookmarks());
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlQueries);
  addRecipeView.handleAddRecipe();
  addRecipeView.handleCloseButton();
  addRecipeView.handleRecipeUpload(controlRecipeUploads);
  handleActiveRecipe();
  model.loadUserGeneratedRecipes();
})();
