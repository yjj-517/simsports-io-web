<!-- governance -->
<template>
	<div class="main">
		<BuildSimsports />
		<BuildGamePlatform />
		<BuildGameSolutions />
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import BuildSimsports from "./build-simsports/index.vue";
import BuildGamePlatform from "./build-game-platform/index.vue";
import BuildGameSolutions from "./build-game-solutions/index.vue";
</script>
