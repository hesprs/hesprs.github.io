import type { ThemeConfig } from 'vitepress-theme-trito';
import { jsonCanvasVitePlugin } from 'json-canvas-viewer/bridges';
import { resolve } from 'node:path';
import { createMarkdownRenderer, defineConfig } from 'vitepress';

const srcDir = resolve(__dirname, '../pages');
const md = await createMarkdownRenderer(srcDir);

export default defineConfig<ThemeConfig>({
	srcDir,
	outDir: resolve(__dirname, '../dist'),
	cleanUrls: true,
	lastUpdated: true,
	rewrites: { 'en/:rest*': ':rest*' },
	locales: {
		root: {
			title: 'HESPERI',
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
							{ text: 'Pointeract', link: '/projects/pointeract' },
							{ text: 'JSON Canvas Viewer', link: '/projects/json-canvas-viewer' },
							{ text: 'Trito', link: '/projects/trito' },
						],
					},
					{
						text: 'Researches',
						items: [{ text: 'SynthKernel', link: '/researches/synthkernel' }],
					},
				],
				footer: {
					message:
						'All content licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> License.',
					copyright: 'Copyright © 2025-2026 Hēsperus',
				},
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
			title: '赫斯珀里',
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
							{ text: 'Pointeract', link: '/zh-Hans/projects/pointeract' },
							{
								text: 'JSON Canvas Viewer',
								link: '/zh-Hans/projects/json-canvas-viewer',
							},
							{ text: 'Trito', link: '/zh-Hans/projects/trito' },
						],
					},
					{
						text: '研究',
						items: [{ text: 'SynthKernel', link: '/zh-Hans/researches/synthkernel' }],
					},
				],
				footer: {
					message:
						'所有内容依据 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> 许可证授权。',
					copyright: '版权所有 © 2025-2026 Hēsperus',
				},
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
				defer: '',
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
			{ icon: 'x', link: 'https://x.com/Hesprs' },
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
		ssr: {
			noExternal: ['vitepress-theme-trito'],
		},
	},
});
