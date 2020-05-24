import FavoriteHeart from "./FavoriteHeart";

class Favorite {
  constructor(domObjectForInsert) {
    this.ulContainer = document.createElement("ul");
    this.ulContainer.id = "favorite-ul";
    domObjectForInsert.appendChild(this.ulContainer);

    this.ulContainer = document.getElementById("favorite-ul");
  }

  onRemoveFromFavorite(id) {
    window.favoriteList.removeFavorite(id);
    this.render();
  }

  render() {
    this.ulContainer.innerHTML = "";
    window.favoriteList.getList().map((item) => {
      let li = document.createElement("li");
      li.className = "joke joke--favorite";

      let heart = new FavoriteHeart(
        item.id,
        undefined,
        this.onRemoveFromFavorite.bind(this)
      ).heartNode;

      let rawContainer = document.createElement("div");
      rawContainer.className = "raw-container";
      rawContainer.innerHTML = `<div class="joke__icon joke__icon--favorite">
        <img src="src/assets/img/message.svg" alt="message" />
        </div>`;

      let jokeBody = document.createElement("div");
      jokeBody.className = "joke__body";

      let jokeId = document.createElement("div");
      jokeId.className = "joke__id";
      jokeId.innerHTML = `ID:
        <a href="${item.url}"
          >${item.id}<img
            src="src/assets/img/link.svg"
            alt="link"
        /></a>`;

      let jokeText = document.createElement("div");
      jokeText.className = "joke__text joke__text--favorite";
      jokeText.innerHTML = item.value;

      let jokeFooter = document.createElement("div");
      jokeFooter.className = "joke__footer joke__footer--favorite";
      let jokeUpdated = document.createElement("div");
      jokeUpdated.className = "joke__updated";
      jokeUpdated.innerHTML = `Last update: ${item.created_at}`;

      jokeFooter.appendChild(jokeUpdated);

      jokeBody.appendChild(jokeId);
      jokeBody.appendChild(jokeText);
      jokeBody.appendChild(jokeFooter);

      rawContainer.appendChild(jokeBody);

      li.appendChild(heart);
      li.appendChild(rawContainer);

      this.ulContainer.appendChild(li);
    });
  }
}

export default Favorite;
