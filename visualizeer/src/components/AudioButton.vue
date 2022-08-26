<template>
  <section>
    <div>
      <button @click="startRecognition">
        Start Microphone SpeechRecognition
      </button>
      <button @click="stopRecognition">
        stop Microphone SpeechRecognition
      </button>
    </div>
    <p>{{ transcript }}</p>
    <p>{{ confidence }}</p>
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
      confidence: 0,
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
          this.confidence = `Confidence: ${event.results[result][0].confidence}`;
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
  width: 40rem;
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
</style>
