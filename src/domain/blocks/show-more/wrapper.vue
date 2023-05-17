<script setup lang="ts">
interface BlocksShowMoreWrapperProps {
  maxHeightContent: number;
}

const props = withDefaults(defineProps<BlocksShowMoreWrapperProps>(), {
  maxHeightContent: 32,
});

const content: Ref<HTMLElement | null> = ref(null);

const contentIsLarge: Ref<boolean> = ref(false);
const isOpen: Ref<boolean> = ref(false);

const checkContentHeight = () => {
  if (content.value)
    contentIsLarge.value = content.value.offsetHeight >= props.maxHeightContent;
};

const maxHeightStyle = computed(() => {
  if (contentIsLarge.value === true) {
    return isOpen.value === true
      ? `10000rem`
      : `${props.maxHeightContent / 16}rem`;
  }
  return `100rem`;
});
const onClick = () => {
  isOpen.value = !isOpen.value;
};
onMounted(() => {
  window.addEventListener("resize", checkContentHeight);
  checkContentHeight();
});
onUnmounted(() => window.removeEventListener("resize", checkContentHeight));
</script>
<template>
  <div>
    <Transition>
      <div
        class="duration-300 overflow-hidden h-auto transition-all"
        ref="content"
        :style="{ maxHeight: maxHeightStyle }"
      >
        <div>
          <slot />
        </div>
      </div>
    </Transition>
    <Transition>
      <div v-if="contentIsLarge">
        <slot name="button" :open="isOpen" :click="onClick" />
      </div>
    </Transition>
  </div>
</template>
