<script setup lang="ts">
import SearchField from "~/components/ui/SearchField.vue";
import {
	Popover,
	PopoverOverlay,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/vue";
import { IModal } from "~~/src/helpers/modal.types";
import SignInForm from "../forms/SignInForm.vue";
import ConfirmCodeForm from "../forms/ConfirmCodeForm.vue";

const search: Ref<string> = ref("");
const options = [
	{ id: 1, label: "Красноярск" },
	{ id: 2, label: "Красноярск" },
	{ id: 3, label: "Красноярск" },
];
const isOpen: Ref<boolean> = ref(false);
const modal: Ref<IModal | null> = ref(null);

const { isMobile } = useDeviceWidth();
const openCatalog = () => {
	isOpen.value = !isOpen.value;

	const body = document.querySelector("body");
	if (body) body.style.overflow = isOpen.value === true ? "hidden" : "auto";
	// router.push("/catalog");
};
const codeId: Ref<number | null> = ref(null);

const openModal = () => {
	console.log(modal.value);
	if (modal.value) modal.value.openModal();
};

const onSendCode = (code_id: number) => {
	codeId.value = code_id;
	if (modal.value) modal.value.switchScreen("screen2");
};
</script>
<template>
	<client-only>
		<div>
			<Popover>
				<div
					class="grid grid-flow-col grid-cols-[auto_auto] items-center gap-3 lg:gap-6"
				>
					<PopoverButton>
						<ui-button
							v-if="!isMobile"
							class="!border-0 w-fit min-w-fit hidden lg:block"
							@click="openCatalog"
						>
							<span class="flex items-center">
								<nuxt-icon
									filled
									class="text-[2.5rem] -my-3 -ml-2"
									name="40/catalog-search"
								/>
								<span>КАТАЛОГ</span>
							</span>
						</ui-button>
					</PopoverButton>
					<search-field
						v-model="search"
						:options="options"
						class=""
						placeholder="Поиск по товарам"
					/>
					<button class="lg:hidden flex items-center">
						<nuxt-icon class="text-[2rem]" name="mobile/menu" />
					</button>
					<nav v-if="!isMobile" class="hidden lg:block">
						<ul class="flex items-center gap-5">
							<nuxt-link
								to="/"
								class="flex items-center gap-1 group"
							>
								<nuxt-icon
									name="40/promo"
									class="text-[2.5rem]"
									filled
								/>
								<span
									class="group-hover:text-primary-blue font-semibold"
									>Акции</span
								>
							</nuxt-link>
							<nuxt-link
								to="/"
								class="flex items-center gap-1 group"
							>
								<nuxt-icon
									name="40/favourites"
									class="text-[2.5rem] text-primary-blue"
								/>
								<span
									class="group-hover:text-primary-blue font-semibold"
									>Избранное</span
								>
							</nuxt-link>
							<nuxt-link
								to="/"
								class="flex items-center gap-1 group"
								@click="openModal"
							>
								<nuxt-icon
									name="40/account"
									class="text-[2.5rem] text-primary-blue"
								/>
								<span
									class="group-hover:text-primary-blue font-semibold whitespace-nowrap"
									>Личный кабинет</span
								>
							</nuxt-link>
							<nuxt-link
								to="/"
								class="flex items-center gap-1 group"
							>
								<nuxt-icon
									name="40/bag"
									class="text-[2.5rem] text-primary-blue"
								/>
								<span
									class="group-hover:text-primary-blue font-semibold"
									>Корзина</span
								>
							</nuxt-link>
						</ul>
					</nav>
				</div>
				<div v-if="isOpen">
					<PopoverPanel static>
						<HeaderCatalogPopover />
					</PopoverPanel>
				</div>
			</Popover>
			<UiModal ref="modal">
				<template #screen1>
					<h3 class="h1 text-center">Войти и зарегистрироваться</h3>
					<SignInForm @success="onSendCode" />
				</template>
				<template #screen2>
					<div class="flex justify-center items-center">
						<a
							href="#"
							@click.prevent="modal?.switchScreen('screen1')"
						>
							<nuxt-icon
								name="40/bold-arrow"
								class="text-[2.5rem]"
						/></a>
						<h3 class="h2 text-center">
							Введите код подтверждения
						</h3>
					</div>
					<ConfirmCodeForm :code-id="codeId" />
				</template>
			</UiModal>
		</div>
	</client-only>
</template>
