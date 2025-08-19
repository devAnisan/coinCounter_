<template>
  <section class="p-4">
    <div>
      <h1 class="text-2xl font-bold mb-4">Contador de monedas CR</h1>
    </div>

    <!-- Recorremos las monedas -->
    <div class="flex flex-col">
      <section v-for="moneda in coins" :key="moneda.valor" class="flex items-center">
        <!-- Valor de la moneda -->
        <p class="w-16">{{ moneda.valor }}</p>

        <!-- Input para digitar la cantidad -->
        <input
          type="number"
          min="0"
          v-model.number="moneda.cantidad"
          class="border px-2 py-1 w-20"
        />

        <!-- Multiplicación directa -->
        <p>= {{ moneda.valor * moneda.cantidad }}</p>
      </section>
    </div>

    <!-- Total -->
    <div class="mt-6">
      <h1 class="text-3xl font-bold">Total</h1>
      <p class="text-2xl">{{ total }}</p>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { counter } from '@/composable/counter'
const { total, coins } = counter()
</script>

<style scoped>
p {
  font-size: 3rem;
  width: 8rem;
  text-align: end;
}
input {
  border: 1px black solid;
  border-radius: 10px;
  margin: 1rem;
}
</style>
