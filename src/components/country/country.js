import Vue from 'vue'

const CounrtyComponent = Vue.extend({
    name: 'country',

    data () {
        return {
            country: 'Spain',
            countries: [
                {
                    name: 'Russia',
                    value: 'ru'
                },
                {
                    name: 'Spain',
                    value: 'es'
                },
                {
                    name: 'France',
                    value: 'fr'
                },
                {
                    name: 'China',
                    value: 'cn'
                }
            ]
        }
    }
})

export default CounrtyComponent

