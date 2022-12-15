async function e(e){const n=await e;return await n.json()}function n(e){return new Promise((function(n,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${e} second`))}),1e4*e)}))}function t(){const e=document.querySelectorAll(".preview");["load","hashchange"].forEach((n=>{window.addEventListener(n,(function(){e.forEach((e=>{e.classList.remove("preview__link--active"),e.children[0].getAttribute("href")===window.location.hash&&e.classList.add("preview__link--active")}))}))}))}function s(){const e=document.querySelector(".bookmarks").querySelectorAll(".preview"),n=e[e.length-1];console.log(n)}function r(e){height="46rem",overflow="scroll",e||(height="",overflow="");const n=document.querySelector(".bookmarks");n.style.height=height,n.style.overflow=overflow}class i{constructor(e,n,t,s,r,i,a,o,c=50){this.publisher=e,this.ingredients=n,this.source_url=t,this.recipe_id=s,this.image_url=r,this.title=i,this.bookmarked=a,this.userGenerated=o,this.cookingTime=c}setBookmarked(e){this.bookmarked=e}}const a=window.localStorage;let o=[],c=[];async function l(t){const s=function(e){const n=JSON.parse(a.getItem("bookmarks"));let t=!1;if(!n||!n.length>0)return!1;for(let s in n)n[s].recipe_id===e&&(t=!0);return console.log("IsBookmarked: ",t),t}(t);if(s)return function(e){let n=null;return o.forEach((t=>{t.recipe_id===e&&(n=t)})),n}(t);if(h(t))return h(t);try{const s=await Promise.race([fetch(`https://forkify-api.herokuapp.com/api/get?rId=${t}`),n(10)]),r=(await e(s)).recipe;return new i(r.publisher,r.ingredients,r.source_url,r.recipe_id,r.image_url,r.title,!1,!0)}catch(e){throw e}}function d(){if(o=JSON.parse(a.getItem("bookmarks")),console.log("after json: ",o),o&&!(o.length<1))return console.log("Initing bookmarks...",o),o;o=[]}function u(e){const n=function(e){const n=Object.entries(e),t=n.filter((e=>/ingredient/.test(e[0]))),s=t.map((e=>e[1]));return s}(e),t=new i(e.publisher,n,e.sourceUrl,Date.now().toString(36),e.image,e.title,!1,!0);return c.push(t),a.setItem("userGeneratedRecipes",JSON.stringify(c)),t}function h(e){let n;return c&&c.length>0&&c.forEach((t=>{t.recipe_id===e&&(n=t)})),n}class g{_parentElement="";_message="";_errorMessage="";_clean(){this._parentElement.innerHTML=""}renderSpinner(){this._clean();this._parentElement.insertAdjacentHTML("afterbegin",'\n            <div class="spinner">\n              <svg>\n                <use href="icons.21bad73c.svg#icon-loader"></use>\n              </svg>\n            </div>\n          ')}renderErrorMessage(e="icon-alert-triangle",n=this._errorMessage){const t=`<div class="error">\n        <div>\n          <svg>\n            <use href="icons.21bad73c.svg#${e}"></use>\n          </svg>\n        </div>\n        <p>${n}</p>\n      </div>`;this._clean(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var _=new class extends g{_parentElement=document.querySelector(".recipe");_errorMessage="Could not find a recipe with this id. Please try another one!";_recipe;_bookmarkButton;render(e){this._recipe||(this._recipe=e);const n=e.bookmarked?"icons.21bad73c.svg#icon-bookmark-fill":"icons.21bad73c.svg#icon-bookmark",t=`  <figure class="recipe__fig">\n    <img src="${e.image_url}" alt="Tomato" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${e.title}</span>\n    </h1>\n  </figure>\n  \n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="icons.21bad73c.svg#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">50</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="icons.21bad73c.svg#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">4</span>\n      <span class="recipe__info-text">servings</span>\n  \n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="icons.21bad73c.svg#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings">\n          <svg ">\n            <use href="icons.21bad73c.svg#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n  \n    <div class="recipe__user-generated" ${e.userGenerated?"":"style = 'background-color:#f9f5f3;'"}>\n    ${e.userGenerated?'<svg>\n    <use href="icons.21bad73c.svg#icon-user"></use>\n  </svg>':""}\n    </div>\n    <button class="btn--round">\n      <svg class="bookmark--icon ${e.bookmarked?"bookmarked":""}">\n        <use href="${n}"></use>\n      </svg>\n    </button>\n  </div>\n  \n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n      ${this._generateIngredientsHTML(e.ingredients)}\n    </ul>\n  </div>\n  \n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${e.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${e.source_url}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="icons.21bad73c.svg#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n  `;this._clean(),this._parentElement.insertAdjacentHTML("afterbegin",t),this._recipe=e,this._bookmarkButton=document.querySelector(".btn--round")}addHandlerRender(e){["load","hashchange"].forEach((n=>{window.addEventListener(n,(function(n){e(n)}))}))}handleBookmarks(e){const n=this._recipe;this._bookmarkButton.addEventListener("click",(function(t){const s=t.target.closest(".btn--round");if(s){const t=s.children[0];let r,i=!1;t.classList.contains("bookmarked")?r="icons.21bad73c.svg#icon-bookmark":(r="icons.21bad73c.svg#icon-bookmark-fill",i=!0),t.classList.toggle("bookmarked"),t.children[0].setAttribute("href",r),e(n,i)}}))}_generateIngredientsHTML(e){return e.map((function(e){return`<li class="recipe__ingredient">\n            <svg class="recipe__icon">\n              <use href="icons.21bad73c.svg#icon-check"></use>\n            </svg>\n            <div class="recipe__description">\n         \n              ${e}\n            </div>\n          </li>`})).join("")}};var p=new class extends g{_parentElement=document.querySelector(".search");addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault(),e()}))}getquery(){const e=this._parentElement.querySelector(".search__field").value;return this._parentElement.querySelector(".search__field").value="",e}};function f(e){return e?e.map((e=>`<li class="preview">\n          <a class="preview__link " href="#${e.recipe_id}">\n            <figure class="preview__fig">\n              <img src="${e.image_url}" alt="Test" />\n            </figure>\n            <div class="preview__data">\n              <h4 class="preview__title">${e.title}</h4>\n              <p class="preview__publisher">${e.publisher}</p>\n            </div>\n          </a>\n        </li>`)).join(""):""}var m=new class extends g{_parentElement=document.querySelector(".results");_errorMessage="Could not find any recipe for that query. Please try another one ;)";_paginationButtons="";_recipes;_totalPages;_currentPage;render(e){let n="";this._recipes=e,this._totalPages=this._calculatePagination(),!this._totalPages>1?n=f(e):(n=this._getCurrentRecipesHTML(),this._generatePaginationButtons(),this._handlePagination()),this._clean(),this._parentElement.insertAdjacentHTML("afterbegin",n)}_calculatePagination(){return Math.ceil(this._recipes.length/10)}_handlePagination(){const e=this;this._paginationButtons.forEach((n=>{n.addEventListener("click",(function(n){n.target.closest(".btn--inline").classList.contains("pagination__btn--prev")?e._currentPage--:n.target.closest(".btn--inline").classList.contains("pagination__btn--next")&&e._currentPage++,e.render(e._recipes)}))}))}_generatePaginationButtons(){const e=document.querySelector(".pagination");let n="";const t=`\n    <button class="btn--inline pagination__btn--next">\n      <span>Page ${this._currentPage+1}</span>\n      <svg class="search__icon">\n        <use href="icons.21bad73c.svg#icon-arrow-right"></use>\n      </svg>\n    </button>`,s=`<button class="btn--inline pagination__btn--prev">\n    <svg class="search__icon">\n      <use href="icons.21bad73c.svg#icon-arrow-left"></use>\n    </svg>\n    <span>Page ${this._currentPage-1}</span>\n  </button>`;n=1===this._currentPage?t:this._currentPage===this._totalPages?s:`${s}${t}`,e.innerHTML="",e.insertAdjacentHTML("afterbegin",n),this._paginationButtons=document.querySelectorAll(".btn--inline")}_getCurrentRecipesHTML(){this._currentPage||(this._currentPage=1);const e=10*this._currentPage-10,n=10*this._currentPage;return f(this._recipes.slice(e,n))}renderErrorMessage(){super.renderErrorMessage(),document.querySelector(".pagination").innerHTML=""}};var v=new class extends g{_parentElement=document.querySelector(".bookmarks__list");_message="No bookmarks yet. Find a nice recipe and bookmark it :)";render(e){const n=f(e);this._clean(),this._parentElement.insertAdjacentHTML("afterbegin",n),e&&0!==e.length||this.renderErrorMessage("icon-smile",this._message),e&&e.length>=5?r(!0):r(!1);let t=0;0!=t&&s(),t+=1,console.log(t)}};var b=new class{_parentElement=document.querySelector(".add-recipe-window");handleAddRecipe(){const e=document.querySelector(".nav__btn--add-recipe"),n=this._parentElement,t=document.querySelector(".overlay");e.addEventListener("click",(function(e){n.classList.toggle("hidden"),t.classList.toggle("hidden")}))}handleCloseButton(){const e=document.querySelector(".btn--close-modal"),n=this._parentElement,t=document.querySelector(".overlay");[e,t].forEach((e=>{e.addEventListener("click",(function(e){n.classList.toggle("hidden"),t.classList.toggle("hidden")}))}))}_clearInputs(){this._parentElement.querySelectorAll("input").forEach((e=>{e.value=""}))}handleRecipeUpload(e){const n=this._parentElement,t=document.querySelector(".overlay"),s=this._parentElement;n.querySelector(".upload").addEventListener("submit",(function(n){const r=Object.fromEntries(new FormData(n.target).entries());n.preventDefault(),s.classList.add("hidden"),t.classList.add("hidden"),e(r)}))}};async function k(){const e=window.location.hash.substring(1);let n;if(e)try{_.renderSpinner(),n=await l(e),_.render(n),_.handleBookmarks(y)}catch(e){console.log(e),_.renderErrorMessage()}}async function w(){try{const s=p.getquery();if(""===s)throw new Error("Search field is empty");m.renderSpinner();const r=await async function(t){try{return e(await Promise.race([fetch(`https://forkify-api.herokuapp.com/api/search?q=${t}`),n(10)]))}catch(e){throw e}}(s);console.log(r);const i=function(e){if(c&&c.length>0)return c.filter((n=>{if(n.title.toLowerCase().indexOf(e.toLowerCase())>-1)return!0}))}(s),a=[];if(i&&i.forEach((e=>a.push(e))),r.recipes&&r.recipes.forEach((e=>a.push(e))),!a.length>0)throw new Error;m.render(a),t()}catch(e){console.log(e),m.renderErrorMessage()}}function y(e,n){let s;s=n?function(e){return e.bookmarked=!0,console.log(o),o.push(e),a.setItem("bookmarks",JSON.stringify(o)),o}(e):function(e){let n;for(let t in o)o[t].recipe_id===e.recipe_id&&(n=t);return o.splice(n,1),a.setItem("bookmarks",JSON.stringify(o)),o}(e),v.render(s),t()}function E(e){const n=u(e);_.render(n)}(async function(){console.log(d()),v.render(d()),_.addHandlerRender(k),p.addHandlerSearch(w),b.handleAddRecipe(),b.handleCloseButton(),b.handleRecipeUpload(E),t(),c=JSON.parse(a.getItem("userGeneratedRecipes")),c||(c=[])})();
//# sourceMappingURL=index.d90efabc.js.map