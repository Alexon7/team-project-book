!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},n=o.parcelRequired7c6;null==n&&((n=function(o){if(o in e)return e[o].exports;if(o in t){var n=t[o];delete t[o];var i={id:o,exports:{}};return e[o]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(o,e){t[o]=e},o.parcelRequired7c6=n);const i=new(0,n("1h2Gi").BookAPI),l={emptyShoppingListEl:document.querySelector(".shopping-list__empty"),notEmptyShoppingListEl:document.querySelector(".shopping-list__list")};console.log("REFS",l.emptyShoppingListEl),async function(){const o=JSON.parse(localStorage.getItem("openInfoBook"));if(!o)return;l.notEmptyShoppingListEl.hasChildNodes&&l.emptyShoppingListEl.classList.toggle("is-hidden");const{data:e}=await i.getBooksById(o._id);console.log("BookInfo: ",e)}()}();
//# sourceMappingURL=shopping-list.754668ef.js.map