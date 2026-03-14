import { inject } from 'vue';
import type { Props } from '@/ProjectCard.vue';
import { LinksKey } from '@/keys';

export function useLinks(links: Props['links']) {
	inject(LinksKey, () => {})(links);
}
