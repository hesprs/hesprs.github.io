<script setup lang="ts">
import { inject } from 'vue';
import { type LayoutInfo, layoutInfoInjectionKey } from '@/composables/layout';
import type { TritoTheme } from '@/shared';
import VPButton from './VPButton.vue';
import VPImage from './VPImage.vue';

export interface HeroAction {
	theme?: 'brand' | 'alt';
	text: string;
	link: string;
	target?: string;
	rel?: string;
}

defineProps<{
	name?: string;
	text?: string;
	tagline?: string;
	image?: TritoTheme.ThemeableImage;
	actions?: HeroAction[];
}>();

const { heroImageSlotExists } = inject(layoutInfoInjectionKey) as LayoutInfo;
</script>

<template>
	<div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
		<div class="main">
			<slot name="home-hero-info-before" />
			<slot name="home-hero-info">
				<h1 class="heading">
					<span v-if="name" v-html="name" class="name clip"></span>
					<span v-if="text" v-html="text" class="text"></span>
				</h1>
				<p v-if="tagline" v-html="tagline" class="tagline"></p>
			</slot>
			<slot name="home-hero-info-after" />

			<div v-if="actions" class="actions">
				<div v-for="action in actions" :key="action.link" class="action">
					<VPButton
						tag="a"
						size="medium"
						:theme="action.theme"
						:text="action.text"
						:href="action.link"
						:target="action.target"
						:rel="action.rel"
					/>
				</div>
			</div>
			<slot name="home-hero-actions-after" />
		</div>

		<div v-if="image || heroImageSlotExists" class="image-container">
			<slot name="home-hero-image">
				<VPImage v-if="image" class="image-src" :image />
			</slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.VPHero {
	padding: 0 36px;
	@media (min-width: 960px) {
		padding: 0 48px;
		flex-direction: row !important;
	}
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1152px;
}

.main {
	justify-content: center;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 10;
	order: 2;
	flex-shrink: 0;
	@media (min-width: 960px) {
		order: 1;
	}
}

.VPHero.has-image .container {
	text-align: center;
	@media (min-width: 960px) {
		text-align: left;
	}
}

.heading {
	display: flex;
	flex-direction: column;
}

.name,
.text {
	width: fit-content;
	max-width: 392px;
	letter-spacing: -0.4px;
	line-height: 40px;
	font-weight: 700;
	font-size: 32px;
	white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
	margin: 0 auto;
}

.clip {
	color: transparent;
	background-color: var(--vp-c-brand-1);
	-webkit-background-clip: text;
	background-clip: text;
}

@media (min-width: 640px) {
	.name,
	.text {
		max-width: 576px;
		line-height: 56px;
		font-size: 48px;
	}
}

@media (min-width: 960px) {
	.name,
	.text {
		line-height: 64px;
		font-size: 56px;
	}

	.VPHero.has-image .name,
	.VPHero.has-image .text {
		margin: 0;
	}
}

.tagline {
	padding-top: 8px;
	max-width: 392px;
	line-height: 28px;
	font-size: 24px;
	font-weight: 600;
	white-space: pre-wrap;
	color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
	margin: 0 auto;
}

@media (min-width: 640px) {
	.tagline {
		padding-top: 12px;
		max-width: 576px;
		line-height: 32px;
		font-size: 32px;
	}
}

@media (min-width: 960px) {
	.tagline {
		line-height: 36px;
		font-size: 40px;
	}

	.VPHero.has-image .tagline {
		margin: 0;
	}
}

.actions {
	display: flex;
	flex-wrap: wrap;
	margin: -6px;
	padding-top: 24px;
}

.VPHero.has-image .actions {
	justify-content: center;
}

@media (min-width: 640px) {
	.actions {
		padding-top: 32px;
	}
}

@media (min-width: 960px) {
	.VPHero.has-image .actions {
		justify-content: flex-start;
	}
}

.action {
	flex-shrink: 0;
	padding: 6px;
}

.image-container {
	display: flex;
	order: 1;
	justify-content: center;
	position: relative;
	@media (min-width: 960px) {
		order: 2;
		margin: 0;
		flex-grow: 1;
		margin-left: 60px;
	}
}

:deep(.image-src) {
	width: 100%;
	object-fit: contain;
	max-width: 700px;
	@media (min-width: 960px) {
		display: flex;
		flex-grow: 1;
	}
}
</style>
