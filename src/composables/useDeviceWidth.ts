import resolveConfig from 'tailwindcss/resolveConfig'
import * as tailwindConfig from '~~/tailwind.config'

export function useDeviceWidth() {
    let w = typeof window !== 'undefined' ? window : undefined
    let windowWidth = ref(w?.innerWidth || 0)
    const fullConfig = resolveConfig(tailwindConfig)

    const onWidthChange = () => {
        windowWidth.value = w?.innerWidth || 0
    }
    onMounted(() => w?.addEventListener('resize', onWidthChange))
    onUnmounted(() => w?.removeEventListener('resize', onWidthChange))

    console.log()
    const isMobile = computed(() => {
        let mobile = Number(
            fullConfig.theme?.screens
                ? //@ts-ignore
                  fullConfig.theme.screens['sm'].replace('px', '')
                : 500
        )
        return windowWidth.value < mobile ? true : false
    })

    return { isMobile }
}
