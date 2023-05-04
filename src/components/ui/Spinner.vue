<script setup lang="ts"></script>
<template>
    <svg
        class="spinner"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            fill="#DFF1FF"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 16 4.78105 16 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4V6C21.5228 6 26 10.4772 26 16Z"
            fill="#161616"
        />
    </svg>
</template>
<style lang="scss">
.spinner {
    animation: rotate 1s cubic-bezier(0.275, 0.82, 0.565, 1) infinite forwards;
}
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
