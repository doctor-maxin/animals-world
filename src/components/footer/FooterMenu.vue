<script setup lang="ts">
import { APIMenuLinks } from '~~/src/helpers/api.types'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useDeviceWidth } from '~/composables/useDeviceWidth'

interface FooterMenuProps {
    items: APIMenuLinks | undefined | null
}

const { isMobile } = useDeviceWidth()

defineProps<FooterMenuProps>()
</script>
<template>
    <div
        v-if="items && items.length"
        class="grid grid-cols-1 gap-3 lg:gap-0 lg:grid-cols-3 items-start footer-menu"
    >
        <Disclosure v-for="menu of items" :key="menu.title" v-slot="{ open }">
            <div
                :class="{
                    'lg:row-start-2 lg:col-start-2':
                        !menu.children || menu.children?.length === 0
                }"
                class="flex flex-col gap-3 lg:gap-2 text-white"
            >
                <DisclosureButton
                    v-if="menu.link.type === 'url'"
                    class="font-bold flex items-center justify-start"
                >
                    <span class="leading-[1.25rem] text-sm lg:text-base mr-1">
                        {{ menu.title }}
                    </span>
                    <nuxt-icon
                        v-if="menu.children && menu.children.length"
                        name="20/arrow"
                        class="flex items-center justify-center icon lg:hidden"
                        :class="open ? '-rotate-90' : 'rotate-90'"
                    />
                </DisclosureButton>
                <DisclosurePanel
                    :static="!isMobile || false"
                    v-if="menu.children && menu.children.length"
                    class="flex flex-col gap-2"
                >
                    <template
                        v-for="sublink of menu.children"
                        :key="sublink.title"
                    >
                        <a
                            v-if="sublink.link.type === 'url'"
                            :href="sublink.link.href"
                            >{{ sublink.title }}</a
                        >
                        <a
                            v-else-if="sublink.link.type === 'catalog_section'"
                            :href="sublink.link.handle"
                            >{{ sublink.title }}</a
                        >
                    </template>
                </DisclosurePanel>
            </div>
        </Disclosure>
    </div>
</template>
<style lang="scss">
.footer-menu {
    .icon {
        @apply h-4 w-4;
        svg {
            margin: 0;
        }
    }
}
</style>
