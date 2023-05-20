<script setup lang="ts">
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogPanel,
	DialogTitle,
} from "@headlessui/vue";
import {ModalScreen} from '~~/src/helpers/modal.types'


const isOpen = ref(true);
const activeScreen: Ref<ModalScreen> = ref("screen1");

const switchScreen = (screen: ModalScreen) => {
	activeScreen.value = screen;
};

const closeModal = () => {
	isOpen.value = false;
};

const openModal = () => {
	isOpen.value = true;
};

defineExpose({ openModal, closeModal, switchScreen })
</script>
<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-50">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-xl transform overflow-hidden rounded-3.5  bg-white py-15 px-16 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="text-lg font-medium leading-6 text-gray-900"
							>
								<slot name="header"></slot>
                                <nuxt-icon name="40/close" class="absolute text-primary-blue text-opacity-50 right-4 top-4 text-6xl" />
							</DialogTitle>
							<div class="mt-2">
								<slot
									:switchScreen="switchScreen"
									v-if="activeScreen === 'screen1'"
									name="screen1"
								/>
								<slot
									:switchScreen="switchScreen"
									v-if="activeScreen === 'screen2'"
									name="screen2"
								/>
								<slot
									:switchScreen="switchScreen"
									v-if="activeScreen === 'screen3'"
									name="screen3"
								/>
							</div>

							<div class="mt-4">
								<slot name="footer"/>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
