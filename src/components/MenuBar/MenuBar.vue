<template>
  <div>
    <MenuBar :model="menubar" />
  </div>
  <div>
    <TabView class="content">
      <TabPanel header="Cadastros">
        <div>
          <Button @click="onclick" type="button" class="p-px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </Button>
        </div>
      </TabPanel>
      <TabPanel header="Veterinária">
        <div>
          sdsdjshdjh
        </div>
      </TabPanel>
      <TabPanel header="Vendas">
        Content III
      </TabPanel>
      <TabPanel header="Compras">
        Content III
      </TabPanel>
      <TabPanel header="Estoque">
        Content III
      </TabPanel>
      <TabPanel header="Financeiro">
        Content III
      </TabPanel>
      <TabPanel header="Utilitários">
        Content III
      </TabPanel>
      <TabPanel header="Minha DataOn">
        Content III
      </TabPanel>
    </TabView>
  </div>
  <div class="content">
    <TabMenu :model="tab">
      <template #item="{item}">
        <dir class="tabitem">
          <a @click="ssss">{{item.label}}</a>
          <Button icon="pi pi-times" @click="onClose(item)" class="p-button-rounded p-button-help p-button-text" />
        </dir>
      </template>
    </TabMenu>
    <div class="cont">
      <router-view />
    </div>
    <div class="footer">
      asdjasjdhj
    </div>
  </div>
</template>

<script>
import MenuBar from 'primevue/menubar'
import TabView from 'primevue/tabview'
import TabMenu from 'primevue/tabmenu'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
export default {
  name: 'menu-bar',
  data () {
    return {
      tab: [
        {
          label: 'Mural'
        },
        {
          label: 'Atendimento'
        }
      ],
      menubar: [
        {
          label: 'Principal',
          items: [
            {
              label: 'Cadastros',
              items: [
                {
                  label: 'Multi-Empresas'
                },
                {
                  label: 'Usuários'
                },
                {
                  label: 'Clientes'
                },
                {
                  label: 'Fornecedores'
                },
                {
                  label: 'Contabilistas/Contadores'
                },
                {
                  label: 'Transportadoras'
                },
                {
                  label: 'Vendedores/Agentes/Colaboradores'
                }
              ]
            },
            {
              label: 'Vendas'
            },
            {
              label: 'Compras'
            },
            {
              label: 'Serviços'
            }
          ]
        },
        {
          label: 'Veterinaria'
        },
        {
          label: 'Relatórios'
        },
        {
          label: 'Utilitários'
        }
      ]
    }
  },
  setup () {
    return {
    }
  },
  methods: {
    onclick () {
      var p = {
        label: 'Contas.Receber',
        to: 'login'
      }
      this.tab.push(p)
      // this.$router.push('Login')
    },
    onClose (item) {
      var i = 0
      this.tab.forEach(element => {
        if (element.label === item.label) {
          console.log(i)
          this.tab.splice(i)
          console.log(this.tab)
        }
        i++
      })
    }
  },
  components: {
    MenuBar,
    TabView,
    TabPanel,
    TabMenu,
    Button
  }
}
</script>

<style lang="scss" scoped>
.tabitem{
  display: flex;
}
.menus{
  margin: 0px;
  height: 8vh;
  background-color: rgba($color: #333333, $alpha: 1.0);
}
.p-tabview-panel{
  background-color: aqua;
}
.content{
  height: 81.4%;
  background-color: rgba($color: #333333, $alpha: 1.0);
}
.cont{
  height: 95%;
  background-color: rgba($color: #1E1E1E, $alpha: 1.0);
}
.footer{
  height: 5%;
  background-color: rgba($color: #850f0f, $alpha: 1.0);
}
</style>
