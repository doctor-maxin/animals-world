<script setup lang="ts">
import { APIPageBlock } from '~~/src/helpers/api.types';
import { useNewsStore } from '../news/news.store';
import { useProductsStore } from '../products/products.store';

interface BlocksRenderProps {
    blocks: APIPageBlock[];
}

const newsStore = useNewsStore();
const productsStore = useProductsStore()

const getBlockType = (block: APIPageBlock['block_type']) => {
    switch (block) {
        case 'goods': return 'BlocksProductsBlock';
        case 'news': return 'BlocksNewsBlock';
    }
    return 'div'
};

const props = defineProps<BlocksRenderProps>()
watch(() => props.blocks, async () => {
    const blocks = props.blocks
    if (blocks.length) {
        for (const block of blocks) {
            if (block.block_type === 'news') {
                const news = await newsStore.getNews(3)
                if (news && news.length) {
                    block.list = news
                } else block.list = []
            } else if (block.block_type === 'goods') {
            console.log('block', block.good_ids)

                const products = await productsStore
                    .getList(block.good_ids ? Object.values( block.good_ids) : [])
                    .catch((err) => console.log('ERR', err))
                if (products && products.length) {
                    block.list = products
                } else block.list = []
            }
        }
    }
}, {
    immediate: true,
    deep: true
})
</script>
<template>
    <div>
        <div v-for="(block, index) in blocks" :key="index">
            <component :is="getBlockType(block.block_type)" :title="block.title" :list="block.list" />
        </div>
    </div>
</template>