import Vue from 'vue'
import Hello from './components/Hello'
import Country from './components/Country'
import Text from './components/Text'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

const AppComponent = Vue.extend({
    name: 'app',
    components: {
        Hello, Country,
        'text-input' :Text
    }
})

export default AppComponent
