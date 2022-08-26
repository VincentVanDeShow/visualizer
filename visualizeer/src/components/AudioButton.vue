<template>
  <section>
    <div class="controls">
      <button @click="startRecognition">🎙</button>
      <button @click="stopRecognition">🤫</button>
    </div>
    <div class="result">
      <p class="result-transcript">
        <span role="image"></span>{{ transcript }}
      </p>
      <p>{{ confidence }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      recognitionApi:
        window.SpeechRecognition || window.webkitSpeechRecognition,
      grammarApi: window.SpeechGrammarList || window.webkitSpeechGrammarList,
      transcript: "",
      grammar:
        "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;",
      recognition: null,
      speechRecognitionList: null,
      confidence: "Confidence: ",
    };
  },
  mounted() {
    this.recognition = new this.recognitionApi();
    this.speechRecognitionList = new this.grammarApi();
    this.speechRecognitionList.addFromString(this.grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    this.recognition.maxAlternatives = 1;
    this.recognition.lang = "nl-NL";
    this.recognition.continuous = true;
  },
  methods: {
    startRecognition() {
      this.recognition.start();

      this.recognition.onresult = (event) => {
        console.log(event.results[0][0]);
        for (const result in event.results) {
          if (!event.results[result][0]) {
            return;
          }
          console.log(`${result}: ${event.results[result][0].transcript}`);
          this.transcript = `${event.results[result][0].transcript}`;
          this.confidence = `Confidence: ${Math.floor(
            (event.results[result][0].confidence / 1) * 100
          )}%`;
        }
      };
    },
    stopRecognition() {
      console.log("mic has stopped");
      this.recognition.stop();
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
p {
  font-size: 1rem;
  text-align: center;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  font-size: 3rem;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.result {
  margin: 2rem 0;
  flex-direction: column;
  width: 100%
}

.result > .result-transcript {
  border: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  width: 100%;
  height: 5rem;
}
</style>
