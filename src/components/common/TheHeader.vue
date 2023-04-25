<template>
    <header class="container px-4 py-5 gap-7 grid grid-cols-[8.25rem_auto]">
        <LogoHelper />
        <div class="flex flex-col gap-5">
            <HeaderTopBar />
            <HeaderMainMenu />
        </div>
    </header>
    <HeaderSecondMenu />
</template>

<script lang="ts" setup>
import LogoHelper from '~/components/helpers/Logo.vue'
import HeaderTopBar from '~/components/header/TopBar.vue'
import HeaderMainMenu from '~/components/header/MainMenu.vue'
import HeaderSecondMenu from '~/components/header/SecondMenu.vue'
</script>
