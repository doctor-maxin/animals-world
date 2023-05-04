<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { storeToRefs } from 'pinia'
import { useVendorsStore } from '../vendors.store'
import { APIVendorItem } from '~/helpers/api.types'

const vendorsStore = useVendorsStore()
const { isMobile } = useDeviceWidth()
const { popularVendors } = storeToRefs(vendorsStore)
</script>
<template>
    <div v-if="popularVendors.length" class="">
        <Swiper
            :slides-per-view="isMobile ? 'auto' : 6"
            :space-between="isMobile ? 8 : 40"
        >
            <SwiperSlide
                v-for="item of popularVendors"
                :key="item.id"
                class="w-full max-w-[13.75rem]"
            >
                <nuxt-link
                    v-if="item.image"
                    :to="'/vendors/' + item.link.handle"
                    class="block border border-secondary-blue hover:border-primary-blue px-9 py-6 rounded-2.5 transition-colors aspect-[55/33] overflow-hidden"
                >
                    <img
                        :src="item.image.src.orig"
                        :alt="item.image.alt"
                        :title="item.image.title"
                        class="w-full h-full object-cover"
                    />
                </nuxt-link>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
