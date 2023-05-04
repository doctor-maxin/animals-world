<script setup lang="ts">
import { APIVendorItem, APIVendorSection } from '~~/src/helpers/api.types'
import { useVendorsStore } from '../vendors.store'

const vendorsStore = useVendorsStore()

interface VendorSectionsProps {
    sections: APIVendorSection[]
}

const selectedSection: Ref<APIVendorSection | null> = ref(null)
const vendors: Ref<APIVendorItem[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

watch(
    selectedSection,
    async () => {
        isLoading.value = true
        if (selectedSection.value) {
            vendors.value = await vendorsStore.getVendors(
                selectedSection.value.id
            )
        } else {
            vendors.value = await vendorsStore.getVendors()
        }
        isLoading.value = false
    },
    {
        immediate: true
    }
)

defineProps<VendorSectionsProps>()
</script>
<template>
    <div>
        <div class="flex gap-5 h3 mb-10">
            <button
                @click="selectedSection = null"
                type="button"
                :class="{
                    'text-inherit': !selectedSection,
                    'text-gray-700 hover:text-primary-blue transition-colors':
                        selectedSection
                }"
            >
                Все
            </button>
            <template v-for="item of sections" :key="item.id">
                <button
                    @click="selectedSection = item"
                    type="button"
                    class="uppercase text-gray-700 hover:text-primary-blue transition-colors"
                    :class="{
                        'text-inherit': selectedSection?.id === item.id
                    }"
                >
                    {{ item.title }}
                </button>
            </template>
        </div>
        <div>
            <div v-if="isLoading" class="flex items-center">
                <UiSpinner />
            </div>
            <div v-else-if="vendors.length > 0">
                <h4 class="h4 mb-3">
                    {{ selectedSection ? selectedSection.title : 'Все' }}
                </h4>
                <ul
                    class="grid grid-flow-col grid-cols-6 grid-rows-6 gap-2 gap-x-2 lg:gap-x-10"
                >
                    <li
                        v-for="vendor of vendors"
                        :key="vendor.id"
                        class="max-w-[13.75rem]"
                    >
                        <nuxt-link
                            class="text-gray-800 hover:text-primary-blue transition-colors"
                            :to="'/vendors/' + vendor.link.handle"
                        >
                            {{ vendor.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div v-else>
                <h4>Список пуст</h4>
            </div>
        </div>
    </div>
</template>
