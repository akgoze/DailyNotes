<script setup lang="ts">
import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const editor = new EditorJS({
  holder: "editorjs",

  tools: {
    header: Header,
    list: List,
  },
});

const db = useFirestore();

const notes = useCollection(collection(db, "notes"));
</script>

<template>
  <div id="editorjs"></div>
  <!-- <pre>{{ notes }}</pre> -->
</template>
