<template>
    <a class="text-primary-blue font-semibold" :href="'tel:' + phone">{{
        phone
    }}</a>
</template>
<script setup lang="ts">
import { usePhoneFormat } from '~/composables/usePhoneFormat'

interface TelLinkProps {
    tel: string | number
}
const { tel } = defineProps<TelLinkProps>()
const { phone, formatPhone } = usePhoneFormat()
formatPhone(tel.toString())
</script>
