import "./scss/style.scss";

import SearchParameters from "./js/components/SearchParameters";
import SearchResult from "./js/components/SearchResult";
import Favorite from "./js/components/Favorite";

import jokesApi from "./js/utils/jokesApi";
import FavoriteList from "./js/utils/FavoriteList";

let searchResult;

const searchByQuery = (query) => {
  let domSearchResult = document.getElementById("search__result");

  jokesApi.getJokes(query).then((data) => {
    searchResult = new SearchResult(
      domSearchResult,
      query.includes("search") ? data.result : [data],
      onAddToFavorite,
      onRemoveFromFavorite
    );
  });
};

window.favoriteList = new FavoriteList();

let domSearchParameters = document.getElementById("search__type");
let searchParameters;

jokesApi.getCategories().then((categories) => {
  searchParameters = new SearchParameters(
    domSearchParameters,
    searchByQuery,
    categories
  );
});

let domFavorite = document.getElementById("favorite");
let favorite = new Favorite(domFavorite);
favorite.render();

const onAddToFavorite = (item) => {
  window.favoriteList.addToFavorite(item);
  favorite.render();
};

const onRemoveFromFavorite = (id) => {
  window.favoriteList.removeFavorite(id);
  favorite.render();
};

let favoriteIcon = document.getElementById("favorite__icon");
let favoriteOpened = false;
favoriteIcon.addEventListener("click", function () {
  if (!favoriteOpened) {
    favoriteIcon.setAttribute("src", "src/assets/img/hideFavorite.svg");
    document.getElementById("favorite").style.visibility = "visible";
    if (window.innerWidth > 500 && window.innerWidth < 1112)
      document.getElementById("blur").style.visibility = "visible";
  } else {
    favoriteIcon.setAttribute("src", "src/assets/img/showFavorite.svg");
    document.getElementById("favorite").style.visibility = "hidden";
    document.getElementById("blur").style.visibility = "hidden";
  }
  favoriteOpened = !favoriteOpened;
});
