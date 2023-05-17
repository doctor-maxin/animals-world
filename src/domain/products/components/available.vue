<script setup lang="ts">
interface ProductCardAvailableProps {
	level: number;
}
const props = defineProps<ProductCardAvailableProps>();

const available = computed(() => {
	if (props.level === 0) return 0;
	if (props.level < 5) return 1;
	if (props.level < 15) return 2;
	return 3;
});
</script>
<template>
	<div class="flex items-center gap-2">
		<span class="text-gray-700 caption-semibold">{{
			available > 0 ? "В наличии" : "Нет в наличии"
		}}</span>
		<div
			class="flex gap-x-0.5"
			v-if="available > 0"
			:class="{
				success: available >= 3,
				danger: available < 2,
			}"
		>
			<span class="available-level" :class="{ active: available > 0 }" />
			<span class="available-level" :class="{ active: available >= 1 }" />
			<span class="available-level" :class="{ active: available >= 2 }" />
			<span class="available-level" :class="{ active: available >= 3 }" />
		</div>
	</div>
</template>
<style scoped lang="scss">
.available-level {
	border-radius: 0.125rem;
	background-color: #d9d9d9;
	width: 0.375rem;
	height: 0.375rem;

	&.active {
		background-color: #ffd540;
	}
}
.success .available-level {
	&.active {
		@apply bg-system-success;
	}
}

.danger .available-level {
	&.active {
		@apply bg-system-danger;
	}
}
</style>
