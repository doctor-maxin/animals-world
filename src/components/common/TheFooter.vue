<script setup lang="ts">
import { useMainStore } from '~~/src/domain/main/main.store'
import FooterLogo from '~/components/footer/FooterLogo.vue'
import FooterAlente from '~/components/footer/FooterAlente.vue'
import FooterPrivacyLinks from '~/components/footer/FooterPrivacyLinks.vue'
import FooterSocials from '~/components/footer/FooterSocials.vue'
import FooterMenu from '~/components/footer/FooterMenu.vue'
import FooterInfo from '~/components/footer/FooterInfo.vue'
import FooterSubscribe from '~/components/footer/FooterSubscribe.vue'

const mainStore = useMainStore()

const { data: footerLinks } = await useAsyncData('footerMenu', () =>
    mainStore.getMenu('bottom')
)
const { data: privacyLinks } = await useAsyncData('privacyLinks', () =>
    mainStore.getMenu('bottom_2')
)
</script>
<template>
    <footer class="bg-primary-blue flex flex-col items-center">
        <div
            class="max-w-screen-2xl pt-7 pb-10 w-full grid grid-cols-footer px-4"
        >
            <footer-logo class="col-start-1 row-start-1" />
            <footer-menu class="row-span-full" :items="footerLinks" />
            <footer-info class="cols-start-3 row-start-1" />
            <footer-subscribe class="col-start-1 row-start-2" />
            <footer-socials class="col-start-3 row-start-2" />
        </div>
        <div>
            <footer-privacy-links v-if="privacyLinks" :links="privacyLinks" />
        </div>
        <footer-alente />
    </footer>
</template>
