import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
// <vue-particles :particlesNumber="300" class="particles" color="#dedede"></vue-particles>
export default {
  data () {
    return {
      form: {
        cnpj: '',
        user: '',
        password: ''
      }
    }
  },
  components: {
    Button,
    InputText
  },
  mounted () {
  }
}
