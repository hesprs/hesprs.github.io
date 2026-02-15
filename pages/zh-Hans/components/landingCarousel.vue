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
		title: 'JSON Canvas Viewer',
		logo: 'https://github.com/hesprs/json-canvas-viewer/raw/main/assets/logo.svg  ',
		description:
			'一个前端库，提供可扩展的 JSON Canvas 查看器，能够轻松集成到任何现有框架和范式中。',
		descriptionShort: '直接在浏览器中查看 JSON 画布。',
		link: '/zh-Hans/json-canvas-viewer',
	},
	{
		title: 'Pointeract',
		logo: 'https://pointeract.consensia.cc/logo.svg  ',
		description:
			'一个前端库，用于解析用户交互并派发平移缩放事件，是 Hammer.js 的轻量级且可扩展的替代方案。',
		descriptionShort: '高度可扩展的人类手势识别器。',
		link: '/zh-Hans/pointeract',
	},
	{
		title: 'Trito',
		logo: 'https://github.com/hesprs/vitepress-theme-trito/raw/main/assets/logo.svg',
		description:
			'一个为静态网站生成工具 VitePress 打造的主题，专注于 UI/UX 细节优化，当前你正在访问的网站即由它驱动。',
		descriptionShort: '视觉焕然一新的 VitePress 默认主题。',
		link: '/zh-Hans/trito',
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
