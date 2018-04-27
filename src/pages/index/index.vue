<template>
    <div class="container">
        <!-- Title -->
        <p>Calculator</p>
        <!-- Scale Change -->
        <scale-changer></scale-changer>
        <!-- Average -->
        <stats-shower></stats-shower>
        <!-- Add Course -->
        <course-adder></course-adder>
        <!-- Course List -->
        <courses-shower></courses-shower>
    </div>
</template>

<script>
import ScaleChanger from '../../components/ScaleChanger';
import StatsShower from '../../components/StatsShower';
import CourseAdder from '../../components/CourseAdder';
import CoursesShower from '../../components/CoursesShower';

export default {
    components: {
        ScaleChanger,
        StatsShower,
        CourseAdder,
        CoursesShower
    }
};
</script>

<style>

</style>
