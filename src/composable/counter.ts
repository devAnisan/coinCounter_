import { computed, reactive } from 'vue'
export const coins = reactive([
  { valor: 5, cantidad: 0 },
  { valor: 10, cantidad: 0 },
  { valor: 25, cantidad: 0 },
  { valor: 50, cantidad: 0 },
  { valor: 100, cantidad: 0 },
  { valor: 500, cantidad: 0 },
  { valor: 1000, cantidad: 0 },
  { valor: 2000, cantidad: 0 },
  { valor: 5000, cantidad: 0 },
  { valor: 10000, cantidad: 0 },
  { valor: 20000, cantidad: 0 },
])

export const counter = () => {
  const focusNext = (index: number) => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[type="number"]')
    if (inputs[index + 1]) {
      inputs[index + 1].focus()
    }
  }

  const total = computed(() => coins.reduce((acc, m) => acc + m.valor * m.cantidad, 0))
  const totalFormat = computed(() =>
    new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      minimumFractionDigits: 2,
    }).format(total.value),
  )

  const cleaner = () => {
    coins.forEach((m) => (m.cantidad = 0))
  }
  return {
    coins,
    focusNext,
    totalFormat,
    total,
    cleaner,
  }
}
