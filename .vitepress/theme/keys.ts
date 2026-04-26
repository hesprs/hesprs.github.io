import type { InjectionKey } from 'vue';
import type { Props } from './ProjectCard.vue';

export const LinkIconsKey: InjectionKey<(icons: Props['linkIcons']) => void> = Symbol('icons');
