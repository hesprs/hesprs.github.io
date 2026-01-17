<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useData } from '@/composables/data';
import { useLayout } from '@/composables/layout';
import VPLocalNavOutlineDropdown from './VPLocalNavOutlineDropdown.vue';

defineEmits<(e: 'open-menu') => void>();

const { page, title } = useData();
const { headers } = useLayout();

const navHeight = ref(0);

onMounted(() => {
	navHeight.value = parseInt(
		getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'),
		10,
	);
});
</script>

<template>
	<div class="VPLocalNav">
		<div class="container">
			<h4 class="title">{{ page.title || title }}</h4>
			<VPLocalNavOutlineDropdown :headers :navHeight />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.VPLocalNav {
	top: 0;
	left: 0;
	z-index: var(--vp-z-index-local-nav);
	padding-top: var(--vp-layout-top-height, 0px);
	width: 100%;
	&.fixed {
		position: fixed;
	}
	@media (min-width: 960px) {
		top: var(--vp-nav-height);
	}
	@media (min-width: 1280px) {
		display: none;
	}
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 18px;
}

.menu {
	display: flex;
	align-items: center;
	line-height: 24px;
	font-size: 12px;
	font-weight: 500;
	color: var(--vp-c-text-2);
	transition: color 0.5s;
	@media (min-width: 960px) {
		display: none;
	}
	&:hover {
		color: var(--vp-c-text-1);
		transition: color 0.25s;
	}
}

.menu-icon {
	margin-right: 8px;
	font-size: 14px;
}

.menu,
:deep(.VPLocalNavOutlineDropdown > button) {
	padding: 12px 0 11px;
	@media (min-width: 768px) {
		padding: 12px 0 11px;
	}
}

.title {
	font-weight: 500;
}
</style>
