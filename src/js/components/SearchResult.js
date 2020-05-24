class SearchResult {
  constructor(domObjectForInsert, data) {
    this.ulContainer = document.createElement("ul");

    data.map((item) => {
      let li = document.createElement("li");
      li.className = "joke";

      let heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML =
        '<img src="src/assets/img/emptyHeart.svg" alt="emptyHeart" />';

      let rawContainer = document.createElement("div");
      rawContainer.className = "raw-container";
      rawContainer.innerHTML = `<div class="joke__icon">
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
      jokeText.className = "joke__text";
      jokeText.innerHTML = item.value;

      let jokeFooter = document.createElement("div");
      jokeFooter.className = "joke__footer";
      let jokeUpdated = document.createElement("div");
      jokeUpdated.className = "joke__updated";
      jokeUpdated.innerHTML = `Last update: ${item.created_at}`;
      let jokeCategory = document.createElement("div");
      jokeCategory.className = "joke__category";
      jokeCategory.innerHTML = item.categories[0];
      jokeFooter.appendChild(jokeUpdated);
      jokeFooter.appendChild(jokeCategory);

      jokeBody.appendChild(jokeId);
      jokeBody.appendChild(jokeText);
      jokeBody.appendChild(jokeFooter);

      rawContainer.appendChild(jokeBody);

      li.appendChild(heart);
      li.appendChild(rawContainer);

      this.ulContainer.appendChild(li);
    });

    domObjectForInsert.appendChild(this.ulContainer);
  }
}

export default SearchResult;
