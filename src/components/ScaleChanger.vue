<template>
    <div style="margin-bottom: 15px">
        Current Scale: {{ scale }}
        <div class="flex-container">
            <button @click="changeScale(4.33)">4.33</button>
            <button @click="changeScale(4.00)">4.00</button>
        </div>
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

<style scoped>
.flex-container {
    display: flex;
    flex-wrap: nowrap;
}
</style>
