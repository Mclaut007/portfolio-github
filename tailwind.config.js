/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    // Меняем полностью брейкпойнты на свои (те, что по умолчанию, перезаписываются). По умолчанию в Tailwinde mobile-first
    screens: {
      xxs: "25rem", // 400px
      xs: "30rem", // 480px
      sm: "36rem", // 576px
      md: "48rem", // 768px
      lg: "62rem", // 992px
      xl: "75rem", // 1200px
      xxl: "87.5rem", // 1400px
    },
    // Меняем брейкпойнты на desktop-first, если нужно
    // screens: {
    // "xxl": { max: "87.49875rem" }, // 1399.98px
    // "xl": { max: "74.99875rem" }, // 1199.98px
    // "lg": { max: "61.99875rem" }, // 991.98px
    // "md": { max: "47.99875rem" }, // 767.98px
    // "sm": { max: "35.99875rem" }, // 575.98px
    // "xs": { max: "29.99875rem" }, // 479.98px
    // "xxs": { max: "24.99875rem" }, // 399.98px
    // Прописываем семейства шрифтов
    // fontFamily: {
    // "circular-std-book": "CircularStd-Book, sans-serif",
    //   "circular-std-medium": "CircularStd-Medium, sans-serif",
    //   "circular-std-medium-italic": "CircularStd-MediumItalic, sans-serif",
    // },
    // Настраиваем утилиты для размеров шрифтов. Мы повторяем то, что идет в tailwind по умолчанию в данном случае (можно поменять на другие). Делаем это потому, что утилиты размеров шрифта из коробки задают и line-height. И нам на каждом брейкпойнте, где мы меняем размер шрифта с помощью утилиты, которая идет по умолчанию, будет меняться и lihe-height. И нам придется на каждом брейкпойнте при смене шрифта каждый раз задавать один и тот же line-height (с помощью утилиты leading-*).
    fontSize: {
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      "2xl": "1.5rem" /* 24px */,
      "3xl": "1.875rem" /* 30px */,
      "4xl": "2.25rem" /* 36px */,
      "5xl": "3rem" /* 48px */,
      "6xl": "3.75rem" /* 60px */,
      "7xl": "4.5rem" /* 72px */,
      "8xl": "6rem" /* 96px */,
      "9xl": "8rem" /* 128px */,
    },
    container: {
      padding: "0.9375rem", // 15px
      center: true,
    },
    extend: {
      // Так можно добавить свои брейкпойнты, не стирая брейкпойнты по умолчанию (Все-таки стираются почему-то, остаются только те, что ниже. С colors, например, все нормально)
      // screens: {
      //   xxs: "25rem", // 400px
      //   xs: "30rem", // 480px
      // },
      // То же самое с цветами, например. Код ниже добавляет свои цвета в тему, но не перезаписывает всю тайлвиндовскую палитру. Теперь можно использовать их в классах-утилитах (text-blue1, например);
      // colors: {
      //   blue1: "#1a2578",
      //   red1: "#bf0830;",
      //   gray1: "#484c63",
      // },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover", "@media(hover:hover) and (pointer:fine){&:hover}");
      // Модификатор (вариант) hover теперь будет срабатывать только на устройствах с мышью.
    }),
  ],
};
