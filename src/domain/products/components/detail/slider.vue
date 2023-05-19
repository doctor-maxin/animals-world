<script setup lang="ts">
import type { Swiper } from "swiper";
import { APIProductPage } from "~~/src/helpers/api.types";

interface ProductDetailSliderProps {
	images: APIProductPage["images"];
}

const props = defineProps<ProductDetailSliderProps>();

const thumbsSwiper: Ref<Swiper | null> = ref(null);

const setThumbsSwiper = (swiper: Swiper) => {
	thumbsSwiper.value = swiper;
};
</script>
<template>
	<Suspense>
		<div>
			<div>
				<Swiper
					:space-between="16"
					:navigation="true"
					:thumbs="{ swiper: thumbsSwiper }"
				>
					<SwiperSlide
						v-for="(slide, index) of images"
						:key="index + '-image'"
					>
						<img
							:src="slide.image.src.orig"
							:alt="slide.image.alt"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div>
				<Swiper
					:space-between="16"
					:slides-per-view="4"
					:free-mode="true"
					:watch-slides-progress="true"
					@swiper="setThumbsSwiper"
				>
					<SwiperSlide
						v-for="(slide, index) of images"
						:key="index + '-image'"
					>
						<img
							:src="slide.image.src.orig"
							:alt="slide.image.alt"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</Suspense>
</template>
