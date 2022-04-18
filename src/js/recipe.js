export default class Recipe {
  constructor(
    publisher,
    ingredients,
    source_url,
    recipe_id,
    image_url,
    title,
    bookmarked,
    userGenerated,
    cookingTime = 50
  ) {
    (this.publisher = publisher),
      (this.ingredients = ingredients),
      (this.source_url = source_url),
      (this.recipe_id = recipe_id),
      (this.image_url = image_url),
      (this.title = title),
      (this.bookmarked = bookmarked),
      (this.userGenerated = userGenerated),
      (this.cookingTime = cookingTime);
  }

  setBookmarked(bookmarked) {
    this.bookmarked = bookmarked;
  }
}
