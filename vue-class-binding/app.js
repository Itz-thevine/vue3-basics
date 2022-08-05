const app = Vue.createApp({
    data() {
        return {
            movies: [
                {title: 'Avengers', type: 'series', photoUrl: 'https://i.pinimg.com/564x/91/e8/b2/91e8b28b4cb04f5bd07d7fcd3bf08e16.jpg', isFav: true},
                {title: 'Batman', type: 'collection', photoUrl: 'https://i.pinimg.com/564x/ce/dc/b7/cedcb7c362b12989d4a9785ac6ab35dd.jpg', isFav: false},
                {title: 'Spongebob', type: 'series', photoUrl: 'https://i.pinimg.com/564x/6d/cf/c1/6dcfc1cc6476b70978539fe1c8411f41.jpg', isFav:true},
                {title: 'Ice-Age', type: 'collection', photoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Ice_age_collision_course.jpg', isFav: false}
            ]
        }
    },
    methods: {
        toggleFav (e) {
            this.movies[e].isFav = !this.movies[e].isFav
        }
    }
})

app.mount('#app')