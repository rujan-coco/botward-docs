// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Botward",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "War Lineup", slug: "guides/war-lineup" },
            { label: "Me", slug: "guides/me" },
            { label: "My Stats", slug: "guides/my-stats" },
          ],
        },
      ],
    }),
  ],
});
