<script setup lang="ts">
interface CheckBoxProps {
    label: string;
    value: string | number;
    modelValue: boolean[];
}

defineEmits(['update:modelValue'])

defineProps<CheckBoxProps>()
</script>
<template>
    <label class="flex gap-3 cursor-pointer">
        <input 
            type="checkbox" 
            :id="value + ''" 
            :value="value" 
            class="bg-gray-500 mt-0.5 appearance-none cursor-pointer w-5 h-5 border border-gray-500 
            rounded hover:border-primary-blue checked:bg-primary-blue checked:border-primary-blue bg-no-repeat bg-center bg-cover checked:bg-[url('~/assets/icons/20/check-white.svg')]
            " 
            />
        <span class="text-primary-text label-regular">{{ label }}</span>
    </label>
</template>