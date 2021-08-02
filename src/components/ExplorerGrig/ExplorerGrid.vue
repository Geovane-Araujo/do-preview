<template>
  <div style="height: 70vh">
    <DataTable :value="customers" class="p-datatable-sm" scrollHeight="65vh" :paginator="true" :rows="20"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="company" header="Company"></Column>
        <Column field="representative.name" header="Representative"></Column>
        <template #paginatorLeft>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
        <template #paginatorRight>
            <Button type="button" icon="pi pi-cloud" class="p-button-text" />
        </template>
    </DataTable>
  </div>
</template>

<script>
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
      customers: null
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
  components: {
    DataTable,
    Column,
    Button
  }
}
</script>

<style lang="scss" scoped>

</style>
