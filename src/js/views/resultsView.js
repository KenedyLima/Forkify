import View from './view.js';
import * as previewGenerator from './recipePreviewGenerator.js';
class ResultsView extends View {
  //'Comming' from View
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'Could not find any recipe for that query. Please try another one ;)';

  _paginationButtons = '';
  _recipes;
  _totalPages;
  _currentPage;

  render(recipes) {
    let html = '';

    this._recipes = recipes;
    this._totalPages = this._calculatePagination();
    //1) Case the recipe array length is lesser than 10
    if (!this._totalPages > 1) {
      html = previewGenerator.generateRecipePreviewHTML(recipes);
      //2) Case recipe array length is bigger than 10
    } else {
      html = this._getCurrentRecipesHTML();
      this._generatePaginationButtons();
      this._handlePagination();
    }
    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _calculatePagination() {
    const pages = Math.ceil(this._recipes.length / 10);
    return pages;
  }

  _handlePagination() {
    const resultsView = this;
    this._paginationButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        if (
          e.target
            .closest('.btn--inline')
            .classList.contains('pagination__btn--prev')
        ) {
          resultsView._currentPage--;
        } else if (
          e.target
            .closest('.btn--inline')
            .classList.contains('pagination__btn--next')
        ) {
          resultsView._currentPage++;
        }
        resultsView.render(resultsView._recipes);
      });
    });
  }

  _generatePaginationButtons() {
    const pagination = document.querySelector('.pagination');
    let html = '';

    const next = `
    <button class="btn--inline pagination__btn--next">
      <span>Page ${this._currentPage + 1}</span>
      <svg class="search__icon">
        <use href="icons.21bad73c.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
    const prev = `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="icons.21bad73c.svg#icon-arrow-left"></use>
    </svg>
    <span>Page ${this._currentPage - 1}</span>
  </button>`;
    if (this._currentPage === 1) {
      html = next;
    } else if (this._currentPage === this._totalPages) {
      html = prev;
    } else {
      html = `${prev}${next}`;
    }

    pagination.innerHTML = '';
    pagination.insertAdjacentHTML('afterbegin', html);

    this._paginationButtons = document.querySelectorAll('.btn--inline');
  }

  _getCurrentRecipesHTML() {
    if (!this._currentPage) this._currentPage = 1;
    const start = this._currentPage * 10 - 10;
    const end = this._currentPage * 10;
    const html = previewGenerator.generateRecipePreviewHTML(
      this._recipes.slice(start, end)
    );
    return html;
  }

  renderErrorMessage() {
    super.renderErrorMessage();
    document.querySelector('.pagination').innerHTML = '';
  }
}
export default new ResultsView();
