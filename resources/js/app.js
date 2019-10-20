import VueAutoDropzone from "vue-auto-dropzone";

require('./bootstrap');
import Vue from 'vue';


window.Vue = Vue;
window.events = new Vue();

Vue.component('vue-auto-dropzone', VueAutoDropzone);
const app = new Vue({
    el: '#app',
    data: {
        options: {
            url: '/admin/api/images',
            autoProcessQueue: false,
            resizeHeight: 777,
            resizeWidth: 1920,
            acceptedFiles: 'image/*',
            maxFiles: 1
        }
    },
    methods: {
        drop() {
            console.log('Processing files');
            this.$refs.zone.processQueue();
        }
    }
});
