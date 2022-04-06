import { timeout } from './helpers';
import { TIMEOUT_SEC } from './config.js';
export async function queryRecipeById(id) {
  try {
    const response = await Promise.race([
      fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`),
      timeout(TIMEOUT_SEC),
    ]);
    return response;
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
    return response;
  } catch (error) {
    throw error;
  }
}
