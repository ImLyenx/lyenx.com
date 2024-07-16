import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        carbon: ["*"],
        "simple-icons": ["*"],
        "skill-icons": ["*"],
      },
    }),
  ],
  markdown: {
    rehypePlugins: [sectionize],
  },
});
