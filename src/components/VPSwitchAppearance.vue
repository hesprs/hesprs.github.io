<script lang="ts" setup>
import { IconMoonStars, IconSun } from '@tabler/icons-vue';
import { inject, ref, watchPostEffect } from 'vue';
import { useData } from '@/composables/data';
import { useI18n } from '@/composables/i18n';
import { toggleAppearanceKey } from '@/shared';

const { isDark } = useData();
const i18n = useI18n();

const toggleAppearance = inject(toggleAppearanceKey, async () => {
	isDark.value = !isDark.value;
});

const switchTitle = ref('');

watchPostEffect(() => {
	switchTitle.value = isDark.value ? i18n.value.switchLight : i18n.value.switchDark;
});
</script>

<template>
	<div :title="switchTitle" class="nav-btn" @click="toggleAppearance">
		<IconMoonStars class="moon icon" />
		<IconSun class="sun icon" />
	</div>
</template>

<style lang="scss" scoped>
.moon,
.sun {
	position: absolute;
}
.sun {
	opacity: 1;
	.dark & {
		opacity: 0;
	}
}

.moon {
	opacity: 0;
	.dark & {
		opacity: 1;
	}
}
</style>
