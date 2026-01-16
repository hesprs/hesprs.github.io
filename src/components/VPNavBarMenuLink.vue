<script lang="ts" setup>
import { computed } from 'vue';
import { useData } from '@/composables/data';
import type { TritoTheme } from '@/shared';
import { isActive } from '@/shared';
import VPLink from './VPLink.vue';

const props = defineProps<{
	item: TritoTheme.NavItemWithLink;
}>();

const { page } = useData();

const href = computed(() =>
	typeof props.item.link === 'function' ? props.item.link(page.value) : props.item.link,
);
</script>

<template>
	<VPLink
		:class="{
      VPNavBarMenuLink: true,
      active: isActive(
        page.relativePath,
        item.activeMatch || href,
        !!item.activeMatch
      )
    }"
		:href
		:target="item.target"
		:rel="item.rel"
		:no-icon="item.noIcon"
		tabindex="0"
	>
		<span v-html="item.text"></span>
	</VPLink>
</template>

<style lang="scss" scoped>
.VPNavBarMenuLink {
	display: flex;
	align-items: center;
	padding: 16px 12px;
    margin: auto;
    height: 24px;
    border-radius: 20px;
	line-height: var(--vp-nav-height);
	font-size: 1em;
	font-weight: 500;
	color: var(--vp-c-text-1);
	transition: color 0.25s, background-color 0.25s;
    &.active, &:hover {
        color: var(--main-card-background);
        background-color: var(--vp-c-brand-1);
    }
}
</style>
