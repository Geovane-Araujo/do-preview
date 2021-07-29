import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
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
