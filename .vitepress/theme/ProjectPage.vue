<script setup lang="ts">
import type Theme from 'vitepress-theme-trito';
import { useData } from 'vitepress';
import { VPDoc } from 'vitepress-theme-trito';
import { provide, shallowRef } from 'vue';
import { LinksKey } from '@/keys';
import ProjectCard, { type Props } from '@/ProjectCard.vue';

const links = shallowRef<Props['links']>([]);
const { frontmatter } = useData<typeof Theme>();
provide(LinksKey, (_links: Props['links']) => {
	links.value = _links;
});
</script>

<template>
	<VPDoc>
		<template #content-before>
			<ProjectCard
				:title="frontmatter.title"
				:links
				:description="frontmatter.description"
				:logo="frontmatter.logo"
				class="vp-doc"
			/>
		</template>
	</VPDoc>
</template>
