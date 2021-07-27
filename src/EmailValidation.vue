<template>
  <div>
    <center>
      <p>Input your email</p>
      <input ref="inputRef" type="text" v-model="email">
      <button ref="buttonRef" @click="onClickHandler">click</button>
      <p style="color:red" ref='errorMessageRef' v-if="isWrongEmail"> format email tidak sesuai </p>
    </center>
  </div>
</template>

<script>

export default {
  name: 'EmailValidation',
  data(){
    return{
      email: '',
      isWrongEmail: false
    }
  },
  methods: {
    onClickHandler(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmailValid = re.test(String(this.email).toLowerCase())
      this.isWrongEmail = !isEmailValid
    }
  }
}

</script>
