!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},t.parcelRequired7c6=o),o.register("iE7OH",(function(n,t){var r,i;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},i=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("YM5EG",(function(t,r){e(t.exports,"renderShoppingListBooks",(function(){return s}));var i=o("ejfqd");function s(e){return e.length>0?e.map((e=>`\n    <li class="shopping-book">\n      <button class="delete" type="button">\n        <svg class="icon" width="16" height="16">\n          <use href="${n(i)}#delete-book"></use>\n        </svg>\n      </button>\n      <div class="content">\n        <div class="book">\n          <img\n            class="cover"\n            src="${e.book_image?e.book_image:""}"\n            alt="${e.title}"\n            loading="lazy"\n            width="98"\n            height="139"\n          />\n          <div class="text">\n            <h4 class="title">${e.title}</h4>\n            <h4 class="type">${e.list_name}</h4>\n            <div class="links">\n              ${e.buy_links.filter((e=>"Amazon"===e.name||"Bookshop"===e.name||"Apple Books"===e.name)).map((e=>`<a class="link" href=${e.url}>\n                    <img\n                      class="img ${e.name}"\n                      src="./img/${e.name}.png"\n                      alt="Shop logo"\n                    />\n                  </a>`)).join("")}\n            </div>\n          </div>\n        </div>\n        <h4 class="author">${e.author}</h4>\n        <p class="description">${e.description}</p>\n      </div>\n    </li>`)).join(""):"<p>No books saved yet</p>"}})),o.register("ejfqd",(function(e,n){e.exports=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("ee16w")})),o.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=i[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=n),n}})),o("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.4eb6dc8d.js","ee16w":"sprite.0e52e00b.svg","benPZ":"shopping-list.c88a6411.js","lk5QZ":"shopping-list.6e876de7.css","avLya":"shopping-list.497f7340.js"}')),o("axqiF"),o("2NF5N"),o("7EyVx"),o("bNmPK"),o("3JIF2")}();
//# sourceMappingURL=shopping-list.4eb6dc8d.js.map
