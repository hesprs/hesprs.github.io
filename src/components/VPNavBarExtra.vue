<script lang="ts" setup>
import { computed } from 'vue';
import { useData } from '@/composables/data';
import { useI18n } from '@/composables/i18n';
import { useLangs } from '@/composables/langs';
import VPFlyout from './VPFlyout.vue';
import VPMenuLink from './VPMenuLink.vue';
import VPSwitchAppearance from './VPSwitchAppearance.vue';

const { site } = useData();
const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
const i18n = useI18n();

const hasExtraContent = computed(
	() => (localeLinks.value.length && currentLang.value.label) || site.value.appearance,
);
</script>

<template>
	<VPFlyout v-if="hasExtraContent" class="VPNavBarExtra" label="extra navigation">
		<div v-if="localeLinks.length && currentLang.label" class="group translations">
			<p class="trans-title">{{ currentLang.label }}</p>

			<template v-for="locale in localeLinks" :key="locale.link">
				<VPMenuLink :item="locale" :lang="locale.lang" :dir="locale.dir" />
			</template>
		</div>

		<div
			v-if="
				site.appearance &&
				site.appearance !== 'force-dark' &&
				site.appearance !== 'force-auto'
			"
			class="group"
		>
			<div class="item appearance">
				<p class="label">{{ i18n.appearance }}</p>
				<div class="appearance-action">
					<VPSwitchAppearance />
				</div>
			</div>
		</div>
	</VPFlyout>
</template>

<style scoped>
.VPNavBarExtra {
	display: none;
	margin-right: -12px;
}

@media (min-width: 768px) {
	.VPNavBarExtra {
		display: block;
	}
}

@media (min-width: 1280px) {
	.VPNavBarExtra {
		display: none;
	}
}

.trans-title {
	padding: 0 24px 0 12px;
	line-height: 32px;
	font-size: 14px;
	font-weight: 700;
	color: var(--vp-c-text-1);
}

.item.appearance {
	display: flex;
	align-items: center;
	padding: 0 12px;
}

.item.appearance {
	min-width: 176px;
}

.appearance-action {
	margin-right: -2px;
}
</style>
