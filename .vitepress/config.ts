import { resolve } from 'node:path';

import { jsonCanvasVitePlugin } from 'json-canvas-viewer/bridges';
import { createMarkdownRenderer, defineConfig } from 'vitepress';

const srcDir = resolve(__dirname, '../pages');
const md = await createMarkdownRenderer(srcDir);

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
					{ text: 'Pointeract', link: '/pointeract' },
					{ text: 'Canvas Viewer', link: '/json-canvas-viewer' },
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
					{ text: 'Pointeract', link: '/zh-Hans/pointeract' },
					{ text: 'Canvas Viewer', link: '/zh-Hans/json-canvas-viewer' },
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
	],
	sitemap: { hostname: 'https://hesprs.github.io' },
	themeConfig: {
		logo: { src: '/logo-flat.svg', alt: 'Website logo' },
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
