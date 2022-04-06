import View from './view.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage =
    'Could not find a recipe with this id. Please try another one!';

  render(recipe) {
    const html = `  <figure class="recipe__fig">
    <img src="${recipe.imageUrl}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${recipe.title}</span>
    </h1>
  </figure>
  
  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${50}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="icons.21bad73c.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">4</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="icons.21bad73c.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="icons.21bad73c.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated">

    </div>
    <button class="btn--round">
      <svg class="">
        <use href="icons.21bad73c.svg#icon-bookmark"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._generateIngredientsHTML(recipe.ingredients)}
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        recipe.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${recipe.source}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="icons.21bad73c.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;
    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  addHandlerRender(handler) {
    ['load', 'hashchange'].forEach(type => {
      window.addEventListener(type, handler);
    });
  }

  _generateIngredientsHTML(ingredients) {
    const html = ingredients
      .map(function (ingredient) {
        return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="icons.21bad73c.svg#icon-check"></use>
            </svg>
            <div class="recipe__description">
         
              ${ingredient}
            </div>
          </li>`;
      })
      .join('');
    return html;
  }
}
export default new RecipeView();
