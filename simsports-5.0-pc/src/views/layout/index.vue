<!-- layout -->
<template>
	<HeaderTab />
	<router-view />
	<FooterTab />
</template>

<script setup lang="ts">
import HeaderTab from "./header-tab/index.vue";
import FooterTab from "./footer-tab/index.vue";
</script>
