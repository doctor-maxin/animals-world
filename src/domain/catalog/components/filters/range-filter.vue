<script setup lang="ts">
interface RangeFilter {
	title: string;
	min: number;
	max: number;
	modelValue: number[];
}

interface RangeFilterEmits {
	(event: "update:modelValue", payload: number[]): void;
}

defineProps<RangeFilter>();
defineEmits<RangeFilterEmits>();
</script>
<template>
	<Disclosure>
		<DisclosureButton class="py-2">
			<span>{{ title }}</span>
		</DisclosureButton>
		<DisclosurePanel class="text-gray-500">
			Yes! You can purchase a license that you can share with your entire
			team.
		</DisclosurePanel>
	</Disclosure>
</template>
