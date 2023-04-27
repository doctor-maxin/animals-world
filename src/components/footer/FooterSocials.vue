<script setup lang="ts">
import { useMainStore } from '~/domain/main/main.store'
const mainStore = useMainStore()
const { data } = useAsyncData('main-social', () => mainStore.getSocials())
</script>
<template>
    <div class="flex gap-1 justify-center lg:justify-end items-end" v-if="data">
        <a
            v-for="(item, index) of data"
            :href="item.url"
            :title="item.title"
            :key="item.url"
            class="w-12 h-12 social cursor-pointer"
        >
            <object
                :data="item.icon"
                type="image/svg+xml"
                :id="'svg-' + index"
                :title="item.title"
                :alt="item.title"
            />
        </a>
    </div>
</template>
<style>
.social path {
    background-color: red;
}
#svg-1 :root path,
#svg-1 :root svg {
    fill: #fff;
    stroke: red;
}

.social object {
    fill: #fff;
    stroke: red;
}
.social svg {
    fill: #fff;
    stroke: red;
}
.social embed path {
    fill: #fff;
    stroke: red;
}
</style>
