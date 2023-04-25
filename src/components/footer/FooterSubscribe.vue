<script setup lang="ts">
import Button from '../ui/Button.vue';
</script>
<template>
<div>
    <div class="caption-bold text-white mb-4">Получайте рекомендации и выгодные предложения на почту</div>
    <form class="flex max-h-12">
        <input placeholder="E-mail" class="h-full bg-white px-5 py-3 border-white border -mr-4 rounded-xx" />
        <Button variant="secondary">Подписаться </Button>
    </form>
</div>
</template>
