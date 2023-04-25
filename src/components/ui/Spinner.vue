<script setup lang="ts"></script>
<template>
    <svg
        class="spinner"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 12 0.781049 12 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0V2C17.5228 2 22 6.47715 22 12Z"
            fill="#161616"
        />
    </svg>
</template>
<style lang="scss">
.spinner {
    animation: rotate 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}
@keyframes rotate {
    from {
        --tw-rotate: 0
        transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    to {
        --tw-rotate: 360deg;
        transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
}
</style>
