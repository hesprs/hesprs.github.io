<script setup lang="ts">
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import { useData } from '@/composables/data';
import { useLayout } from '@/composables/layout';
import VPDocAside from './VPDocAside.vue';
import VPDocFooter from './VPDocFooter.vue';

const { theme } = useData();

const route = useRoute();
const { hasSidebar, hasAside, leftAside } = useLayout();

const pageName = computed(() => route.path.replace(/[./]+/g, '_').replace(/_html$/, ''));
</script>

<template>
	<div class="VPDoc" :class="{ 'has-sidebar': hasSidebar, 'has-aside': hasAside }">
		<slot name="doc-top" />
		<div class="container">
			<div v-if="hasAside" class="aside" :class="{'left-aside': leftAside}">
				<div class="aside-container">
					<VPDocAside>
						<template #aside-top>
							<slot name="aside-top" />
						</template>
						<template #aside-bottom>
							<slot name="aside-bottom" />
						</template>
						<template #aside-outline-before>
							<slot name="aside-outline-before" />
						</template>
						<template #aside-outline-after>
							<slot name="aside-outline-after" />
						</template>
						<template #aside-ads-before>
							<slot name="aside-ads-before" />
						</template>
						<template #aside-ads-after>
							<slot name="aside-ads-after" />
						</template>
					</VPDocAside>
				</div>
			</div>

			<div class="content">
				<div class="content-container s-card">
					<slot name="doc-before" />
					<main class="main">
						<Content
							class="vp-doc"
							:class="[
                pageName,
                theme.externalLinkIcon && 'external-link-icon-enabled'
              ]"
						/>
					</main>
					<VPDocFooter>
						<template #doc-footer-before>
							<slot name="doc-footer-before" />
						</template>
					</VPDocFooter>
					<slot name="doc-after" />
				</div>
			</div>
		</div>
		<slot name="doc-bottom" />
	</div>
</template>

<style lang="scss" scoped>
.VPDoc {
	width: 100%;
    @media (min-width: 960px) {
        --container-width: 992px;
        &.has-sidebar { --container-width: calc(992px - var(--vp-sidebar-width)) }
    }
    @media (min-width: 1440px) {
        --container-width: 1260px;
        &.has-sidebar { --container-width: calc(1260px - var(--vp-sidebar-width)) }
    }
}

.container {
	margin: 0 auto;
	width: 100%;
    @media (min-width: 960px) {
	    .VPDoc:not(.has-sidebar) & {
		    display: flex;
		    justify-content: center;
		    width: var(--container-width);
	    }
    }
    @media (min-width: 1280px) {
		display: flex;
		justify-content: center;
    }
}

.aside {
	position: relative;
	display: none;
	order: 2;
	width: 30%;
	padding-left: 32px;
    @media (min-width: 1280px) { display: block }
}

.content {
	position: relative;
    width: 70%;
	margin: 0;
    @media (max-width: 1280px) { width: 100% !important }
    @media (min-width: 1280px) {
		order: 1;
		margin: 0;
    }
}

.left-aside {
	order: 1;
	padding-left: unset;
	padding-right: 32px;
}

.aside-container {
	position: fixed;
	top: 0;
    width: calc(var(--container-width) * 0.3 - 32px);
	padding-top: calc(
		var(--vp-nav-height) +
		var(--vp-layout-top-height, 0px) +
		var(--vp-doc-top-height, 0px) +
		36px
	);
	height: 100vh;
	scrollbar-width: none;
}

.aside-container::-webkit-scrollbar {
	display: none;
}

.content-container {
    padding: 24px 24px 8px;
    @media (min-width: 960px) { padding: 30px 30px 12px }
    @media (max-width: 768px) {
        border: 0 solid transparent;
        border-radius: 0;
        box-shadow:
            0 4px 16px 2px var(--main-border-shadow),
            0 2px 4px var(--main-border-shadow);
    }
}
</style>
