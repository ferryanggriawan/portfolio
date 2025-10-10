<template>
  <v-row>
    <v-col cols="12">
      <v-sheet height="100%">
        <v-row no-gutters>
          <v-col cols="12" md="7" class="pl-6 py-4">
            <div class="text-h4 font-weight-black">
              <div>
                <span>Hi! I Am</span>
              </div>
              <div class="pb-3">
                <span style="font-size: 42px">Ferry Anggriawan</span>
              </div>
              <v-chip
                color="primary"
                class="text-h6 font-weight-black px-3 py-5"
              >
                Software Engineer Man
              </v-chip>
            </div>

            <div style="width: 75%" class="text-h6 py-6">
              <span>
                Create & Developing website for over <b>5 years</b> as
                <b>Frontend Engineer</b>
              </span>
            </div>
          </v-col>

          <v-col cols="12" md="5">
            <v-sheet color="primary" height="100%"></v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>

    <v-col cols="6" class="h-50">
      <v-sheet height="100%"> </v-sheet>
    </v-col>

    <v-col cols="6" class="h-50">
      <v-sheet height="100%"> </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
const links = ["Home", "Blog", "Portfolio", "Contact"];
</script>
