import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
  presetWebFonts,
  presetIcons,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        h3: { "font-size": "1.125rem", "font-weight": "500" },
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        heading: "Poppins",
        sans: "Roboto",
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#1a9988",
      heading: "#171717",
    },
  },
  shortcuts: {
    heading: "font-heading text-heading",
  },
});
