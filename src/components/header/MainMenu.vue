<script setup lang="ts">
import SearchField from '~/components/ui/SearchField.vue'

const search: Ref<string> = ref('')
const options = [
    { id: 1, label: 'Красноярск' },
    { id: 2, label: 'Красноярск' },
    { id: 3, label: 'Красноярск' }
]
</script>
<template>
    <div class="flex items-center gap-6">
        <ui-button class="!border-0 w-fit min-w-fit">
            <span class="flex items-center">
                <nuxt-icon
                    class="text-[2.5rem] -my-3 -ml-2"
                    name="40/catalog-search"
                />
                <span>КАТАЛОГ</span>
            </span>
        </ui-button>
        <search-field
            :options="options"
            class="w-full"
            v-model="search"
            placeholder="Поиск по товарам"
        />
        <nav>
            <ul class="flex items-center gap-5">
                <nuxt-link to="/" class="flex items-center gap-1 group">
                    <nuxt-icon name="40/promo" class="text-[2.5rem]" filled />
                    <span class="group-hover:text-primary-blue font-semibold"
                        >Акции</span
                    >
                </nuxt-link>
                <nuxt-link to="/" class="flex items-center gap-1 group">
                    <nuxt-icon
                        name="40/favourites"
                        class="text-[2.5rem] text-primary-blue"
                    />
                    <span class="group-hover:text-primary-blue font-semibold"
                        >Избранное</span
                    >
                </nuxt-link>
                <nuxt-link to="/" class="flex items-center gap-1 group">
                    <nuxt-icon
                        name="40/account"
                        class="text-[2.5rem] text-primary-blue"
                    />
                    <span
                        class="group-hover:text-primary-blue font-semibold whitespace-nowrap"
                        >Личный кабинет</span
                    >
                </nuxt-link>
                <nuxt-link to="/" class="flex items-center gap-1 group">
                    <nuxt-icon
                        name="40/bag"
                        class="text-[2.5rem] text-primary-blue"
                    />
                    <span class="group-hover:text-primary-blue font-semibold"
                        >Корзина</span
                    >
                </nuxt-link>
            </ul>
        </nav>
    </div>
</template>
