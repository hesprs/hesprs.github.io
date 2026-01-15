<template>
	<article
		class="s-card card-enhance project-card"
		:class="{ 'with-logo': props.meta.logo }"
		aria-labelledby="project-title"
	>
		<div class="card-body">
			<h1 id="project-title">{{ props.meta.name }}</h1>
			<p class="s-card concave description">{{ props.meta.description }}</p>
			<footer class="skills-list">
				<a
					v-for="(item, index) in props.meta.links"
					:key="index"
					:href="item.url"
					target="_blank"
					class="skills-item"
					:style="{ '--color': item.color }"
				>
					<component class="skills-logo" :is="item.icon" />
					{{ item.name }}
				</a>
			</footer>
		</div>
		<img v-if="props.meta.logo" :src="props.meta.logo" class="logo" :alt="`${props.meta.name} Logo`" />
	</article>
</template>

<script setup lang="ts">
import type { Icon } from '@tabler/icons-vue';

const props = defineProps<{
	meta: {
		name: string;
		description: string;
		logo?: string;
		links: Array<{ name: string; url: string; icon: Icon; color: string }>;
	};
}>();
</script>

<style scoped lang="scss">
.project-card {
	padding: 20px 28px;
    &.with-logo {
        display: grid;
	    grid-template-columns: 16fr 9fr;
    }
    @media (max-width: 767px) {
        padding: 16px;
        display: flex !important;
        flex-direction: column;
        h1 { text-align: center !important }
    }
    h1 { text-align: left }
    a {
        &::before { display: none; }
    }
    .logo {
        margin: auto 0;
	    padding: 0 0 0 20px;
        @media (max-width: 767px) {
            padding: 0;
            order: 1;
            margin-bottom: 20px;
        }
    }
    .card-body {
        @media (max-width: 767px) { order: 2; }
    }
}
.description {
    padding: 16px 20px;
    margin: 12px 0;
}
.skills-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
    padding-top: 10px;
	.skills-item {
		display: flex;
		align-items: center;
		text-decoration: none;
		padding: 8px 12px 8px 8px;
		background-color: var(--vp-c-bg);
		border: 1px solid var(--vp-c-border);
		box-shadow: 0 8px 12px -4px var(--main-border-shadow);
		transition:
			background-color 0.3s,
			color 0.3s;
        font-weight: bold;
        border-radius: 40px;
        &:hover {
            background-color: var(--main-card-background);
            color: var(--vp-c-brand-2) !important;
        }
		.skills-logo {
			width: 32px;
			height: 32px;
			padding: 4px;
			overflow: visible;
			margin-right: 8px;
			border-radius: 50%;
			background-color: var(--color);
			color: #fff;
		}
	}
}
</style>
