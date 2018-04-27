<template>
    <div>
        <button @click="changeScale(4.33)">4.33</button>
        <button @click="changeScale(4.00)">4.00</button>
        Scale: {{ scale }}
    </div>
</template>

<script>
import store from '../store';

export default {
    computed: {
        scale() {
            return store.getters.getScale;
        }
    },
    methods: {
        changeScale(scale) {
            store.commit('changeScale', scale);
        }
    }
}
</script>

<style>

</style>
