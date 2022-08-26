<script setup>
import AudioButton from "@/components/AudioButton.vue";
</script>

<template>
  <div class="about">
    <h1>This is an Audio page</h1>
    <AudioButton />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
