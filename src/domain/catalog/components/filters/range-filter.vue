<script setup lang="ts">
interface RangeFilter {
	title: string;
	min?: number;
	max?: number;
	isActive: boolean;
	minValue: number;
	maxValue: number;
}


const emit = defineEmits(["update:minValue", "update:maxValue", 'reset']);

const props = defineProps<RangeFilter>();

const minValue = computed({
	get() {
		return props.minValue
	},
	set(value) {
		emit('update:minValue', value)
	}
})

const maxValue = computed({
	get() {
		return props.maxValue
	},
	set(value) {
		emit('update:maxValue', value)
	}
})
</script>
<template>
	<UiFilterAccardion>
		<template #title>
			<span class="h4">{{ title }}</span>
			<span
				v-if="isActive"
				class="absolute w-2.5 h-2.5 bg-primary-blue rounded-full"
			></span>
		</template>
		<template #content>
			<div>
				<UiSlider
					:max="max"
					:min="min"
					v-model:max-value="maxValue"
					v-model:min-value="minValue"
				/>
			</div>	
			<button
				type="button"
				@click="$emit('reset')"
				v-if="isActive"
				class="text-primary-blue caption-semibold"
			>
				Сбросить
			</button>
		</template>
	</UiFilterAccardion>
</template>
