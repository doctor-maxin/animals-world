<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "~~/src/domain/auth/auth.store";

const emit = defineEmits(["success"]);

const SignInSchema = yup.object({
	login: yup.string().required().min(4),
});

const { errors, values, handleSubmit, submitForm } = useForm({
	validationSchema: SignInSchema,
});

const authStore = useAuthStore();

const onSubmit = handleSubmit(async (values) => {
	isLoading.value = true;
	try {
		const result = await authStore.signInGetCode(values.login);
		if (result.result === "fail") throw new Error(result.message.login);
		if (result.result === "success") {
			useNuxtApp().$toast.success(result.message.text);
			emit("success", result.confirm_id);
		}
	} catch (err: any) {
		if (err instanceof Error) {
			useNuxtApp().$toast.error(err.message);
		}
	}
	isLoading.value = false;
});

const isLoading: Ref<boolean> = ref(false);
</script>
<template>
	<div>
		<form
			@submit="onSubmit"
			class="flex gap-5 max-w-xs items-center mx-auto flex-col py-10"
		>
			<UiInput
				v-model="values.login"
				name="login"
				class="w-full relative"
				type="text"
				placeholder="Телефон или E-mail"
			/>
			<UiButton @click="onSubmit" :is-loading="isLoading" class="!w-full"
				>Получить код</UiButton
			>
			<button
				type="button"
				class="label-regular flex items-center gap-2 text-gray-800"
			>
				<nuxt-icon name="20/parol" class="text-primary-blue text-xl" />
				Войти как юр. лицо
			</button>
		</form>
		<div class="caption-regular text-center w-full">
			Нажимая кнопку «Получить код», вы соглашаетесь c условиями
			<nuxt-link to="'/private_policy'" class="underline text-center"
				>Политики конфиденциальности</nuxt-link
			>
		</div>
	</div>
</template>
