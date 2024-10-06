import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ferry Hub",
    },
  },
  runtimeConfig: {
    public: {
      version: process.env.VERSION,
    },
  },
  components: {
    dirs: ["client/components"],
  },
  dir: {
    layouts: "client/layouts",
    pages: "client/pages",
    plugins: "apps/plugins",
  },
  imports: {
    dirs: ["apps/stores"],
  },
  pinia: {
    storesDirs: ["stores/**", "apps/stores?**"],
  },
  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
});
