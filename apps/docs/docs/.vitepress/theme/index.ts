// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import { PButton } from "@poi/core";
import "@poi/core/dist/style.css";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("PButton", PButton);
    registerComponents(app);
  },
};
