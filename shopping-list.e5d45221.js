!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);const i=new(0,t("1h2Gi").BookAPI),l={emptyShoppingListEl:document.querySelector(".shopping-list__empty")};console.log("REFS",l.emptyShoppingListEl),async function(){const e=JSON.parse(localStorage.getItem("openInfoBook"));if(!e)return;l.emptyShoppingListEl.classList.add("is-hidden");const{data:o}=await i.getBooksById(e._id);console.log("BookInfo: ",o)}()}();
//# sourceMappingURL=shopping-list.e5d45221.js.map
