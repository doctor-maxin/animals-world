<script setup lang="ts">
interface BlocksShowMoreWrapperProps {
    maxHeightContent: number
}

const props = withDefaults(defineProps<BlocksShowMoreWrapperProps>(), {
    maxHeightContent: 32
})

const content: Ref<HTMLElement | null> = ref(null)

const contentIsLarge: Ref<boolean> = ref(false)

const checkContentHeight = () => {
    if (content.value)
        contentIsLarge.value =
            content.value.offsetHeight > props.maxHeightContent
}

const maxHeightStyle = computed(() => {
    return contentIsLarge.value ? `${props.maxHeightContent / 16}rem` : `100rem`
})
const onClick = () => {
    console.log('ONCLIOCK')
}
onMounted(() => {
    window.addEventListener('resize', checkContentHeight)
    checkContentHeight()
})
onUnmounted(() => window.removeEventListener('resize', checkContentHeight))
</script>
<template>
    <div>
        <div
            class="duration-300 overflow-hidden h-auto"
            ref="content"
            :style="{ maxHeight: maxHeightStyle }"
        >
            <slot />
        </div>
        <Transition>
            <div>
                <slot name="button" @click="onClick" />
            </div>
        </Transition>
    </div>
</template>
