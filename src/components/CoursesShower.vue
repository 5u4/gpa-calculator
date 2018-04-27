<template>
    <div>
        <ul>
            <li v-for="course in courses" :key="Math.random()">
                Grade: {{ course.grade }}, Credit: {{ course.credit }}
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store';

export default {
    computed: {
        courses() {
            return store.getters.getCourses;
        }
    }
}
</script>

<style>

</style>
