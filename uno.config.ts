import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        h3: { "font-size": "1rem" },
      },
    }),
  ],
});
