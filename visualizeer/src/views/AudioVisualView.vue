<template>
  <div class="audio-viz">
    <h1>Audio Visualization<span class="brackets">()</span></h1>
    <p>coming soon</p>
    <audio-button />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .audio-viz {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
  }
}

@media (max-width: 1024px) {
  .audio-viz {
    margin-top: 3rem;
  }
}
</style>
