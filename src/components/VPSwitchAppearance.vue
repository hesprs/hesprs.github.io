<script lang="ts" setup>
import { IconMoonStars, IconSun } from '@tabler/icons-vue';
import { inject, ref, watchPostEffect } from 'vue';
import { useData } from '@/composables/data';
import { toggleAppearanceKey } from '@/store';
import VPSwitch from './VPSwitch.vue';

const { isDark, theme } = useData();

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
	<div :title="switchTitle" class="nav-btn" @click="toggleAppearance">
		<IconMoonStars class="moon icon" />
		<IconSun class="sun icon" />
	</div>
</template>

<style lang="scss" scoped>
.moon, .sun {
        position: absolute;
}
.sun {
	opacity: 1;
    .dark & { opacity: 0 }
}

.moon {
	opacity: 0;
    .dark & { opacity: 1 }
}

</style>
