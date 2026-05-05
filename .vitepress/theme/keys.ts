import type { InjectionKey } from 'vue';
import type { Props } from './ProjectCard.vue';

const LinkIconsKey: InjectionKey<(icons: Props['linkIcons']) => void> = Symbol('icons');
export default LinkIconsKey;
