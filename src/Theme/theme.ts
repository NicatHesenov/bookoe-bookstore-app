import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        Primary: { value: "#6C5DD3" },
        DarkPurple: { value: "#11142D" },
        White: { value: "#FFFFFF" },
        Grey01: { value: "#AAAAAA" },
        Grey02: { value: "#C4C4C4" },
        Grey03: { value: "#F0F0F0" },
        PrimarySoft: { value: "#F0EEFF" },
        Orange: { value: "#FF754C" },
      },
      fonts: {
        body: { value: "core, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
