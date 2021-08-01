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
          header: 'atendimento'
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
        to: '/mural'
      }
      this.tab.push(p)
      // this.$router.push('Mural')
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
