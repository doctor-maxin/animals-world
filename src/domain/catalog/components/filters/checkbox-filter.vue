<script setup lang="ts">
import { APIFilterValue } from "~~/src/helpers/api.types";

interface CheckBoxFilter {
	title: string;
	isActive?: boolean;
	modelValue?: any;
	values?: { [key: string | number]: APIFilterValue };
}

const emit = defineEmits(["update:modelValue", "reset"]);

const props = withDefaults(defineProps<CheckBoxFilter>(), {
	isActive: false,
	modelValue: {},
});

const value = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
	},
});
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
			<div v-if="values" class="flex flex-col gap-4 mt-4">
				<template v-for="item of Object.values(values)">
					<UiCheckBox
						v-model="value"
						:value="item.id"
						:label="item.title"
					/>
				</template>
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
