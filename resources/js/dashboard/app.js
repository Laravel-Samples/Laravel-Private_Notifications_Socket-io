/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./../bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('transfer-block', require('./components/TransferSent.vue'));


const app = new Vue({
    el: '#app',
    data: {
        userId: $('#user-id').val()
    },
    created() {
        window.Echo.private('transfer-sent.' + this.userId)
            .notification((response) => {
                this.setUpModal('Trasfer received!');
                this.incUnreadNotifs();
                $("#layoutModalBody").html("You received a transfer!");
                $("#userAmount").html(response.receiver_amount);
            });
    },
    methods: {
        setUpModal(title) {
            $("#layoutModalTitle").empty();
            $("#layoutModalTitle").html(title);
            $("#layoutModalBody").empty();
            $("#layoutModal").modal("show");
        },
        incUnreadNotifs() {
            let unread = parseInt($("#unread_notifs").html());
            $("#unread_notifs").html(unread + 1);
        }
    }
});
