import Vue from 'vue'

const TextComponent = Vue.extend({
    name: 'text-input',
    props: {
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            msg: ''
        }
    },
    methods: {
        updateValue: function(event) {
            this.msg = event.target.value
        }
    }
})

export default TextComponent
