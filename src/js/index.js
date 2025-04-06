// ============ Импорт js-модулей (примеры) ============ //

// 1. Cобственных (из папки modules):
// import inputPhoneMask from "./modules/input-phone-mask.js";

// 2. Или из node_modules:
// import AirDatepicker from "air-datepicker";
// import "air-datepicker/air-datepicker.css";
// new AirDatepicker("#date");

// Если у разных html-страниц собственные js-файлы, прописываем это в webpack.config.js (в entry)

// ======== Разный код для ПК и тачпадов ======== //

// Шаблон, если будут будут нужны, к примеру, разные стили для ПК и мобильных устройств (с тачпадом)

// "use strict";

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");

// } else {
//   document.body.classList.add("_pc");
// }

// ========== Плагин Imaskjs (маска для телефона) ========== //

// import inputPhoneIMask from "./modules/imask";

// inputPhoneIMask();

// ============= Меню-бургер ============= //

// import headerBurgerMenu from "./modules/header-burger-menu";

// headerBurgerMenu();

// ==================== Popup-окна ===================== //

// import findAndActivatePopups from "./modules/popupAll";

// findAndActivatePopups();

// ========= Показываем/скрываем хедер при скролле ========= //

// Показываем/скрываем фиксированный хедер при скролле. При скролле вниз хедер исчезает, при скролле вверх - появляется.

// import showHideFixedHeader from "./modules/hide-show-fixed-header";

// showHideFixedHeader();

// ========= Встраиваем яндекс-карту на сайт ========= //

// import createYandexMap from "./modules/yandex-map";

// createYandexMap();

// ========= Темная тема  ========= //

// Меням тему на странице, кликая по кнопкам. Будут темная, светлая темы и тема ОС.

// import changeThemeColor from "./modules/dark-mode";

// changeThemeColor();
