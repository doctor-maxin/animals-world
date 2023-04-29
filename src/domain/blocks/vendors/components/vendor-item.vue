<script setup lang="ts">
import { APIVendorItem } from '~/src/helpers/api.types'

interface VendorItemProps {
    item: APIVendorItem
}

defineProps<VendorItemProps>()
</script>
<template>
    <div
        class="group bg-white rounded-2.5 w-full overflow-hidden"
        v-if="item.image"
    >
        <nuxt-link :to="item.link.href">
            <div class="py-6 px-7">
                <img
                    class="w-full object-cover object-center aspect-[35/22]"
                    :src="item.image.src.orig"
                    :alt="item.image.alt"
                    :title="item.image.title"
                />
            </div>
        </nuxt-link>
    </div>
</template>
