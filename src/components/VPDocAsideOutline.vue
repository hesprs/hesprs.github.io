<script setup lang="ts">
import { IconMenu2 } from '@tabler/icons-vue';
import { ref } from 'vue';
import { useData } from '@/composables/data';
import { useLayout } from '@/composables/layout';
import { resolveTitle, useActiveAnchor } from '@/composables/outline';
import VPDocOutlineItem from './VPDocOutlineItem.vue';

const { theme } = useData();

const container = ref();
const marker = ref();

const { headers, hasLocalNav } = useLayout();

useActiveAnchor(container, marker);
</script>

<template>
	<nav
		aria-labelledby="doc-outline-aria-label"
		class="VPDocAsideOutline s-card card-enhance"
		v-if="hasLocalNav"
		ref="container"
	>
		<div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading">
			<IconMenu2 class="icon-toc" />
			{{ resolveTitle(theme) }}
		</div>
		<div class="content">
			<div class="outline-marker" ref="marker" />
			<VPDocOutlineItem :headers :root="true" />
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.VPDocAsideOutline {
    padding-left: 16px;
    padding-bottom: 8px;
}

.content {
	position: relative;
	padding-left: 16px;
	font-size: 13px;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 7px;
        width: 4px;
        top: 7px;
        background-color: var(--vp-c-border);
        border-radius: 8px;
  }
}

.outline-marker {
	position: absolute;
	top: 32px;
	left: 0;
	z-index: 0;
	opacity: 0;
	width: 4px;
	border-radius: 2px;
	height: 18px;
	background-color: var(--vp-c-brand-1);
	transition:
		top 0.25s cubic-bezier(0, 1, 0.5, 1),
		background-color 0.5s,
		opacity 0.25s;
}

.outline-title {
	line-height: 32px;
	font-size: 14px;
	font-weight: 600;
	display: flex;
	align-items: center;
	gap: 8px;
    margin-bottom: 4px;
}
</style>
