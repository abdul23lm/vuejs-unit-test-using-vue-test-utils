<template>
  <div>
    <center>
      <p ref='labelInputRef'>Input your name</p>
      <input ref="inputRef" type="text" v-model="name">
      <button ref="buttonRef" @click="isBtnClicked=true">click</button>
      <p ref='greetingRef' v-if="isBtnClicked"> Welcome, {{name}} </p>
    </center>
  </div>
</template>

<script>

export default {
  name: 'Greeting',
  data(){
    return{
      name: '',
      isBtnClicked: false
    }
  }
}

</script>
