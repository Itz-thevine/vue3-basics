const app = Vue.createApp({
    data () {
        return{
            displayToggle: false,
            displayTitle: 'Show',
            displayValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante iaculis, tincidunt neque a, facilisis ipsum. Vivamus vulputate pharetra mattis. Nullam tempus odio ut sollicitudin tempor.',
        }
    },
    methods: {
        clickedBtn() {
            this.displayToggle === true ? this.displayTitle = 'Show' : this.displayTitle = 'Hide'
            this.displayToggle = !this.displayToggle;
        }
    },
})

app.mount('#app')