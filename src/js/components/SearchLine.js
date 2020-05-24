class SearchLine {
  constructor() {
    this.curValue = "";
    this.line = document.createElement("input");
    this.line.className = "search__line";
    this.line.type = "text";
    this.line.id = "search__line";
    this.line.placeholder = "Free text search";

    this.line.addEventListener("change", (event) => {
      this.curValue = event.target.value;
    });
  }

  get lineNode() {
    return this.line;
  }

  get value() {
    return this.curValue;
  }

  visible() {
    document.getElementById("search__line").style.display = "block";
  }

  unvisible() {
    document.getElementById("search__line").style.display = "none";
  }
}

export default SearchLine;
