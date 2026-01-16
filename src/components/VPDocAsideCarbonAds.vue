<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import type { TritoTheme } from '@/shared';

defineProps<{
	carbonAds: TritoTheme.CarbonAdsOptions;
}>();

const VPCarbonAds = __CARBON__ ? defineAsyncComponent(() => import('./VPCarbonAds.vue')) : () => null;
</script>

<template>
	<div class="VPDocAsideCarbonAds">
		<VPCarbonAds :carbon-ads="carbonAds" />
	</div>
</template>
