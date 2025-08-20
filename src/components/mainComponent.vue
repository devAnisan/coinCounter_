<template>
  <div id="mainCounter" class="flex flex-col">
    <h1 class="text-3xl m-2">Contador de monedas</h1>
    <div v-for="(coin, index) in coins" :key="coin.valor" class="flex gap-5 items-center">
      <h3 class="text-left">{{ coin.valor }}</h3>
      <input
        v-model="coin.cantidad"
        class="p-1 w-20"
        type="number"
        @keydown.enter.prevent="focusNext(index)"
      />
      =
      <p class="text-2xl">{{ coin.valor * coin.cantidad }}</p>
    </div>
    <div class="text-2xl font-bold">
      Total
      {{ total }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { counter } from '@/composable/counter'
const { total, coins, focusNext } = counter()
</script>

<style scoped>
p {
  font-size: 3rem;
  width: 8rem;
  text-align: end;
}
#mainCounter {
  align-items: center;
}
input {
  border: 1px black solid;
  border-radius: 10px;
  margin: 1rem;
}
</style>
