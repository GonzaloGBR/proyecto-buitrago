// @ts-check
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/static";

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: netlify(),
});
