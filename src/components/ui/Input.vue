<script setup lang="ts">
interface UIInput {
	type: HTMLInputElement["type"];
	placeholder?: string;
    preLabel?: string;
	modelValue: string | number;
}

const { type } = withDefaults(defineProps<UIInput>(), {
	type: "text",
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event: any) => {
	if (type === "number") {
		//@ts-ignore
		emit("update:modelValue", Number(event?.target.value));
	} else {
		//@ts-ignore
		emit("update:modelValue", event?.target.value);
	}
};
</script>
<template>
    <label
    :pre-label="preLabel"
    class="after:content-[attr(pre-label)] relative flex after:text-primary-blue after:left-5 items-center after:absolute"
    >
	<input
		:type="type"
		:placeholder="placeholder"
		@input="onChange"
		:value="modelValue"
		class="pr-5 w-full text-primary-text py-3 rounded-xl border border-secondary-blue 
        label-medium transition-colors placeholder:text-gray-800 placeholder:text-opacity-80 
        focus:border-primary-blue hover:border-primary-blue disabled:bg-gray-500 disabled:border-gray-600
        disabled:text-gray-700"
        :class="{'pl-10': preLabel, 'pl-5': !preLabel}"
	/>
</label>
</template>
