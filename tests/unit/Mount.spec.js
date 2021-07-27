import { mount, shallowMount } from '@vue/test-utils'
import Mount from '../../src/Mount.vue'

test('using mount', () => {
  const wrapper = mount(Mount)
  console.log(wrapper.html())
})

test('using shallow mount', () => {
  const wrapper = shallowMount(Mount)
  console.log(wrapper.html())
})