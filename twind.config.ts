import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      serif: ["Gambarino", "serif"],
    }
  },
  preflight: {
    "@font-face": {
      fontFamily: "Gambarino",
      src: "url('/Gambarino-Regular.woff2') format('woff2')",
      fontWeight: "400",

    }
  }
} as Options;
