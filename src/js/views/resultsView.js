import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'Could not find any recipe for that query. Please try another one ;)';

  render(recipes) {
    const html = this._generateResultsHTML(recipes);
    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _generateResultsHTML(recipes) {
    return recipes
      .map(recipe => {
        return `<li class="preview">
            <a class="preview__link " href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.imageUrl}" alt="Test" />
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
}

export default new ResultsView();
