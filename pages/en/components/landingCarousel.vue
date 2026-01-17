<script lang="ts" setup>
import 'vue3-carousel/carousel.css';
import { Carousel, type CarouselConfig, Navigation, Slide } from 'vue3-carousel';
import { VPLink } from '@';

const carouselConfig: Partial<CarouselConfig> = {
	itemsToShow: 0.5,
	wrapAround: true,
	gap: 30,
	mouseDrag: false,
	autoplay: 6000,
};

const projects = [
	{
		title: 'JSON Canvas Viewer',
		logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg',
		description:
			'A front-end library that ships an extensible viewer for JSON Canvas, with easy integration with any existing frameworks and paradigms.',
		descriptionShort: 'View JSON canvas directly in your browser.',
		link: '/json-canvas-viewer',
	},
	{
		title: 'Pointeract',
		logo: 'https://pointeract.consensia.cc/logo.svg',
		description:
			'A front-end library that resolves user interactions and dispatches pan zoom events, lightweight and extensible alternative to Hammer.js.',
		descriptionShort: 'Super extensible human gesture recognizer.',
		link: '/pointeract',
	},
];
</script>

<template>
	<h1 class="upper">See My Projects</h1>
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
.upper {
	margin-top: 48px;
	margin-bottom: 16px;
	@media (min-width: 640px) {
		margin-top: 64px;
	}
}

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
	text-decoration: none;
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
		line-height: 1;
		margin-top: auto;
	}
	.description {
		grid-area: description;
		color: var(--vp-c-text-1);
		font-size: var(--description-size);
	}
	.description-short {
		color: var(--vp-c-text-1);
		font-size: var(--description-size);
		display: none;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
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
	}
}
</style>
