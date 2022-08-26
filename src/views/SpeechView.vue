<script setup>
import AudioButton from "@/components/AudioButton.vue";
</script>

<template>
  <div class="speech-viz">
    <h1>SpeechRecognition<span class="brackets">()</span></h1>
    <p>Open the console to see some output</p>
    <br />
    <audio-button />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .speech-viz {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
  }
}

@media (max-width: 1024px) {
  .speech-viz {
    margin-top: 3rem;
  }
}
</style>
