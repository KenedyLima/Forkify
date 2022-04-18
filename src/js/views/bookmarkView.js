import * as previewGenerator from './recipePreviewGenerator.js';
import {
  updateBookmarkContainerStyles,
  addActiveClassToLastBookmark,
} from '../helpers.js';
import View from './view.js';
class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _message = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  render(bookmarks) {
    const html = previewGenerator.generateRecipePreviewHTML(bookmarks);
    this._clean();
    this._parentElement.insertAdjacentHTML('afterbegin', html);

    //Rendering message if theres no bookmark
    if (!bookmarks || bookmarks.length === 0)
      this.renderErrorMessage('icon-smile', this._message);

    //Checking bookmark length to implement the scroll bar
    if (bookmarks && bookmarks.length >= 5) {
      updateBookmarkContainerStyles(true);
    } else {
      updateBookmarkContainerStyles(false);
    }
    //adding active class to the last bookmark added
    let count = 0;
    if (count != 0) addActiveClassToLastBookmark();
    count = count + 1;
    console.log(count);
  }
}

export default new BookmarkView();
