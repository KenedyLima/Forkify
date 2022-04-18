import { generateRecipeId, getJson, timeout } from './helpers';
import { TIMEOUT_SEC } from './config.js';
import Recipe from './recipe.js';
const localStorage = window.localStorage;
let bookmarks = [];
let userGeneratedRecipes = [];

export async function queryRecipeById(id) {
  const bookmarked = isBookmarked(id);
  if (bookmarked) {
    return getBookmarkById(id);
  } else if (getUserGeneratedRecipeById(id)) {
    return getUserGeneratedRecipeById(id);
  }

  try {
    const response = await Promise.race([
      fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await getJson(response);
    const recipe = data.recipe;

    return new Recipe(
      recipe.publisher,
      recipe.ingredients,
      recipe.source_url,
      recipe.recipe_id,
      recipe.image_url,
      recipe.title,
      false,
      true
    );
  } catch (error) {
    throw error;
  }
}

export async function queryRecipes(query) {
  try {
    const response = await Promise.race([
      fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`),
      timeout(TIMEOUT_SEC),
    ]);
    return getJson(response);
  } catch (error) {
    throw error;
  }
}
export function addBookmark(recipe) {
  recipe.bookmarked = true;
  bookmarks.push(recipe);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  return bookmarks;
}

export function removeBookmark(recipe) {
  let position;
  for (let index in bookmarks) {
    if (bookmarks[index].recipe_id === recipe.recipe_id) {
      position = index;
    }
  }
  bookmarks.splice(position, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  return bookmarks;
}

export function getBookmarks() {
  bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (!bookmarks || bookmarks.length < 1) return;
  console.log('Initing bookmarks...', bookmarks);

  return bookmarks;
}

function getBookmarkById(id) {
  let result = null;
  bookmarks.forEach(bookmark => {
    if (bookmark.recipe_id === id) result = bookmark;
  });

  return result;
}

function isBookmarked(id) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  let bookmarked = false;
  if (!bookmarks || !bookmarks.length > 0) return false;
  for (let index in bookmarks) {
    if (bookmarks[index].recipe_id === id) {
      bookmarked = true;
    }
  }
  console.log('IsBookmarked: ', bookmarked);
  return bookmarked;
}

export function submitRecipe(data) {
  const ingredients = getIngredientsArray(data);
  const recipe = new Recipe(
    data.publisher,
    ingredients,
    data.sourceUrl,
    generateRecipeId(),
    data.image,
    data.title,
    false,
    true
  );

  userGeneratedRecipes.push(recipe);
  localStorage.setItem(
    'userGeneratedRecipes',
    JSON.stringify(userGeneratedRecipes)
  );
  return recipe;
}
// Object { title: "dwdw", sourceUrl: "wdwd", image: "dwwd", publisher: "wdwd", cookingTime: "5", servings: "5", "ingredient-1": "wdwd", "ingredient-2": "", "ingredient-3": "", "ingredient-4": "", … }

function getIngredientsArray(obj) {
  const data = Object.entries(obj);
  const filter = data.filter(array => {
    return /ingredient/.test(array[0]);
  });
  const ingredients = filter.map(array => {
    return array[1];
  });
  return ingredients;
}

export function loadUserGeneratedRecipes() {
  userGeneratedRecipes = JSON.parse(
    localStorage.getItem('userGeneratedRecipes')
  );
  if (!userGeneratedRecipes) userGeneratedRecipes = [];
}

export function queryUserGeneratedRecipes(query) {
  if (userGeneratedRecipes && userGeneratedRecipes.length > 0)
    return userGeneratedRecipes.filter(recipe => {
      if (recipe.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
        return true;
    });
}

function getUserGeneratedRecipeById(id) {
  let result;

  if (userGeneratedRecipes && userGeneratedRecipes.length > 0)
    userGeneratedRecipes.forEach(recipe => {
      if (recipe.recipe_id === id) result = recipe;
    });

  return result;
}
