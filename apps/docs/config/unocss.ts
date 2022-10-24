import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "lightblue",
  "light",
  "sky",
  "emerald",
  "amber",
];
const safelist = [
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `focus:ring-${v}-400`),
  ...colors.map((v) => `focus:ring-${v}-600`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `hover:border-${v}-500`),
  ...colors.map((v) => `text-${v}`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `text-${v}-400`),
  ...colors.map((v) => `text-${v}-900`),
  ...colors.map((v) => `hover:text-${v}`),
  ...colors.map((v) => `hover:text-${v}-500`),
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
