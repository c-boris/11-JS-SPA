/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _scripts_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/routes.js */ \"./src/scripts/routes.js\");\n/* harmony import */ var _scripts_PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/PageList.js */ \"./src/scripts/PageList.js\");\n\n\n\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split(\"/\");\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || \"\";\n  var pageFunction = _scripts_routes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener(\"hashchange\", function () {\n  return callRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return callRoute();\n});\n\n// Search\nvar inputText = document.getElementById(\"inputText\");\nvar searchForm = document.querySelector(\"form\");\nsearchForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var userInput = inputText.value;\n  console.log(userInput);\n  (0,_scripts_PageList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userInput);\n});\n\n//# sourceURL=webpack://11-js-spa/./src/index.js?");

/***/ }),

/***/ "./src/scripts/PageDetail.js":
/*!***********************************!*\
  !*** ./src/scripts/PageDetail.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar API_KEY = \"ac694f1ec5f648abb5d18d387712c0a3\";\nvar API_YTB = \"AIzaSyA7Gig-fKRercR4Wr575LdxPO7tn1OH2bE\";\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var background_image = gameData.background_image,\n        name = gameData.name,\n        rating = gameData.rating,\n        rating_top = gameData.rating_top,\n        released = gameData.released,\n        description = gameData.description,\n        developers = gameData.developers,\n        parent_platforms = gameData.parent_platforms,\n        publishers = gameData.publishers,\n        genres = gameData.genres,\n        tags = gameData.tags,\n        stores = gameData.stores,\n        ratings_count = gameData.ratings_count;\n      var types = genres.map(function (genre) {\n        return genre.name;\n      });\n      var platforms = parent_platforms.map(function (item) {\n        return item.platform.name;\n      });\n      var tagsNames = tags.map(function (tag) {\n        return tag.name;\n      });\n      var articleDOM = document.querySelector(\".page-detail .article\");\n      var articleBanner = articleDOM.querySelector(\".article-banner\");\n      var imageElement = articleBanner.querySelector('img');\n      imageElement.src = background_image;\n      articleDOM.querySelector(\"h2.title\").innerHTML = name;\n      articleDOM.querySelector(\"h3.rating\").innerHTML = \"\".concat(rating, \"/\").concat(rating_top, \" - \").concat(ratings_count, \" votes\");\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n      articleDOM.querySelector(\".release-date\").innerHTML = released;\n      articleDOM.querySelector(\".developer\").innerHTML = developers[0].name;\n      articleDOM.querySelector(\".platforms\").innerHTML = platforms.join(\", \");\n      articleDOM.querySelector(\".publisher\").innerHTML = publishers[0].name;\n      articleDOM.querySelector(\".genre\").innerHTML = types.join(\", \");\n      articleDOM.querySelector(\".tags\").innerHTML = tagsNames.join(\", \");\n      stores.forEach(function (element) {\n        articleDOM.querySelector(\".buy\").innerHTML += \"<a href='https://\".concat(element.store.domain, \"'><p>\").concat(element.store.name, \"</p></a>\");\n      });\n      var screenshotsContainer = articleDOM.querySelector(\".screen\");\n      var maxScreenshots = 4;\n      var displayedScreenshots = 0;\n      var getScreenshots = function getScreenshots(argument) {\n        fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"/screenshots?key=\").concat(API_KEY)).then(function (response) {\n          return response.json();\n        }).then(function (responseData) {\n          responseData.results.forEach(function (element) {\n            if (displayedScreenshots < maxScreenshots) {\n              screenshotsContainer.innerHTML += \"<div class=\\\"col-6\\\"><img src='\".concat(element.image, \"' class=\\\"screenshots\\\"></div>\");\n              displayedScreenshots++;\n            }\n          });\n        });\n      };\n      getScreenshots(gameData.id);\n      var getYtbVideo = function getYtbVideo(argument) {\n        var gameName = argument;\n        var youtubeSearchUrl = \"https://www.googleapis.com/youtube/v3/search?part=snippet&q=trailer+\".concat(encodeURIComponent(gameName), \"&key=\").concat(API_YTB);\n        fetch(youtubeSearchUrl).then(function (response) {\n          return response.json();\n        }).then(function (data) {\n          if (data.items && data.items.length > 0) {\n            var videoId = data.items[0].id.videoId;\n            var youtubePlayer = \"\\n          <iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/\".concat(videoId, \"\\\" frameborder=\\\"0\\\" allow=\\\"autoplay; encrypted-media\\\" allowfullscreen></iframe>\\n        \");\n            articleDOM.querySelector(\".video\").innerHTML = youtubePlayer;\n          } else {\n            console.log(\"Aucune vidéo trouvée pour ce jeu.\");\n          }\n        })[\"catch\"](function (error) {\n          console.error(\"Une erreur s'est produite lors de la récupération des vidéos :\", error);\n        });\n      };\n      getYtbVideo(name);\n    };\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n\\n          <div class=\\\"article-banner\\\">\\n            <img src=\\\"\\\">\\n          </div>\\n\\n          <div class=\\\"article-head row\\\">\\n\\n            <div class=\\\"article-title col-10\\\">\\n              <h2 class=\\\"title\\\"></h2>\\n            </div>\\n\\n            <div class=\\\"article-rating col-2\\\">\\n              <h3 class=\\\"rating\\\"></h3>\\n            </div>\\n            \\n          </div>\\n\\n          <p class=\\\"description\\\"></p>\\n\\n          <div class=\\\"article-infos row\\\">\\n\\n            <div class=\\\"info col-3\\\">\\n              <div class=\\\"info-title\\\">Release date</div>\\n              <div class=\\\"info-content release-date\\\"></div>\\n            </div>\\n\\n            <div class=\\\"info col-3\\\">\\n              <div class=\\\"info-title\\\">Developer</div>\\n              <div class=\\\"info-content developer\\\"></div>\\n            </div>\\n\\n            <div class=\\\"info col-3\\\">\\n              <div class=\\\"info-title\\\">Platforms</div>\\n              <div class=\\\"info-content platforms\\\"></div>\\n            </div>\\n\\n            <div class=\\\"info col-3\\\">\\n              <div class=\\\"info-title\\\">Publisher</div>\\n              <div class=\\\"info-content publisher\\\"></div>\\n            </div>\\n\\n          </div>\\n\\n          <div class=\\\"article-infos row\\\">\\n\\n            <div class=\\\"info col-6\\\">\\n              <div class=\\\"info-title\\\">Genre</div>\\n              <div class=\\\"info-content genre\\\"></div>\\n            </div>\\n\\n            <div class=\\\"info col-6\\\">\\n              <div class=\\\"info-title\\\">Tags</div>\\n              <div class=\\\"info-content tags\\\"></div>\\n            </div>\\n\\n          </div>\\n\\n          <div class=\\\"buy\\\">\\n            <h3>BUY</h3>\\n            <p class=\\\"store\\\"></p>\\n          </div>\\n\\n          <div class=\\\"trailer\\\">\\n            <h3>TRAILER</h3>\\n            <div class=\\\"video\\\">\\n            </div>\\n          </div>\\n\\n          <div class=\\\"screenshots\\\">\\n            <h3>SCREENSHOTS</h3>\\n            <div class=\\\"screen row\\\">\\n            </div>\\n          </div>\\n\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://11-js-spa/./src/scripts/PageDetail.js?");

/***/ }),

