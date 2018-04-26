<template>
    <div class="container">
        <!-- Title -->
        <p>Calculator</p>
        <!-- Scale Change -->
        <div>
            <button @click="changeScale(4.33)">4.33</button>
            <button @click="changeScale(4.00)">4.00</button>
            Scale: {{ getScale }}
        </div>
        <!-- Average -->
        <div>
            Average: {{getAverageGrade}}
        </div>
        <!-- Add Course -->
        <div>
            <form>
                <input type="text" v-model="grade" placeholder="Grade">
                <input type="number" v-model="credit" placeholder="Credit">
                <button @click="addCourse()">Add Course</button>
            </form>
        </div>
        <!-- Course List -->
        <div>
            <ul>
                <li v-for="course in courses" :key="Math.random()">
                    Grade: {{ course.grade }}, Credit: {{ course.credit }}
                </li>
            </ul>
        </div>
        <!-- Clear -->
        <div>
            <button @click="clear()">Clear</button>
        </div>
    </div>
</template>

<script>
import { scaleOfFourPointThreeThree, scaleOfFour } from './scales';

export default {
    data () {
        return {
            scale: scaleOfFourPointThreeThree,
            courses: [],
            grade: null,
            credit: null
        }
    },
    computed: {
        getScale() {
            return this.scale["A+"].toFixed(2);
        },
        getTotalCredits() {
            let total = 0;
            this.courses.forEach(course => {
                total += parseInt(course.credit);
            });
            return total;
        },
        getTotalGrades() {
            let total = 0;
            this.courses.forEach(course => {
                total += parseFloat(
                    this.scale[course.grade]
                ) * parseInt(course.credit);
            })
            return total;
        },
        getAverageGrade() {
            const grade = this.getTotalGrades / this.getTotalCredits;
            if (!grade) {
                return 0;
            } else {
                return grade.toFixed(2);
            }
        }
    },
    methods: {
        changeScale(scale) {
            if (scale == 4.33) {
                this.scale = scaleOfFourPointThreeThree;
            } else {
                this.scale = scaleOfFour;
            }
        },
        addCourse() {
            this.courses.push({
                grade: this.grade,
                credit: this.credit
            });
            this.grade = null;
            this.credit = null;
        },
        clear() {
            this.courses = [];
        }
    }
};
</script>

<style>

</style>
