<script lang="ts" setup>
import Viewer from 'json-canvas-viewer/vue';
import { Minimap, MistouchPreventer, Controls } from 'json-canvas-viewer/modules';
import { useData } from 'vitepress';
const { isDark } = useData();
const isPrerendering = import.meta.env.SSR;
const props = defineProps<{
	canvas: JSONCanvas;
}>();
</script>

<template>
	<Suspense>
		<Viewer
			:options="{
				loading: 'lazy',
				minimapCollapsed: true,
				preventMistouchAtStart: true,
			}"
			class="canvas-viewer"
			:modules="[Minimap, MistouchPreventer, Controls]"
			:theme="isDark ? 'dark' : 'light'"
			:canvas="props.canvas"
			:isPrerendering
		/>
	</Suspense>
</template>

<style lang="scss" scoped>
.canvas-viewer {
	width: 100%;
	aspect-ratio: 16 / 9;
	border-radius: 12px;
	box-shadow: var(--vp-shadow-2);
	border: 1px solid var(--vp-c-border);
	overflow: hidden;
	@media (max-width: 768px) {
		aspect-ratio: 1 / 1;
		margin-left: -24px;
		border-radius: 0;
		border: none;
		width: 100vw;
	}
}
</style>
