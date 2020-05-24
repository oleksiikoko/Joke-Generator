class GetJokeButton {
  constructor(onClick) {
    this.button = document.createElement("input");
    this.button.className = "search__button";
    this.button.type = "button";
    this.button.id = "search__button";
    this.button.value = "Get a joke";

    this.button.addEventListener("click", (event) => {
      onClick();
    });
  }

  get buttonNode() {
    return this.button;
  }

  // visible() {
  //   document.getElementById("search__button").style.display = "block";
  // }

  // unvisible() {
  //   document.getElementById("search__button").style.display = "none";
  // }
}

export default GetJokeButton;
