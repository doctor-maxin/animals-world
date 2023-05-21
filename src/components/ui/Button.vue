<script setup lang="ts">
import UISpinner from "./Spinner.vue";

interface UIButtonProps {
	icon?: string;
	isLoading?: boolean;
	type?: "button" | "reset" | "submit";
	variant?:
		| "primary"
		| "secondary"
		| "secondary-outline"
		| "secondary-small"
		| "social";
}
type Point = {
	x: number;
	y: number;
};

withDefaults(defineProps<UIButtonProps>(), {
	variant: "primary",
	type: "button",
	isLoading: false,
});
const point: Ref<null | Point> = ref(null);
const buttonRef = ref();

const detectPoint = (event: MouseEvent) => {
	const target = buttonRef.value;
	point.value = {
		x: event.x - target.offsetLeft,
		y: event.y - target.offsetTop,
	};
};
const resetPoint = () => {
	point.value = null;
};
</script>
<template>
	<button
		ref="buttonRef"
		:type="type"
		@mousedown.stop="detectPoint"
		@mouseup.stop="resetPoint"
		class="ui-button label-semibold"
		:class="{ ['is-loading']: isLoading, [variant]: variant }"
		:disabled="isLoading"
	>
		<span class="relative z-20" :class="{ 'opacity-0': isLoading }">
			<slot />
		</span>
		<UISpinner class="absolute" v-if="isLoading" />
		<div
			v-if="point"
			class="point"
			:style="{
				left: point.x + 'px',
				top: point.y + 'px',
			}"
		></div>
	</button>
</template>
<style lang="scss" scoped>
.ui-button {
	@apply px-5 flex items-center justify-center transition-colors border overflow-hidden relative py-3 rounded-xx w-fit disabled:cursor-not-allowed;
	&.primary {
		@apply bg-primary-yellow border-primary-yellow hover:bg-secondary-yellow hover:border-secondary-yellow;
		&:disabled {
			@apply bg-gray-600 text-gray-600 border-gray-600;
			&.is-loading {
				@apply bg-secondary-yellow border-secondary-yellow cursor-wait;
			}
		}

		.point {
			@apply bg-primary-yellow;
		}
	}
	&.secondary {
		@apply bg-gray-900 border-transparent text-white hover:bg-opacity-80 hover:border-opacity-80;
		&:hover {
			@apply bg-secondary-blue text-gray-900;
		}
		&:disabled {
			@apply bg-gray-600 text-gray-700;
		}
		.point {
			@apply bg-primary-blue bg-opacity-20;
		}
	}
	&.secondary-outline {
		@apply font-normal border-gray-900;
		&:hover {
			@apply text-primary-blue border-primary-blue;
		}
		.point {
			@apply bg-secondary-blue bg-opacity-50;
		}
		&:disabled {
			@apply text-gray-700 border-gray-700;
		}
	}
	&.secondary-small {
		@apply py-1 rounded-full px-4 border-transparent bg-secondary-blue;
		&:hover {
			@apply text-primary-blue;
		}
		&:disabled {
			@apply bg-gray-600 text-gray-700;
		}
	}
	&.social {
		@apply border-transparent p-2 text-[2rem] leading-[2rem] max-w-[3rem] max-h-[3rem] text-white bg-gray-900;
		&:hover {
			@apply text-gray-900 bg-secondary-blue;
		}
	}
}
.point {
	@apply absolute w-full aspect-square z-10;
	animation-name: scale;
	border-radius: 50%;
	animation-duration: 0.75s;
	animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	animation-fill-mode: forwards;
	animation-direction: alternate;
	transform-origin: center;
	margin-left: -50%;
	margin-top: -50%;
}
@keyframes scale {
	from {
		transform: scale(0);
	}
	to {
		transform: scale(2);
	}
}
</style>
