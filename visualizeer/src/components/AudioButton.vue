<template>
  <h1>Audio Button</h1>
  <div>
    <button @click="startRecognition">
      Start Microphone SpeechRecognition
    </button>
    <button @click="stopRecognition">stop Microphone SpeechRecognition</button>
  </div>
  <p>{{ transcript }}</p>
  <p>[{{ fullTranscript }}]</p>
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
      fullTranscript: [],
    };
  },
  mounted() {
    this.recognition = new this.recognitionApi();
    console.log("new Recognition", this.recognition);
    const speechRecognitionList = new this.grammarApi();
    console.log('speechRecognitionList', speechRecognitionList);
    speechRecognitionList.addFromString(this.grammar, 1);
    this.recognition.grammars = speechRecognitionList;
    this.recognition.maxAlternatives = 1;
    this.recognition.lang = "nl-NL";
    this.recognition.continuous = true;
  },
  methods: {
    startRecognition() {
      this.recognition.start();

      this.recognition.onresult = (event) => {
        console.log(event.results[0][0]);
        // const color = event.results[0][0].transcript;
        for (const result in event.results) {
          console.log(`${result}: ${event.results[result][0].transcript}`);
          this.transcript = `${event.results[result][0].transcript}`;
        }
      };

      this.recognition.onsoundend((event) => {
        console.log('onsoundend', event);
      })
    },
    stopRecognition() {
      console.log("mic has stopped");
      this.recognition.stop();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1rem;
  text-align: center;
}

div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
