import Vue from 'vue'
import Hello from './components/Hello'
import Country from './components/Country'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

const AppComponent = Vue.extend({
    name: 'app',
    components: {
        Hello, Country
    }
})

export default AppComponent
