<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/CounterStore';

defineProps({
    msg: String,
})

const counterStore = useCounterStore()
</script>

<template>
    <h1>{{ msg }}</h1>

    <p class="text-muted">Just learning how to setup my Vue JS application in my supposed coming Vue JS application development career</p>

    <div class="d-inline-flex border border-secondary rounded">
        <button type="button" @click="counterStore.decrement" class="px-3 py-2 text-danger border-0 rounded-start">-</button>
        <span class="d-inline-flex px-3 align-items-center">
            <div class="align-middle">{{ counterStore.count }}</div>
        </span>
        <button type="button" @click="counterStore.increment" class="px-3 py-2 text-success border-0 rounded-end">+</button>
    </div>

</template>
