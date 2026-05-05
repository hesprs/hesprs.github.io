import { inject } from 'vue';
import type { Props } from '@/ProjectCard.vue';
import LinkIconsKey from '@/keys';

export default function useLinkIcons(links: Props['linkIcons']) {
	inject(LinkIconsKey, () => {})(links);
}
