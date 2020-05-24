class FavoriteList {
  constructor() {
    if (!window.localStorage["favorite"])
      window.localStorage["favorite"] = "[]";
  }

  addToFavorite(item) {
    let curFavorite = JSON.parse(window.localStorage["favorite"]);
    curFavorite = [item, ...curFavorite];
    window.localStorage["favorite"] = JSON.stringify(curFavorite);
    console.log(window.localStorage["favorite"]);
  }

  inFavorite(id) {
    let curFavorite = JSON.parse(window.localStorage["favorite"]);
    return curFavorite.find((item) => item.id === id);
  }

  removeFavorite(id) {
    let curFavorite = JSON.parse(window.localStorage["favorite"]);
    curFavorite = curFavorite.filter((item) => item.id !== id);
    window.localStorage["favorite"] = JSON.stringify(curFavorite);
  }

  getList() {
    return JSON.parse(window.localStorage["favorite"]);
  }
}

export default FavoriteList;
