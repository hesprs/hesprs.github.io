import type { InjectionKey } from 'vue';
import type { Props } from './ProjectCard.vue';

export const LinksKey: InjectionKey<(links: Props['links']) => void> = Symbol('icons');
