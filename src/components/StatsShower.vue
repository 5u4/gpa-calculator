<template>
    <div>
        GPA: {{ average }}
    </div>
</template>

<script>
import store from '../store';

export default {
    computed: {
        average() {
            return store.getters.getAverageGrade;
        }
    }
}
</script>

<style>

</style>
