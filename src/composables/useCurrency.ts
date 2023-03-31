import { ref } from 'vue'

export const useCurrency = () => {
    const toMoney = (value: string | number) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(Number(value))
    }

    return { toMoney }
}
