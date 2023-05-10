<script setup lang="ts">
const { seo, title, loadPageData, blocks } = usePageMeta()

loadPageData('/404')
useHead({
    title: () => (title.value ? title.value : 'Страница не найдена')
})

useSeoMeta(seo)
</script>
<template>
    <div class="py-12 flex flex-col gap-20 min-h-screen items-center">
        <div
            class="bg-secondary-lightBlue rounded-3.75 py-[7.25rem] px-[7.5rem] max-w-screen-2xl w-full grid grid-cols-2 gap-15"
        >
            <div>
                <h1 class="h1 mb-7">Страница не найдена</h1>
                <p class="mb-5 text-xl">
                    Возможно, страница была удалена, либо никогда не
                    существовала. Воспользуйтесь поиском или вернитесь на
                    главную
                </p>
                <nuxt-link to="/" class="flex items-center gap-1">
                    <nuxt-icon
                        class="text-[2.5rem] mb-0 text-primary-blue"
                        name="32/home"
                    />
                    <span class="label-semibold">На главную</span>
                </nuxt-link>
            </div>
            <div
                class="text-[18.75rem] leading-[15rem] font-bold flex items-center gap-7"
            >
                <span>4</span>
                <span
                    class="border-black flex items-center justify-center rounded-full"
                >
                    <ui-swin class="w-full" />
                </span>
                <span>4</span>
            </div>
        </div>
        <div>
            <!-- <blocks-render :blocks="blocks" /> -->
        </div>
    </div>
</template>
