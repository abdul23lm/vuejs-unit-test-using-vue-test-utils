<template>
  <div>
    <center>
      <p>Counter</p>
      <div>
        <button ref="buttonMinus" @click="onMinusButtonClick"> - </button>
        <span ref="numberRef">{{counterNumber}}</span>
        <button ref="buttonPlus" @click="onPlusButtonClick"> + </button>
      </div>
    </center>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  data(){
    return{
      counterNumber: 0
    }
  },

  methods: {
    onPlusButtonClick(){
      if(this.counterNumber >= 10){
        this.counterNumber = this.counterNumber + 10
      }else{
        this.counterNumber = this.counterNumber + 1
      }
    },
    onMinusButtonClick(){
      if(this.counterNumber >= 10){
        this.counterNumber = this.counterNumber - 10
      }else if(this.counterNumber >= 1){
        this.counterNumber = this.counterNumber - 1
      }
    }
  }
}

</script>
