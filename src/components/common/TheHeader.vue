<template>
	<div id="header">
		<header
			class="container relative z-50 box-border max-w-screen px-4 py-1.5 lg:py-5 grid gap-3 lg:gap-7 grid-cols-[3rem_1fr] lg:grid-cols-[8.25rem_auto]"
		>
			<LogoHelper />
			<div class="lg:flex flex-col gap-5 w-full">
				<HeaderTopBar class="hidden lg:block" />
				<HeaderMainMenu />
			</div>
		</header>
	</div>

	<Suspense>
		<HeaderSecondMenu />
	</Suspense>
</template>

<script lang="ts" setup>
import LogoHelper from "~/components/helpers/Logo.vue";
import HeaderTopBar from "~/components/header/TopBar.vue";
import HeaderMainMenu from "~/components/header/MainMenu.vue";
import HeaderSecondMenu from "~/components/header/SecondMenu.vue";

const { isMobile } = useDeviceWidth();
</script>
