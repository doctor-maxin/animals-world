<script setup lang="ts">
import Button from '../ui/Button.vue'
</script>
<template>
    <div>
        <div class="w-full h-[1px] lg:hidden bg-white bg-opacity-10 mb-4"></div>

        <div class="caption-bold text-white mb-4">
            Получайте рекомендации и выгодные предложения на почту
        </div>
        <form class="flex max-h-10 lg:max-h-12 w-full overflow-hidden">
            <input
                placeholder="E-mail"
                class="h-full w-full bg-white px-5 py-2 lg:py-3 border-white border -mr-4 rounded-xx"
            />
            <div class="mr-4">
                <Button
                    class="!py-2 leading-[1.5rem] lg:!py-3 !border-0"
                    variant="secondary"
                    >Подписаться
                </Button>
            </div>
        </form>
    </div>
</template>
