import View from './view.js';
import Fraction from 'fraction.js';
class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage =
    'Could not find a recipe with this id. Please try another one!';
  _recipe;
  _bookmarkButton;
  render(recipe) {
    if (!this._recipe) this._recipe = recipe;

    const bookmarkIcon = recipe.bookmarked
      ? 'icons.21bad73c.svg#icon-bookmark-fill'
      : 'icons.21bad73c.svg#icon-bookmark';
    const userGeneratedHTML = `<svg>
    <use href="icons.21bad73c.svg#icon-user"></use>
  </svg>`;
    const html = `  <figure class="recipe__fig">
    <img src="${recipe.image_url}" alt="Tomato" class="recipe__img" />
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
          <svg ">
            <use href="icons.21bad73c.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
  
    <div class="recipe__user-generated" ${
      recipe.userGenerated ? '' : "style = 'background-color:#f9f5f3;'"
    }>
    ${recipe.userGenerated ? userGeneratedHTML : ''}
    </div>
    <button class="btn--round">
      <svg class="bookmark--icon ${recipe.bookmarked ? 'bookmarked' : ''}">
        <use href="${bookmarkIcon}"></use>
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
      href="${recipe.source_url}"
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
    this._recipe = recipe;
    this._bookmarkButton = document.querySelector('.btn--round');
  }

  addHandlerRender(handler) {
    ['load', 'hashchange'].forEach(type => {
      window.addEventListener(type, function (e) {
        handler(e);
      });
    });
  }

  handleBookmarks(handler) {
    const recipe = this._recipe;

    this._bookmarkButton.addEventListener('click', function (e) {
      const bookmarkButton = e.target.closest('.btn--round');
      if (bookmarkButton) {
        const icon = bookmarkButton.children[0];
        let href;
        let bookmarked = false;

        if (icon.classList.contains('bookmarked')) {
          href = 'icons.21bad73c.svg#icon-bookmark';
        } else {
          href = 'icons.21bad73c.svg#icon-bookmark-fill';
          bookmarked = true;
        }

        icon.classList.toggle('bookmarked');
        icon.children[0].setAttribute('href', href);
        handler(recipe, bookmarked);
      }
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
