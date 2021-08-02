<template>
  <div style="height: 70vh">
    <div class="butons">
      <Button label="Adicionar" class="p-button-outlined btns" />
      <Button label="Editar" class="p-button-outlined p-button-info btns" />
      <Button label="Excluir" class="p-button-outlined p-button-danger btns" />
    </div>
    <div>
      <DataTable :value="customers" class="p-datatable-sm" scrollHeight="66vh" :paginator="false" :rows="20" responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="company" header="Company"></Column>
        <Column field="representative.name" header="Representative"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script src="./ExplorerGrid.js">
</script>

<style lang="scss" scoped>
.butons{
  margin: 5px;
  .btns{
    margin-right: 5px;
    margin-top: 5px;
  }
}
</style>
