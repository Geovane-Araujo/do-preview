import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import axios from 'axios'
export default {
  name: 'explorer-table',
  setup () {
    return {}
  },
  data () {
    return {
      customers: []
    }
  },
  mounted () {
    this.getCustomersSmall()
  },
  methods: {
    getCustomersSmall () {
      return axios.get('/dadosTeste.json').then(res => {
        this.customers = res.data.data
      })
    }
  },
  component: {
    DataTable,
    Column,
    Button
  }
}
