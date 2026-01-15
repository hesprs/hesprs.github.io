export default {
	name: 'store',
};

import type { InjectionKey } from 'vue';

export const toggleAppearanceKey: InjectionKey<
	(coords: { clientX: number; clientY: number }) => Promise<void>
> = Symbol('toggleAppearance');
