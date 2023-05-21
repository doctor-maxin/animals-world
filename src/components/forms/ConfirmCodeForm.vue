<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "~~/src/domain/auth/auth.store";

interface ConfirmCodeForm {
	codeId: number | null;
}

defineProps<ConfirmCodeForm>();
const ConfirmCodeSchema = yup.object({
	code1: yup.number().required().min(1).max(1),
	code2: yup.number().required().min(1).max(1),
	code3: yup.number().required().min(1).max(1),
	code4: yup.number().required().min(1).max(1),
});

const { errors, values, handleSubmit, submitForm } = useForm({
	validationSchema: ConfirmCodeSchema,
});

const authStore = useAuthStore();

const onSubmit = handleSubmit(async (values) => {
	isLoading.value = true;
	try {
		const result = await authStore.signInGetCode(values.login);
		if (result.result === "fail") throw new Error(result.message.login);
		if (result.result === "success")
			useNuxtApp().$toast.success(result.message.text);
		console.log("RESULT", result);
	} catch (err: any) {
		if (err instanceof Error) {
			useNuxtApp().$toast.error(err.message);
		}
		console.log("ERror", err);
	}
	isLoading.value = false;
	console.log("VALUES", values);
});

const isLoading: Ref<boolean> = ref(false);
</script>
<template>
	<div>
		<form
			@submit="onSubmit"
			class="flex gap-5 max-w-xs items-center mx-auto flex-col py-10"
		>
			<div class="flex gap-2">
				<UiInput
					v-model.number="values.code1"
					name="code"
					class="w-full relative"
					type="number"
					max-length="1"
					min-length="1"
					placeholder="_"
				/>
				<UiInput
					v-model.number="values.code2"
					name="code"
					class="w-full relative"
					type="number"
					max-length="1"
					min-length="1"
					placeholder="_"
				/>
				<UiInput
					v-model.number="values.code3"
					name="code"
					class="w-full relative"
					type="number"
					max-length="1"
					min-length="1"
					placeholder="_"
				/>
				<UiInput
					v-model.number="values.code4"
					name="code"
					class="w-full relative"
					type="number"
					max-length="1"
					min-length="1"
					placeholder="_"
				/>
			</div>

			<UiButton @click="onSubmit" :is-loading="isLoading" class="!w-full"
				>Войти</UiButton
			>
			<button
				type="button"
				class="label-regular flex items-center gap-2 text-gray-800"
			>
				Отправить повторно, через 40 сек.
			</button>
		</form>
		<button
			type="button"
			class="label-regular flex items-center gap-2 text-gray-800"
		>
			<nuxt-icon name="20/parol" class="text-primary-blue text-xl" />
			Отправить повторно, через 40 сек.
		</button>
	</div>
</template>
