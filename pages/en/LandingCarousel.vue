<script lang="ts" setup>
import 'vue3-carousel/carousel.css';
import { Carousel, type CarouselConfig, Navigation, Slide } from 'vue3-carousel';
import { VPLink } from 'vitepress-theme-trito';

const carouselConfig: Partial<CarouselConfig> = {
	itemsToShow: 0.5,
	wrapAround: true,
	gap: 30,
	mouseDrag: false,
	autoplay: 6000,
};

const projects = [
	{
		title: 'SynthKernel',
		logo: 'https://github.com/hesprs/synthkernel/raw/main/assets/logo.svg',
		description:
			'A novel architecture for modular monolith development in TypeScript. It leverages the power of type orchestration and runtime dynamics to deliver a type-safe, scalable, and highly modular software paradigm.',
		descriptionShort:
			'A novel TypeScript software architecture that aims to redefine modularity practices.',
		link: '/researches/synthkernel',
	},
	{
		title: 'JSON Canvas Viewer',
		logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg',
		description:
			'A front-end library that ships an extensible viewer for JSON Canvas, with easy integration with any existing frameworks and paradigms.',
		descriptionShort: 'View JSON canvas directly in your browser.',
		link: '/projects/json-canvas-viewer',
	},
	{
		title: 'Pointeract',
		logo: 'https://pointeract.consensia.cc/logo.svg',
		description:
			'A front-end library that resolves user interactions and dispatches pan zoom events, lightweight and extensible alternative to Hammer.js.',
		descriptionShort: 'Super extensible human gesture recognizer.',
		link: '/projects/pointeract',
	},
	{
		title: 'Trito',
		logo: 'https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/logo.svg',
		description:
			'A theme for VitePress, a static site generator. Focuses on UI/UX polishes and is powering the website you are visiting right now.',
		descriptionShort: 'Visually refurbished VitePress default theme.',
		link: '/projects/trito',
	},
];
</script>

<template>
	<Carousel class="lower carousel" v-bind="carouselConfig">
		<Slide v-for="(project, index) in projects" :key="index">
			<VPLink :href="project.link" class="carousel__item">
				<img class="logo" :src="project.logo" :alt="`${project.title} Logo`" />
				<h2 class="title">{{ project.title }}</h2>
				<p class="description">{{ project.description }}</p>
				<p class="description-short">{{ project.descriptionShort }}</p>
			</VPLink>
		</Slide>

		<template #addons>
			<Navigation />
		</template>
	</Carousel>
</template>

<style lang="scss" scoped>
.lower {
	margin-bottom: 48px;
	@media (min-width: 640px) {
		margin-bottom: 64px;
	}
}

.carousel {
	--carousel-height: 300px;
	--image-text-padding: 40px;
	--carousel-item-margin: 150px;
	--title-size: 50px;
	--description-size: 18px;
	@media (max-width: 1260px) {
		--carousel-item-margin: 100px;
		--carousel-height: 270px;
		--title-size: 40px;
		--image-text-padding: 30px;
		--description-size: 16px;
	}
	@media (max-width: 900px) {
		--carousel-item-margin: 30px;
	}
	@media (max-width: 768px) {
		--image-text-padding: 0;
		--carousel-item-margin: 10px;
		--carousel-height: fit-content;
	}
	height: var(--carousel-height);
}

.carousel__item {
	display: grid;
	grid-template-areas:
		'logo title'
		'logo description';
	grid-template-columns: calc(var(--carousel-height) + var(--image-text-padding)) 1fr;
	grid-template-rows: 2fr 3fr;
	margin: 0 var(--carousel-item-margin);
	.logo {
		grid-area: logo;
		margin: auto 0;
		padding-right: var(--image-text-padding);
	}
	.title {
		color: var(--vp-c-brand-1);
		grid-area: title;
		border: none;
		font-size: var(--title-size);
		font-weight: 600;
		line-height: 1;
		margin-top: auto;
	}
	.description {
		grid-area: description;
		color: var(--vp-c-text-1);
		font-weight: normal;
		font-size: var(--description-size);
		margin-top: 1rem;
	}
	.description-short {
		color: var(--vp-c-text-1);
		font-size: var(--description-size);
		display: none;
		font-weight: normal;
		text-align: center;
		margin: 1rem auto 0;
	}
	@media (max-width: 768px) {
		display: block;
		.logo,
		.title {
			margin-left: auto;
			margin-right: auto;
		}
		.description {
			display: none;
		}
		.description-short {
			display: block;
		}
		.title {
			text-align: center;
			margin-top: 0;
		}
		.logo {
			width: 90%;
			max-width: 300px;
		}
		.title,
		.description-short {
			max-width: calc(200px + 40vw);
		}
	}
}
</style>
