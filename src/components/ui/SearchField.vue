<script setup lang="ts">
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    TransitionRoot
} from '@headlessui/vue'
interface SearchFieldProps {
    placeholder?: string
    modelValue?: string
    options: ACOption[]
}
interface SearchFieldEmits {
    (event: 'update:modelValue', payload: any): void
    (event: 'fetch', query: any): Promise<void>
}
type ACOption = {
    label: string
    id: any
}

const props = defineProps<SearchFieldProps>()
const emits = defineEmits<SearchFieldEmits>()
const { debounce } = useDebounce()
let query: Ref<string> = ref('')
const onChange = (
    event: Event & {
        target: HTMLInputElement
    }
) => {
    query.value = event.target.value
    debounce(emits('fetch', event.target.value), 300)
}

watch(query, () => emits('update:modelValue', query))
</script>
<template>
    <div class="relative">
        <Combobox v-model="query">
            <div class="relative mt-1">
                <div class="flex flex-col relative">
                    <ComboboxInput
                        :placeholder="placeholder"
                        name="global-search"
                        id="global-search"
                        :value="query"
                        class="bg-gray-500 search peer appearance-none ring-secondary-blue ring-inset rounded-xx py-3 pl-5 pr-10 outline-none transition-colors focus:ring-1 not-emp"
                        :class="{
                            'bg-white  ring-1': query.length > 0
                        }"
                        @change="onChange"
                    />
                    <nuxt-icon
                        name="40/search"
                        class="absolute text-[1.75rem] transition-colors peer-focus:text-primary-blue pointer-events-none right-2 top-2"
                    />
                </div>
                <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <ComboboxOptions
                        class="absolute scrollbar mt-1 z-10 max-h-60 w-full rounded-xl overflow-auto bg-white py-2 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-secondary-blue"
                    >
                        <div
                            v-if="options.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-5 text-gray-700"
                        >
                            Ничего не найдено
                        </div>

                        <ComboboxOption
                            v-for="person in options"
                            as="template"
                            :key="person.id"
                            :value="person.label"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative transition-colors cursor-pointer text-base font-medium select-none py-2 px-5"
                                :class="{
                                    'bg-secondary-blue': active,
                                    'text-gray-900': !active
                                }"
                            >
                                <span class="block truncate">
                                    {{ person.label }}
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>

<style>
input[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
}
input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}
/* clears the ‘X’ from Chrome */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
    display: none;
}
input:not(:empty) {
}
</style>
