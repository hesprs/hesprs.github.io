import type { App } from 'vue';
import '@/styles.scss';
import Theme from 'vitepress-theme-trito';
import ProjectPage from '@/ProjectPage.vue';

export default {
	extends: Theme,
	enhanceApp({ app }: { app: App }) {
		app.component('project', ProjectPage);
	},
};
