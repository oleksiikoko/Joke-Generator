import "./scss/style.scss";

import SearchParameters from "./js/components/SearchParameters";
import SearchResult from "./js/components/SearchResult";

let domSearchParameters = document.getElementById("search__type");
let searchParameters = new SearchParameters(
  domSearchParameters,
  (searchQuery) => {
    console.log(searchQuery);
  }
);

let domSearchResult = document.getElementById("search__result");
let searchResult = new SearchResult(domSearchResult, [
  {
    categories: ["dev"],
    created_at: "2020-01-05 13:42:19.324003",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "ag_6paerrkg-mxfjjqw4ba",
    updated_at: "2020-01-05 13:42:19.324003",
    url: "https://api.chucknorris.io/jokes/ag_6paerrkg-mxfjjqw4ba",
    value: "Chuck Norris's beard can type 140 wpm.",
  },
]);
