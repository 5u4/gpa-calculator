<template>
    <div>
        <button @click="clear()">Clear</button>
    </div>
</template>

<script>
import store from '../store';

export default {
    methods: {
        clear() {
            store.commit('clearCourses');
        }
    }
}
</script>

<style>

</style>
