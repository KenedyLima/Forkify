export function generateRecipePreviewHTML(recipes) {
  if (!recipes) return '';
  return recipes
    .map(recipe => {
      return `<li class="preview">
          <a class="preview__link " href="#${recipe.recipe_id}">
            <figure class="preview__fig">
              <img src="${recipe.image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${recipe.title}</h4>
              <p class="preview__publisher">${recipe.publisher}</p>
            </div>
          </a>
        </li>`;
    })
    .join('');
}
