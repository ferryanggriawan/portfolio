<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-main class="bg-grey-lighten-3">
      <v-container class="py-8">
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>
