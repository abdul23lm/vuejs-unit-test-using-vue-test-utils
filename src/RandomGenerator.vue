<template>
  <div id="app">
    <center>
      <p>Generate Random Number</p>
      <button ref="buttonRef" @click="onClickHandler">Click Me !</button>
      <p ref="randomNumberRef" v-if="randomNumber">{{randomNumber}}</p>
      <p ref="messageRef" v-if="randomNumber > 90">You got special number !!</p>
    </center>
  </div>
</template>

<script>

export default {
  name: 'RandomGenerator',
  data(){
    return{
      randomNumber: 0,
    }
  },
  methods: {
    onClickHandler(){
      const maxNumber = 100
      this.randomNumber = Math.floor(Math.random() * maxNumber);
    }
  }
}

</script>
