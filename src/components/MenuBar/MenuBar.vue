<template>
<div class="page">
  <div class="tot">
    <MenuBar :model="menubar" />
    <TabView class="colors">
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
    <TabView v-model:activeIndex="ativa">
      <TabPanel>
        <template #header>
          <span>Mural</span>
        </template>
        <div class="ariagrid">
        </div>
      </TabPanel>
      <TabPanel v-for="item in tab" :key="item.id">
        <template #header>
          <span>{{item.label}}</span>
          <span class="closable" @click="onClose(item)">x</span>
        </template>
        <div class="ariagrid">
          <explorer></explorer>
        </div>
      </TabPanel>
    </TabView>
  </div>
  <div v-show="false" class="content">
    <TabMenu :model="tab">
      <template #item="{item}">
        <dir class="tabitem">
          <a :href="item.to">{{item.label}}</a>
          <Button icon="pi pi-times" @click="onClose(item)" class="p-button-rounded p-button-help p-button-text" />
        </dir>
      </template>
    </TabMenu>
    <div class="cont">
      <router-view />
    </div>
    <div class="footer">
      s
    </div>
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
          label: 'Atendimento',
          header: 'atendimento',
          id: 'd'
        }
      ],
      menubar: [
        {
          label: 'Principal',
          items: [
            {
              label: 'Cadastros'
              /* items: [
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
              ] */
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
      ],
      ativa: 0
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
        to: '/mural'
      }
      this.tab.push(p)
      this.ativa = this.tab.length
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
      this.ativa = this.tab.length
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
.page{
  height: 100vh;
}
.tot{
  height: 20%;
}
.colors{
  background-color: rgba($color: #333333, $alpha: 1.0);
}
.content{
  height: 80%;
  background-color: rgba($color: #333333, $alpha: 1.0);
}
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
.cont{
  height: 83%;
  background-color: rgba($color: #333333, $alpha: 1.0);
}
.footer{
  height: 7%;
  background-color: rgba($color: #850f0f, $alpha: 1.0);
}
.closable{
  margin-left: 10px;
  z-index: 1;
}
.ariagrid{
  height: 100%;
  background-color: #850f0f;
}
.bc{
  height: 100%;
}
</style>
