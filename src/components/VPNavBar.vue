<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core';
import { ref, watchPostEffect } from 'vue';
import VPLocalNav from '@/components/VPLocalNav.vue';
import { useLayout } from '@/composables/layout';
import VPNavBarAppearance from './VPNavBarAppearance.vue';
import VPNavBarExtra from './VPNavBarExtra.vue';
import VPNavBarHamburger from './VPNavBarHamburger.vue';
import VPNavBarMenu from './VPNavBarMenu.vue';
import VPNavBarSearch from './VPNavBarSearch.vue';
import VPNavBarTitle from './VPNavBarTitle.vue';
import VPNavBarTranslations from './VPNavBarTranslations.vue';

const props = defineProps<{
	isScreenOpen: boolean;
}>();

defineEmits<(e: 'toggle-screen') => void>();

const { y } = useWindowScroll();
const { showTitle } = useLayout();

const classes = ref<Record<string, boolean>>({});

watchPostEffect(() => {
	classes.value = {
		top: y.value === 0,
		'screen-open': props.isScreenOpen,
		'show-title': showTitle.value,
	};
});
</script>

<template>
	<div class="VPNavBar" :class="classes">
		<div class="container">
			<div class="title">
				<VPNavBarTitle>
					<template #nav-bar-title-before>
						<slot name="nav-bar-title-before" />
					</template>
					<template #nav-bar-title-after>
						<slot name="nav-bar-title-after" />
					</template>
				</VPNavBarTitle>
			</div>

			<VPNavBarMenu class="menu" />

			<div class="content-body">
				<slot name="nav-bar-content-before" />
				<VPNavBarSearch class="search" />
				<VPNavBarTranslations class="translations" />
				<VPNavBarAppearance class="appearance" />
				<VPNavBarExtra class="extra" />
				<slot name="nav-bar-content-after" />
				<VPNavBarHamburger :active="isScreenOpen" @click="$emit('toggle-screen')" />
			</div>
		</div>
		<VPLocalNav class="VPLocalNav" />
	</div>
</template>

<style lang="scss" scoped>
.VPNavBar {
	position: relative;
	height: var(--vp-nav-height);
	pointer-events: none;
	white-space: nowrap;
    border-bottom: 1px solid var(--vp-c-divider);
	transition: background-color 0.25s, border 0.25s;
    background-color: var(--vp-nav-bg-color);
    &.screen-open {
	    transition: none;
	    background-color: var(--vp-nav-bg-color);
	    border-bottom: 1px solid var(--vp-c-divider);
    }
    &.top {
        border-bottom: 1px solid transparent;
        background-color: transparent;
    }
}

.VPLocalNav {
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
    @media (max-width: 767px) {
        .show-title & {
            pointer-events: auto;
            opacity: 1;
            transform: translateY(-55px);
        }
    }
}

.container {
    transition: transform 0.3s, opacity 0.2s;
	padding: 0 8px 0 24px;
    @media (max-width: 767px) {
        .show-title & { transform: translateY(-55px) }
    }
    @media (min-width: 768px) { padding: 0 32px }
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: calc(var(--vp-layout-max-width) - 64px);
	height: var(--vp-nav-height);
	pointer-events: none;
}

.container > .title,
.container > .content {
	pointer-events: none;
}.container :deep(*) {
    pointer-events: auto;
}

.container :deep(*) {
    pointer-events: auto;
}

.title {
	flex-shrink: 0;
	height: calc(var(--vp-nav-height) - 1px);
	transition: background-color 0.5s;
}

.content-body {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: var(--vp-nav-height);
	transition: background-color 0.5s;
}

@media (min-width: 960px) {
	.content-body {
		margin-right: -100vw;
		padding-right: 100vw;
	}
}

@media (max-width: 767px) {
	.content-body {
		column-gap: 0.5rem;
	}
}
</style>
