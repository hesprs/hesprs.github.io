import { resolve } from 'node:path';

import { jsonCanvasVitePlugin } from 'json-canvas-viewer/bridges';
import { createMarkdownRenderer, defineConfig } from 'vitepress';
import type { ThemeConfig } from 'vitepress-theme-trito';

const srcDir = resolve(__dirname, '../pages');
const md = await createMarkdownRenderer(srcDir);

export default defineConfig<ThemeConfig>({
	srcDir,
	outDir: resolve(__dirname, '../dist'),
	cleanUrls: true,
	lastUpdated: true,
	title: 'HESPERI',
	rewrites: { 'en/:rest*': ':rest*' },
	locales: {
		root: {
			description:
				"Hēsperus' (hesprs) portfolio, including information about Hēsperus' personalities, hobbies, and project introductions and demos.",
			label: 'English',
			lang: 'en',
			themeConfig: {
				nav: [
					{ text: 'Home', link: '/' },
					{
						text: 'Projects',
						items: [
							{ text: 'Pointeract', link: '/pointeract' },
							{ text: 'JSON Canvas Viewer', link: '/json-canvas-viewer' },
							{ text: 'Trito', link: '/trito' },
						],
					},
				],
			},
			head: [
				[
					'meta',
					{
						name: 'keywords',
						content: 'hesprs,hesperus,pointeract,projects,portfolio,json canvas viewer',
					},
				],
			],
		},
		'zh-Hans': {
			description:
				'Hēsperus（hesprs）的作品集，包含有关 Hēsperus 的个性、爱好以及项目介绍和演示。',
			label: '简体中文',
			lang: 'zh-Hans',
			themeConfig: {
				nav: [
					{ text: '首页', link: '/zh-Hans/' },
					{
						text: '项目',
						items: [
							{ text: 'Pointeract', link: '/zh-Hans/pointeract' },
							{ text: 'JSON Canvas Viewer', link: '/zh-Hans/json-canvas-viewer' },
							{ text: 'Trito', link: '/zh-Hans/trito' },
						],
					},
				],
			},
			head: [
				[
					'meta',
					{
						name: 'keywords',
						content: 'hesprs,hesperus,pointeract,projects,portfolio,json canvas viewer',
					},
				],
			],
		},
	},
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'color-scheme', content: 'dark light' }],
		[
			'script',
			{
				differ: '',
				src: 'https://analytics.consensia.cc/script.js',
				'data-website-id': 'c4bc0d71-e07e-4f3b-a1ac-c2665eef13ec',
			},
		],
	],
	sitemap: { hostname: 'https://hesprs.github.io' },
	themeConfig: {
		logo: { src: '/logo-flat.svg', alt: 'Website logo' },
		logoLarge: { dark: '/logo-dark.svg', light: '/logo.svg', alt: 'Website large logo' },
		aside: 'left',
		search: { provider: 'local' },
		socialLinks: [
			{ icon: 'npm', link: 'https://www.npmjs.com/~hesprs' },
			{ icon: 'github', link: 'https://github.com/hesprs' },
		],
	},
	markdown: {
		image: { lazyLoading: true },
	},
	vite: {
		publicDir: resolve(__dirname, '../public'),
		plugins: [jsonCanvasVitePlugin(md.render)],
		resolve: {
			alias: [
				{
					find: '@',
					replacement: resolve(__dirname, '../src/'),
				},
				{
					find: '$',
					replacement: resolve(__dirname, '../pages/'),
				},
			],
		},
	},
});
