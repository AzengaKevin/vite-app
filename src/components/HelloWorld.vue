<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <h1>{{ msg }}</h1>

    <p class="text-muted">Just learning how to setup my Vue JS application in my supposed coming Vue JS application development career</p>


    <button type="button" class="btn btn-lg btn-outline-primary" @click="count++">
        Count: {{ count }}
    </button>
</template>
