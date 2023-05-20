<script setup lang="ts">
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/vue";
</script>
<template>
	<Disclosure v-slot="{ open }">
		<DisclosureButton class="py-2 w-full flex items-center justify-between">
			<span class="relative">
				<slot name="title" :open="open" />
			</span>
			<nuxt-icon
				name="20/arrow"
				class="text-xl text-gray-700"
				:class="{ '-rotate-90': open, 'rotate-90': !open }"
			/>
		</DisclosureButton>
		<DisclosurePanel class="text-gray-500">
			<div>
				<slot name="content" />
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>
