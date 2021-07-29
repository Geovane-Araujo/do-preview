<template>
  <div class="content">
    <div class="login">
      <div class="formulario">
        <div class="p-fluid mg">
          <div class="p-field">
            <span class="p-float-label">
              <InputText type="text" v-model="form.cnpj"/>
              <label for="username">CNPJ / CPF</label>
            </span>
          </div>
        </div>
        <div class="p-fluid mg">
          <div class="p-field">
            <span class="p-float-label">
              <InputText type="text" v-model="form.user"/>
              <label for="username">Usuario</label>
            </span>
          </div>
        </div>
        <div class="p-fluid mg">
          <div class="p-field">
            <span class="p-float-label">
              <InputText type="password" v-model="form.password"/>
              <label for="username">Senha</label>
            </span>
          </div>
        </div>
        <div class="p-fluid">
          <div class="p-field">
            <Button label="Acessar"/>
          </div>
        </div>
      </div>
    </div>
    <div class="view">
        <div class="center">
          <h2>Geovane</h2>
        </div>
      <vue-particles clickMode="push" :particlesNumber="300" class="particles" color="#dedede"></vue-particles>
    </div>
  </div>
</template>

<script src="./Login.js">
</script>

<style lang="scss" scoped>
.view{
  height: 100%;
  width: 80%;
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}
.center{
  color: #fff;
  z-index: 9999;
  position: relative;
  text-align: center;
}
.mg{
  margin-bottom: 2em;
}
.particles{
  height: 100%;
  width: 100%;
}
.content{
  height: 100vh;
  width: 100vw;
  display: flex;
}
.login{
  border-radius: 13px;
  box-shadow: 1px 1px 1px rgb(51, 51, 51);
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #E8AF00 0%,#FECD1B 100%);
}
.formulario{
  width: 85%;
  color: aliceblue;
}
.dd{
  color: aliceblue;
}
@media screen and (max-width: 600px) {
  .login{
    width: 70%;
  }
}
</style>
