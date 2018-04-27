// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';

import { scaleOfFour, scaleOfFourPointThreeThree } from './utils/scales';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        scale: scaleOfFourPointThreeThree,
        courses: []        
    },
    getters: {
        getCourses(state) {
            return state.courses;
        },
        getScale(state) {
            return state.scale["A+"].toFixed(2);
        },
        getAverageGrade(state) {
            let totalCredit = 0;
            let totalGrade = 0;
            state.courses.forEach(course => {
                const credit = parseInt(course.credit);
                totalCredit += credit;
                totalGrade += credit * state.scale[course.grade];
            });
            
            const grade = totalGrade / totalCredit;
            if (!grade) {
                return 0;
            } else {
                return grade.toFixed(2);
            }
        }
    },
    mutations: {
        changeScale(state, scale) {
            if (scale == 4.33) {
                state.scale = scaleOfFourPointThreeThree;
            } else {
                state.scale = scaleOfFour;
            }
        },
        /* payload: {grade: Number, credit: Number} */
        addCourse(state, payload) {
            state.courses.push({
                grade: payload.grade,
                credit: payload.credit
            });
        },
        clearCourses(state) {
            state.courses = [];
        }
    }
});

export default store;
