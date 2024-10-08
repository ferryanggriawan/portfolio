<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <div style="width: 200px">
        <span class="text-h5 font-weight-black">Ferry</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-for="menu in menus"
        :key="menu.link"
        :text="menu.text"
        :to="menu.link"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <div style="width: 200px" class="text-right">
        <v-btn>Contact Me</v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
const menus = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Portfolio",
    link: "/portfolio",
  },
  {
    text: "About",
    link: "/about",
  },
];
</script>
