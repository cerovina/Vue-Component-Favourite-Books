const app = Vue.createApp({
    data(){
        return {
            showBooks: "true",
            isFav: "true",
            books: [
                {title:"Fullstack Vue", author:"Hassan Djirdeh", img: "fullstackvue.jpg"},
                {title:"Design Patterns for Vue.js", author:"Lachlan Miller", img: "designvue.jpg"},
                {title:"Vue.js 3 Cookbook", author:"Heitor Ribeiro", img: "cookbookvue.jpg"},
                {title:"Vue.js 3 By Example", author:"John Au-Yeung", img: "examplevue.jpg"},
                {title:"Testing Vue.js Applications", author:"Edd Yerburgh", img: "testingvue.jpg"}
                
            ],
        }       
    },
    methods: {
        changeTitle() {
            this.title= "Farsight"
        },
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        },
        
        pickFav (book) {
            book.isFav = !book.isFav
        },
    }
})

app.mount("#app")