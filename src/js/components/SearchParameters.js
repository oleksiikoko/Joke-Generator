import Checkbox from "./Checkbox";
import Categories from "./Categories";
import SearchLine from "./SearchLine";
import GetJokeButton from "./GetJokeButton";

class SearchParameters {
  constructor(domObjectForInsert, onSearch, categories) {
    this.curCheckboxItem = 0;
    this.onSearch = onSearch;

    this.randomCheckbox = new Checkbox(
      "Random",
      () => (this.checkbox = 0),
      true
    );
    this.fromCategoriesCheckbox = new Checkbox(
      "From categories",
      () => (this.checkbox = 1)
    );
    this.categories = new Categories(categories);
    this.searchCheckbox = new Checkbox("Search", () => (this.checkbox = 2));
    this.searchLine = new SearchLine();
    this.getJokeButton = new GetJokeButton(this.search.bind(this));

    domObjectForInsert.appendChild(this.randomCheckbox.checkboxNode);
    domObjectForInsert.appendChild(this.fromCategoriesCheckbox.checkboxNode);
    domObjectForInsert.appendChild(this.categories.categoriesNode);
    domObjectForInsert.appendChild(this.searchCheckbox.checkboxNode);
    domObjectForInsert.appendChild(this.searchLine.lineNode);
    domObjectForInsert.appendChild(this.getJokeButton.buttonNode);
  }

  set checkbox(index) {
    this.curCheckboxItem = index;

    switch (this.curCheckboxItem) {
      case 0:
        this.fromCategoriesCheckbox.setUncheked();
        this.categories.unvisible();
        this.searchCheckbox.setUncheked();
        this.searchLine.unvisible();
        break;
      case 1:
        this.randomCheckbox.setUncheked();
        this.categories.visible();
        this.searchCheckbox.setUncheked();
        this.searchLine.unvisible();
        break;
      case 2:
        this.randomCheckbox.setUncheked();
        this.fromCategoriesCheckbox.setUncheked();
        this.categories.unvisible();
        this.searchLine.visible();
        break;
    }
  }

  search() {
    switch (this.curCheckboxItem) {
      case 0:
        this.onSearch("/random");
        break;
      case 1:
        this.onSearch(`/random?category=${this.categories.category}`);
        break;
      case 2:
        this.onSearch(`/search?query=${this.searchLine.value}`);
        break;
    }
  }
}

export default SearchParameters;