/***/ "./src/scripts/PageList.js":
/*!*********************************!*\
  !*** ./src/scripts/PageList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar API_KEY = \"ac694f1ec5f648abb5d18d387712c0a3\";\nvar responseData;\nvar findByPlatform = function findByPlatform(articles, selectedPlatform) {\n  if (selectedPlatform === \"any\") {\n    displayResults(articles);\n  } else {\n    var sortedArticles = articles.filter(function (article) {\n      var platforms = article.platforms.map(function (platform) {\n        return platform.platform.slug;\n      });\n      return platforms.includes(selectedPlatform);\n    });\n    displayResults(sortedArticles);\n  }\n};\nvar getPlatformImages = function getPlatformImages(article) {\n  var platformImagesSet = new Set();\n  var validSlugs = ['xbox', 'playstation', 'pc', 'android', 'nintendo'];\n  article.parent_platforms.forEach(function (element) {\n    if (validSlugs.includes(element.platform.slug)) {\n      platformImagesSet.add(\"<span><img src=\\\"src/assets/images/\".concat(element.platform.slug, \".svg\\\"></span>\"));\n    }\n  });\n  return Array.from(platformImagesSet).join('');\n};\nvar formatDate = function formatDate(date) {\n  var options = {\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric'\n  };\n  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));\n};\nvar displayResults = function displayResults(articles) {\n  var maxArticles = 27;\n  var displayedArticlesSlice = articles.slice(0, maxArticles);\n  var resultsContent = displayedArticlesSlice.map(function (article) {\n    return \"\\n    <article class=\\\"col-md-6 col-lg-4 hidden\\\">\\n      <div class=\\\"cardGame\\\">\\n        <div class=\\\"card card-front\\\" style=\\\"width: 22rem;\\\">\\n          <a href=\\\"#pagedetail/\".concat(article.id, \"\\\">\\n            <img src=\\\"\").concat(article.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"\").concat(article.name, \"\\\">\\n            <div class=\\\"card-body\\\">\\n              <h5 class=\\\"card-title\\\">\").concat(article.name, \"</h5>\\n              <div class=\\\"platform-images\\\">\\n                \").concat(getPlatformImages(article), \"\\n              </div>\\n            </div>\\n          </a>\\n        </div>\\n        <div class=\\\"card back-info hidden\\\" style=\\\"width: 22rem;\\\">\\n          <a href=\\\"#pagedetail/\").concat(article.id, \"\\\">\\n            <div class=\\\"card-body\\\">\\n              <p>\").concat(formatDate(article.released), \"</p>\\n              <p>\").concat(article.genres.map(function (genre) {\n      return genre.name;\n    }).join(', '), \" </p>\\n              <p>\").concat(article.rating, \"/\").concat(article.rating_top, \" - \").concat(article.ratings_count, \" votes</p>\\n              <p class=\\\"tags\\\">\").concat(article.tags.map(function (tag) {\n      return tag.name;\n    }).join(', '), \" </p>\\n              <h5 class=\\\"card-title\\\">\").concat(article.name, \"</h5>\\n              <div class=\\\"platform-images\\\">\\n                \").concat(getPlatformImages(article), \"\\n              </div>\\n            </div>\\n          </a>\\n        </div>\\n      </div>\\n    </article>\\n  \");\n  });\n  var resultsContainer = document.querySelector('.page-list .articles');\n  resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n  var cards = document.querySelectorAll('article.hidden');\n  var display1 = _toConsumableArray(cards).slice(0, 9);\n  display1.forEach(function (element) {\n    element.classList.remove('hidden');\n  });\n  var displayBack = function displayBack(event) {\n    var element = event.currentTarget;\n    element.querySelector(\".card-front\").classList.add(\"hidden\");\n    element.querySelector(\".back-info\").classList.remove(\"hidden\");\n  };\n  var removeBack = function removeBack(event) {\n    var element = event.currentTarget;\n    element.querySelector(\".back-info\").classList.add(\"hidden\");\n    element.querySelector(\".card-front\").classList.remove(\"hidden\");\n  };\n  cards.forEach(function (card) {\n    card.addEventListener('mouseover', displayBack);\n    card.addEventListener('mouseout', removeBack);\n  });\n};\nvar PageList = function PageList(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        responseData = data;\n        displayResults(data.results);\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section>\\n        <h2>Welcome,</h2>\\n        <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame,\\n        the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,\\n        brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,\\n        groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you\\n        with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure.\\n        </p>\\n        <select name=\\\"platform-selector\\\" id=\\\"platform-selector\\\">\\n          <option value=\\\"any\\\">Platform : any</option>\\n          <option value=\\\"playstation5\\\">Playstation 5</option>\\n          <option value=\\\"xbox360\\\">Xbox 360</option>\\n        </select>\\n      </section>\\n      <section class=\\\"page-list \\\">\\n        <div class=\\\"articles row\\\">Loading...</div>\\n        <div class=\\\"row\\\">\\n          <div class=\\\"col text-center\\\">\\n            <button id=\\\"showMoreButton\\\" class=\\\"btn btn-primary\\\">Show More</button>\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    var showMoreButton = document.querySelector('#showMoreButton');\n    showMoreButton.addEventListener('click', showMoreArticles);\n    var checkPlatformChange = function checkPlatformChange() {\n      var platformSelector = document.querySelector('#platform-selector');\n      platformSelector.addEventListener('change', function () {\n        var selectedPlatform = platformSelector.value;\n        findByPlatform(responseData.results, selectedPlatform);\n      });\n    };\n    checkPlatformChange();\n    preparePage();\n  };\n  var showMoreArticles = function showMoreArticles() {\n    var cards = document.querySelectorAll('article.hidden');\n    var display1 = _toConsumableArray(cards).slice(0, 9);\n    display1.forEach(function (element) {\n      element.classList.remove('hidden');\n    });\n    if (cards.length <= 9) {\n      var showMoreButton = document.querySelector('#showMoreButton');\n      showMoreButton.classList.add('hidden');\n    }\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://11-js-spa/./src/scripts/PageList.js?");

/***/ }),

/***/ "./src/scripts/routes.js":
/*!*******************************!*\
  !*** ./src/scripts/routes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/scripts/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList.js */ \"./src/scripts/PageList.js\");\n\n\nvar routes = {\n  '': _PageList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'pagedetail': _PageDetail_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://11-js-spa/./src/scripts/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://11-js-spa/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;