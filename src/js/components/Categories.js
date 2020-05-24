class Categories {
  constructor(categories) {
    this.curCategory = categories[0];

    this.categoriesContainer = document.createElement("div");
    this.categoriesContainer.className = "categories__container";
    this.categoriesContainer.id = "categories__container";

    this.categoriesUl = document.createElement("ul");
    this.categoriesUl.className = "categories";

    categories.map((item) => {
      let categoryLi = document.createElement("li");
      categoryLi.innerHTML = item;
      categoryLi.addEventListener("click", () => {
        this.curCategory = item;
      });

      this.categoriesUl.appendChild(categoryLi);
    });
    this.categoriesContainer.appendChild(this.categoriesUl);
  }

  get categoriesNode() {
    return this.categoriesContainer;
  }

  get category() {
    return this.curCategory;
  }

  visible() {
    document.getElementById("categories__container").style.display = "block";
  }

  unvisible() {
    document.getElementById("categories__container").style.display = "none";
  }
}

export default Categories;
