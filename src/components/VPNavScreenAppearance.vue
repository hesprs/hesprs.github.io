<script lang="ts" setup>
import { inject, ref, watchPostEffect } from 'vue';
import { useData } from '@/composables/data';
import { toggleAppearanceKey } from '@/store';
import VPSwitch from './VPSwitch.vue';

const { site, theme, isDark } = useData();
const toggleAppearance = inject(toggleAppearanceKey, async () => {
	isDark.value = !isDark.value;
});
const switchTitle = ref('');

watchPostEffect(() => {
	switchTitle.value = isDark.value
		? theme.value.lightModeSwitchTitle || 'Switch to light theme'
		: theme.value.darkModeSwitchTitle || 'Switch to dark theme';
});
</script>

<template>
	<div
		v-if="
      site.appearance &&
      site.appearance !== 'force-dark' &&
      site.appearance !== 'force-auto'
    "
		class="VPNavScreenAppearance"
	>
		<p class="text">{{ theme.darkModeSwitchLabel || 'Appearance' }}</p>
		<VPSwitch
			:title="switchTitle"
			class="VPSwitchAppearance"
			:aria-checked="isDark"
			@click="toggleAppearance"
		>
			<span class="vpi-sun sun" />
			<span class="vpi-moon moon" />
		</VPSwitch>
	</div>
</template>

<style lang="scss" scoped>
.VPNavScreenAppearance {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	padding: 12px 14px 12px 16px;
	background-color: var(--vp-c-bg-soft);
}

.text {
	line-height: 24px;
	font-size: 12px;
	font-weight: 500;
	color: var(--vp-c-text-2);
}

.sun {
    opacity: 1;
    .dark & { opacity: 0 }
}

.moon {
    opacity: 0;
    .dark & { opacity: 1 }
}

.dark .VPSwitchAppearance :deep(.check) {
    transform: translateX(18px);
}
</style>
