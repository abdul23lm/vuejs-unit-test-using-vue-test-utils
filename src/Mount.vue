<template>
  <div>
    <p>Ini parent</p>
    <HelloWorld/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'Mount',
  components: {
    HelloWorld
  }
}
</script>