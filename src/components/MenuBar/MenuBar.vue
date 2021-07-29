<template>
  <div>
    <MenuBar :model="menubar" />
  </div>
  <div>
    <TabMenu :model="tab" />
    <div class="menus">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuBar from 'primevue/menubar'
import TabMenu from 'primevue/tabmenu'
export default {
  name: 'menu-bar',
  data () {
    return {
      tab: [
        {
          label: 'Cadastros'
        },
        {
          label: 'Veterinária'
        },
        {
          label: 'Vendas'
        },
        {
          label: 'Compras'
        },
        {
          label: 'Serviços'
        },
        {
          label: 'Estoque'
        },
        {
          label: 'Financeiro'
        },
        {
          label: 'Utilitários'
        },
        {
          label: 'Minha DataOn'
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
  components: {
    MenuBar,
    TabMenu
  }
}
</script>

<style lang="scss" scoped>
.menus{
  height: 10vh;
  background-color: rgba($color: #333333, $alpha: 1.0);
}
</style>
