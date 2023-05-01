<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

import { onMounted, ref } from "vue";
const editorRef = ref();

onMounted(async () => {
  editorRef.value = new EditorJS({
    holder: "editorjs",
    autofocus: true,
    tools: {
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
    },

    onReady: () => {
      console.log("Editor.js is ready to work!");
    },
  });

  try {
    await editorRef.value.isReady;
    console.log("Editor.js is ready to work!");
    /** Do anything you need after editor initialization */
  } catch (reason) {
    console.log(`Editor.js initialization failed because of ${reason}`);
  }
});
</script>

<template>
  <h1>Hello World!</h1>
  <section id="editorjs"></section>
</template>
