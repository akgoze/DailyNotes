<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";

import { useCollection, useFirestore } from "vuefire";
import { collection } from "firebase/firestore";

const db = useFirestore();

const notes = useCollection(collection(db, "notes"));
</script>

<template>
  <pre>{{ notes }}</pre>
</template>
