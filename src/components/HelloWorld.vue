<script setup lang="ts">
import DailyEditor from "./DailyEditor.vue";

// import { useCollection, useFirestore } from "vuefire";
// import { collection } from "firebase/firestore";

// const db = useFirestore();

// const notes = useCollection(collection(db, "notes"));

const savedData = JSON.parse(localStorage.getItem("editorData") || "{}");
</script>

<template>
  <DailyEditor />
  <section>{{ savedData }}</section>
</template>
