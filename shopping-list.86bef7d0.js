function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=t.parcelRequired7c6;null==r&&((r=function(n){if(n in o)return o[n].exports;if(n in i){var e=i[n];delete i[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){i[n]=e},t.parcelRequired7c6=r),r.register("kyEFX",(function(e,t){var o,i;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return i}),(function(n){return i=n}));var r={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},i=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),r.register("irreK",(function(t,o){n(t.exports,"renderShoppingListBooks",(function(){return s}));var i=r("e5EMj");function s(n){return n.length>0?n.map((n=>`\n    <li class="shopping-book">\n      <button class="delete" type="button">\n        <svg class="icon" width="16" height="16">\n          <use href="${e(i)}#delete-book"></use>\n        </svg>\n      </button>\n      <div class="content">\n        <div class="book">\n          <img\n            class="cover"\n            src="${n.book_image?n.book_image:""}"\n            alt="${n.title}"\n            loading="lazy"\n            width="98"\n            height="139"\n          />\n          <div class="text">\n            <h4 class="title">${n.title}</h4>\n            <h4 class="type">${n.list_name}</h4>\n            <div class="links">\n              ${n.buy_links.filter((n=>"Amazon"===n.name||"Bookshop"===n.name||"Apple Books"===n.name)).map((n=>`<a class="link" href=${n.url}>\n                    <img\n                      class="img ${n.name}"\n                      src="./img/${n.name}.png"\n                      alt="Shop logo"\n                    />\n                  </a>`)).join("")}\n            </div>\n          </div>\n        </div>\n        <h4 class="author">${n.author}</h4>\n        <p class="description">${n.description}</p>\n      </div>\n    </li>`)).join(""):"<p>No books saved yet</p>"}})),r.register("e5EMj",(function(n,e){n.exports=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.86bef7d0.js","lp5u4":"sprite.0e52e00b.svg","gUMii":"shopping-list.fae27039.js","lk5QZ":"shopping-list.6e876de7.css","2kW7S":"shopping-list.bd2a0482.js"}')),r("6ofwr"),r("3cYrd"),r("8Cqoi"),r("4dIBK"),r("3buQg");
//# sourceMappingURL=shopping-list.86bef7d0.js.map
