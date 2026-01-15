<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { useData } from '@/composables/data';
import { useLayout } from '@/composables/layout';
import VPLocalNavOutlineDropdown from './VPLocalNavOutlineDropdown.vue';

defineProps<{
	open: boolean;
}>();

defineEmits<(e: 'open-menu') => void>();

const { theme, page, title } = useData();
const { hasSidebar, headers, hasLocalNav } = useLayout();
const { y } = useWindowScroll();

const navHeight = ref(0);

onMounted(() => {
	navHeight.value = parseInt(
		getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height'),
		10,
	);
});

const classes = computed(() => {
	return {
		'has-sidebar': hasSidebar.value,
	};
});
</script>

<template>
	<div :class="classes" class="VPLocalNav">
		<div class="container">
			<button
				v-if="hasSidebar"
				class="menu"
				:aria-expanded="open"
				aria-controls="VPSidebarNav"
				@click="$emit('open-menu')"
			>
				<span class="vpi-align-left menu-icon"></span>
				<span class="menu-text"> {{ theme.sidebarMenuLabel || 'Menu' }}</span>
			</button>
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
    &.fixed { position: fixed }
}

@media (min-width: 960px) {
	.VPLocalNav {
		top: var(--vp-nav-height);
	}

	.VPLocalNav.has-sidebar {
		padding-left: var(--vp-sidebar-width);
	}
}

@media (min-width: 1280px) {
	.VPLocalNav {
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
    @media (min-width: 960px) { display: none }
    &:hover {
	    color: var(--vp-c-text-1);
	    transition: color 0.25s;
    }
}

.menu-icon {
	margin-right: 8px;
	font-size: 14px;
}

.menu, :deep(.VPLocalNavOutlineDropdown > button) {
    padding: 12px 0 11px;
    @media (min-width: 768px) { padding: 12px 0 11px }
}

.title {
    font-weight: 500;
}
</style>
