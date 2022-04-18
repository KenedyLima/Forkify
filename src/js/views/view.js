export default class View {
  _parentElement = '';
  _message = '';
  _errorMessage = '';

  _clean() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    this._clean();
    const html = `
            <div class="spinner">
              <svg>
                <use href="icons.21bad73c.svg#icon-loader"></use>
              </svg>
            </div>
          `;
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
  renderErrorMessage(
    icon = 'icon-alert-triangle',
    message = this._errorMessage
  ) {
    const html = `<div class="error">
        <div>
          <svg>
            <use href="icons.21bad73c.svg#${icon}"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
