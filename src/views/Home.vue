<template>
  <menu-bar></menu-bar>
  <div class="home">
  </div>
</template>

<script>
// import Menubar from 'primevue/menubar'
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          label: 'Principal',
          items: [
            {
              label: 'Cadastros',
              items: [
                {
                  label: 'Multi-Empresa'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    // Menubar
  }
}
</script>
