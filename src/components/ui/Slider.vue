<script setup lang="ts">
interface SliderProps {
	min: number;
	max: number;
	step?: number;
	minValue?: number;
	maxValue?: number;
}

const { minValue, maxValue, min, max } = withDefaults(
	defineProps<SliderProps>(),
	{
		min: 0,
		max: 100,
		step: 1,
		minValue: 0,
		maxValue: 100,
	}
);
const emit = defineEmits(["update:minValue", "update:maxValue"]);

const slider: Ref<HTMLElement | null> = ref(null);
const sliderMinValue = ref(minValue);
const sliderMaxValue = ref(maxValue);

const getPercent = (value: number, min: number, max: number) => {
	return ((value - min) / (max - min)) * 100;
};

const sliderDifference = computed(() => {
	return Math.abs(sliderMaxValue.value - sliderMinValue.value);
});

const setCSSProps = (width: number, left: number, right: number) => {
	if (slider.value) {
         slider.value.style.setProperty("--width", `${width > 100 ? 100 : width}%`);
         slider.value.style.setProperty("--progressLeft", `${left}%`);
        if (right < max) slider.value.style.setProperty("--progressRight", `${right < 0 ? 0 :right}%`);
	}
};

watchEffect(() => {
	if (slider.value) {
		// emit slidet values when updated
		emit("update:minValue", sliderMinValue.value);
		emit("update:maxValue", sliderMaxValue.value);

		// calculate values in percentages
		const differencePercent = getPercent(sliderDifference.value, min, max);
		const leftPercent = getPercent(sliderMinValue.value, min, max);
		const rightPercent = 100 - getPercent(sliderMaxValue.value, min, max);

		// set the CSS variables
		setCSSProps(differencePercent, leftPercent, rightPercent);
	}
});
</script>
<template>
    <div class="grid grid-cols-2 gap-4 w-full mb-4">
		<ui-input type="number" pre-label="от" :min="min" :max="max" :step="step" v-model="sliderMinValue" />
		<ui-input type="number" pre-label="до" :min="min" :max="max"  :step="step" v-model="sliderMaxValue" />
	</div>
	<div ref="slider" class="custom-slider minmax">
		<input
			type="range"
			name="min"
			id="min"
			:min="min"
			:max="max"
			:value="minValue"
			:step="step"
			@input="
				({ target }) => (sliderMinValue = parseFloat(target?.value))
			"
		/>
		<input
			type="range"
			name="max"
			id="max"
			:min="min"
			:max="max"
			:value="maxValue"
			:step="step"
			@input="
				({ target }) => (sliderMaxValue = parseFloat(target?.value))
			"
		/>
	</div>
	
</template>
<style>

.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
  position: relative;
  appearance: none;
  background: none;
  /* pointer-events: none; */
  border-radius: 999px;
  z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before,
.custom-slider.minmax::before {
  content: "";
  position: absolute;
  width: var(--ProgressPercent, 100%);
  height: 100%;
  background: theme(colors.primary.blue);
  /* z-index: -1; */
  pointer-events: none;
  border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrpme and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
  appearance: none;
  background: theme(colors.primary.blue);
  height: var(--trackHeight);
  border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
  appearance: none;
  background: theme(colors.primary.blue);
  height: var(--trackHeight);
  border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
  position: relative;
  /* top: 50%; 
  transform: translate(0, -50%);
  */
  width: var(--thumbRadius);
  height: var(--thumbRadius);
  margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
  background: theme(colors.primary.blue);
  border-radius: 999px;
  pointer-events: all;
  appearance: none;
  z-index: 1;
}

.custom-slider.minmax {
  position: relative;
  height: var(--trackHeight);
  background: theme(colors.gray.500);
  border-radius: 999px;
  margin: 0.5rem 0;
  --progressLeft: 0%;
  --progressRight: 0%;
}

.custom-slider.minmax input[type="range"] {
  position: absolute;
  pointer-events: none;
  width: 100%;
}
.custom-slider.minmax input[type="range"]::-webkit-slider-runnable-track {
  background: none;
  cursor: pointer;
}

.custom-slider.minmax::before {
  left: var(--progressLeft);
  right: var(--progressRight);
  width: unset;
}

.custom-slider.minmax input[type="range"]::before {
  display: none;
}
</style>