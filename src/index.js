import "./style/index.scss";
import routes from "./scripts/routes.js";
import PageList from "./scripts/PageList.js";

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener("hashchange", () => callRoute());
window.addEventListener("DOMContentLoaded", () => callRoute());

// Search
const inputText = document.getElementById("inputText");
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = inputText.value;
  console.log(userInput);
  PageList(userInput);
});
