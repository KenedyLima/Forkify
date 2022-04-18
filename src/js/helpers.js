export function getRecipeIdFromHash() {
  return window.location.hash.substring(1);
}

export async function getJson(response) {
  const result = await response;
  const data = await result.json();
  return data;
}

export function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 10000);
  });
}

export function handleActiveRecipe() {
  const previews = document.querySelectorAll('.preview');
  ['load', 'hashchange'].forEach(type => {
    window.addEventListener(type, function () {
      previews.forEach(preview => {
        preview.classList.remove('preview__link--active');
        if (preview.children[0].getAttribute('href') === window.location.hash) {
          preview.classList.add('preview__link--active');
        }
      });
    });
  });
}

export function addActiveClassToLastBookmark() {
  const bookmarkContainer = document.querySelector('.bookmarks');
  const previews = bookmarkContainer.querySelectorAll('.preview');

  const lastElement = previews[previews.length - 1];
  console.log(lastElement);
}
export function updateBookmarkContainerStyles(update) {
  height = '46rem';
  overflow = 'scroll';
  if (!update) {
    height = '';
    overflow = '';
  }
  const bookmarkContainer = document.querySelector('.bookmarks');
  bookmarkContainer.style.height = height;
  bookmarkContainer.style.overflow = overflow;
}

export function generateRecipeId() {
  return Date.now().toString(36);
}
// updateServings(updateTo, recipeServings = 4) {
//   /*Creates the fraction that each ingredient is going to be multiplied by*/
//   const multiplyBy = new Fraction(updateTo, recipeServings);
//   console.log('MultiplyBy: ', multiplyBy);

//   let result;
//   const amountsArray = this._getAmounts(this._recipe.ingredients);

//   /*Loop through  amounts array and peform calculations*/
//   result = amountsArray.map(array => {
//     const arrayLength = array.length;
//     let fraction = null;
//     let amount = '';
//     /* */
//     if (arrayLength === 1) {
//       fraction = new Fraction(array[0]);
//       amount = fraction.mul(multiplyBy);
//       if (this._isWholeInteger(fraction)) {
//         amount = fraction.n / fraction.d;
//       }
//     } else {
//       array.forEach(element => {});
//     }

//     return result;
//   });
// }

/*checks whether a fraction results a whole integer or not */
// _isWholeInteger(fraction) {
//   const string = String(fraction.n / fraction.d);
//   if (string.indexOf('.') > -1) {
//     return false;
//   }
//   return true;
// }

// _getAmounts(array) {
//   let temp = null;

//   /*Split the array of strings*/
//   array = this._splitArrayOfStrings(array, ' ');
//   /*Now array variable is an array of arrays */

//   /* Check for elements in the pool of arrays that has any number  : array*/
//   temp = array
//     .map(array => {
//       return this._checkForNumber(array);
//     })
//     /*Check between the elements for '(' and removes it  : array*/
//     .map(array => {
//       return array.map(el => {
//         return el.split('(').join('');
//       });
//     });
//   /* Check for elements in the pool of arrays has hifen and takes only the number : array*/
//   temp.forEach(array => {
//     array = this._checkForLetter(array);
//   });

//   return temp;
// }

// _splitArrayOfStrings(array, regex) {
//   return array.map(string => {
//     return string.split(regex);
//   });
// }

// _checkForLetter(array) {
//   array.forEach(element => {
//     if (/[a-zA-Z]/.test(element)) {
//       const wordsArray = this._splitArrayOfStrings([element], '-');
//       console.log('wordsArray', wordsArray);

//       element = wordsArray.filter(word => {
//         return !Number.isNaN(Number(word));
//       });
//       console.log('Element', element);
//     }
//   });
// }

// _checkForNumber(array) {
//   const result = array.filter(element => {
//     return /\d/.test(element);
//   });
//   return result;
// }
