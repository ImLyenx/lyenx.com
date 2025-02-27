import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";

import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",

  integrations: [
    tailwind(),
    icon({
      include: {
        carbon: ["*"],
        "simple-icons": ["*"],
        "skill-icons": ["*"],
        logos: ["*"],
      },
    }),
  ],

  markdown: { rehypePlugins: [sectionize] },

  adapter: node({ mode: "standalone" }),
});
