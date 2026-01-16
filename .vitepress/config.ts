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
	description: "Hēsperus' (hesprs) portfolio, including information about Hēsperus' personalities, hobbies, and project introductions and demos.",
	rewrites: { 'en/:rest*': ':rest*' },
	locales: {
		root: { label: 'English', lang: 'en' },
		ja: { label: '日本語', lang: 'ja' },
	},
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['meta', { name: 'color-scheme', content: 'dark light' }],
		[
			'meta',
			{
				name: 'keywords',
				content: 'hesprs,hesperus,pointeract,projects,portfolio,json canvas viewer',
			},
		],
	],
	sitemap: { hostname: 'https://hesprs.github.io' },
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Pointeract', link: '/pointeract' },
			{ text: 'Canvas Viewer', link: '/json-canvas-viewer' },
		],
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
