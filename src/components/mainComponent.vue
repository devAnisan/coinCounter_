<template>
  <div id="mainCounter" class="flex flex-col m-1">
    <div class="flex gap-2 justify-center items-center">
      <h1 class="text-3xl font-bold">Contador de monedas</h1>
      <button
        class="border-none p-3.5 font-bold text-amber-50 rounded-sm bg-red-400 hover:bg-red-500 hover:cursor-pointer"
        v-on:click="cleaner"
      >
        Limpiar
      </button>
    </div>
    <div class="shadow-md p-8 m-4 rounded-md w-2xl flex flex-col justify-center items-center">
      <div
        v-for="(coin, index) in coins"
        :key="coin.valor"
        class="flex w-80 justify-between items-center py-0"
      >
        <h3 class="text-left p-1 w-16">{{ coin.valor }}</h3>
        <input
          v-model="coin.cantidad"
          class="p-1 w-20"
          type="number"
          @keydown.enter.prevent="focusNext(index)"
        />
        =
        <h1>{{ coin.valor * coin.cantidad }}</h1>
      </div>
    </div>
    <div class="text-2xl font-bold">Total {{ totalFormat }}</div>
  </div>
</template>
<script lang="ts" setup>
import { counter } from '@/composable/counter'
const { totalFormat, coins, focusNext, cleaner } = counter()
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
