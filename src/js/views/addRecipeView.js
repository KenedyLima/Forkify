class AddRecipeView {
  _parentElement = document.querySelector('.add-recipe-window');

  handleAddRecipe() {
    const button = document.querySelector('.nav__btn--add-recipe');
    const addRecipeWindow = this._parentElement;
    const overlay = document.querySelector('.overlay');
    button.addEventListener('click', function (e) {
      addRecipeWindow.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    });
  }

  handleCloseButton() {
    const closeButton = document.querySelector('.btn--close-modal');
    const form = this._parentElement;
    const overlay = document.querySelector('.overlay');
    [closeButton, overlay].forEach(element => {
      element.addEventListener('click', function (e) {
        form.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
      });
    });
  }

  _clearInputs() {
    const inputs = this._parentElement.querySelectorAll('input');

    inputs.forEach(input => {
      input.value = '';
    });
  }
  handleRecipeUpload(handler) {
    const addRecipeWindow = this._parentElement;
    const overlay = document.querySelector('.overlay');
    const form = this._parentElement;
    addRecipeWindow
      .querySelector('.upload')
      .addEventListener('submit', function (e) {
        const data = Object.fromEntries(new FormData(e.target).entries());
        e.preventDefault();
        form.classList.add('hidden');
        overlay.classList.add('hidden');
        handler(data);
      });
  }
}

export default new AddRecipeView();
