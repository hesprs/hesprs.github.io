import type { TritoTheme } from '@/shared';
import { useWindowScroll } from '@vueuse/core';
import { onContentUpdated } from 'vitepress';
import {
	type ComputedRef,
	computed,
	type InjectionKey,
	ref,
	shallowReadonly,
	shallowRef,
	watchPostEffect,
} from 'vue';

import { useData } from './data';
import { getHeaders } from './outline';

const headers = shallowRef<TritoTheme.OutlineItem[]>([]);
const showTitle = ref(false);

export function useLayout() {
	const { frontmatter, theme } = useData();

	const isHome = computed(() => {
		return !!(frontmatter.value.isHome ?? frontmatter.value.layout === 'home');
	});

	const hasAside = computed(() => {
		if (isHome.value) return false;
		if (frontmatter.value.aside != null) return !!frontmatter.value.aside;
		return theme.value.aside !== false;
	});

	const leftAside = computed(() => {
		if (!hasAside.value) return false;
		return frontmatter.value.aside == null
			? theme.value.aside === 'left'
			: frontmatter.value.aside === 'left';
	});

	const hasLocalNav = computed(() => {
		return headers.value.length > 0;
	});

	return {
		hasAside,
		leftAside,
		headers: shallowReadonly(headers),
		hasLocalNav,
		showTitle,
	};
}

export function registerWatchers() {
	const { frontmatter, theme } = useData();

	onContentUpdated(() => {
		headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
	});

	const { y } = useWindowScroll();
	watchPostEffect(() => {
		showTitle.value = y.value >= 100;
	});
}

export interface LayoutInfo {
	heroImageSlotExists: ComputedRef<boolean>;
}

export const layoutInfoInjectionKey: InjectionKey<LayoutInfo> = Symbol('layout-info');
