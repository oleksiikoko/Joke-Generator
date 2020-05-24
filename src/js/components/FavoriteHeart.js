class FavoriteHeart {
  constructor(id, onAddToFavorite, onRemoveFromFavorite) {
    this.id = id;
    this.curState = window.favoriteList.inFavorite(id);

    this.onAddToFavorite = onAddToFavorite;
    this.onRemoveFromFavorite = onRemoveFromFavorite;

    this.heart = document.createElement("div");
    this.heart.className = "heart";
    if (window.favoriteList.inFavorite(this.id)) {
      this.heart.innerHTML = `<img class="heart-${id}" src="src/assets/img/heart.svg" alt="heart" />`;
    } else {
      this.heart.innerHTML = `<img class="heart-${id}" src="src/assets/img/emptyHeart.svg" alt="emptyHeart" />`;
    }

    this.heart.addEventListener("click", () => {
      this.curState ? this.disable() : this.enable();
    });
  }

  disable() {
    [document.getElementsByClassName(`heart-${this.id}`)].forEach((element) => {
      element[0].setAttribute("src", "src/assets/img/emptyHeart.svg");
    });
    this.onRemoveFromFavorite(this.id);
    this.curState = !this.curState;
  }

  enable() {
    [document.getElementsByClassName(`heart-${this.id}`)].forEach((element) => {
      element[0].setAttribute("src", "src/assets/img/heart.svg");
    });
    this.onAddToFavorite(this.id);
    this.curState = !this.curState;
  }

  get heartNode() {
    return this.heart;
  }
}

export default FavoriteHeart;
