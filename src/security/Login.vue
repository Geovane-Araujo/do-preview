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
      <vue-particles class="particles" color="#dedede"></vue-particles>
  </div>
</template>

<script src="./Login.js">
</script>

<style lang="scss" scoped>
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
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #55440F 0%,#FFCD2E 100%);
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
