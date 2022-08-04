const app = Vue.createApp({
    data () {
        return{
            countValue: '0',
        }
    },
    methods: {
        resetCount () {
            this.countValue = '0'
        }
    }
});

app.mount('#app')