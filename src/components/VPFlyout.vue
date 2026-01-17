<script lang="ts" setup generic="T extends TritoTheme.NavItem">
import { ref } from 'vue';
import { useFlyout } from '@/composables/flyout';
import type { TritoTheme } from '@/shared';
import VPMenu from './VPMenu.vue';

defineProps<{
	icon?: string;
	button?: string;
	label?: string;
	items?: T[];
	noChevron?: boolean;
}>();

const open = ref(false);
const el = ref<HTMLElement>();

useFlyout({ el, onBlur });

function onBlur() {
	open.value = false;
}
</script>

<template>
	<div class="VPFlyout" ref="el" @mouseenter="open = true" @mouseleave="open = false">
		<button
			type="button"
			class="button"
			aria-haspopup="true"
			:aria-expanded="open"
			:aria-label="label"
			@click="open = !open"
		>
			<span v-if="button || icon || $slots.icon" class="text">
				<slot name="icon" />
				<span v-if="icon" :class="[icon, 'option-icon']" />
				<span v-if="button" v-html="button"></span>
				<span v-if="!noChevron" class="vpi-chevron-down text-icon" />
			</span>

			<span v-else class="vpi-more-horizontal icon" />
		</button>

		<div class="menu">
			<VPMenu :items>
				<slot />
			</VPMenu>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.VPFlyout {
	position: relative;
	&:hover {
		color: var(--vp-c-brand-1);
		transition: color 0.25s;
	}
	&:hover .text {
		color: var(--vp-c-text-2);
	}
	&:hover .icon {
		fill: var(--vp-c-text-2);
	}
	&.active .text {
		color: var(--vp-c-brand-1);
	}
	&.active:hover .text {
		color: var(--vp-c-brand-2);
	}
}

.button[aria-expanded='false'] + .menu {
	opacity: 0;
	visibility: hidden;
	transform: translateY(0);
}

.VPFlyout:hover .menu,
.button[aria-expanded='true'] + .menu {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}

.button {
	display: flex;
	align-items: center;
	padding: 0 12px;
	height: var(--vp-nav-height);
	color: var(--vp-c-text-1);
	transition: color 0.5s;
}

.text {
	display: flex;
	align-items: center;
	line-height: var(--vp-nav-height);
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-text-1);
	transition: color 0.25s;
}

.option-icon {
	margin-right: 0px;
	font-size: 16px;
}

.text-icon {
	margin-left: 4px;
	font-size: 14px;
}

.icon {
	font-size: 20px;
	transition: fill 0.25s;
}

.menu {
	position: absolute;
	top: calc(var(--vp-nav-height) / 2 + 20px);
	right: 0;
	opacity: 0;
	visibility: hidden;
	transition:
		opacity 0.25s,
		visibility 0.25s,
		transform 0.25s;
}
</style>
