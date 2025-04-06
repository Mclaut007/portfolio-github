// ===== Темная тема ===== //
// Переключаем темы на сайте (темная, светлая и тема операционной системы)

export default function changeThemeColor() {
  const html = document.documentElement;
  // Находим три кнопки на странице для выбора темы (темная, светлая и тема операционной системы). У кнопок должны быть дата-атрибуты, что ниже. Или ищем их по другому селектору.
  const btnDarkTheme = document.querySelector("[data-dark-theme]");
  const btnLightTheme = document.querySelector("[data-light-theme]");
  const btnOSTheme = document.querySelector("[data-os-theme]");

  // Код ниже срабатывает при загрузке страницы. Сначала проверяется, если в localStorage ключ theme. Если есть, то на его основе устанавливается тема (тег html получает класс dark, если theme равен dark или не получает, если theme равен light). Если в localStorage нет свойства с ключом theme, то тема устанавливается на основе темы операционной системы. Если у пользователя выбрана темная тема в ОС, то тег html получает класс dark.
  html.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Клики по кнопкам, что ниже, будут менять тему на странице.
  btnDarkTheme.addEventListener("click", chooseDarkTheme);
  btnLightTheme.addEventListener("click", chooseLightTheme);
  btnOSTheme.addEventListener("click", chooseOSTheme);

  // === Функции, которые будут обрабатывать клики по кнопкам и менять тему на странице.

  // Выбрать темную тему
  function chooseDarkTheme() {
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
  }

  // Выбрать светлую тему
  function chooseLightTheme() {
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
  }

  // Выбрать тему ОС
  function chooseOSTheme() {
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
}
