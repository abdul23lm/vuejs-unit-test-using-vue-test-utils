import { mount } from '@vue/test-utils';
import RandomGenerator from '../../src/RandomGenerator.vue'

let wrapper;
describe('Component: RandomGenerator', () => {
  beforeEach(() =>{
    wrapper = mount(RandomGenerator)
  })

  test('number will show when button click', async () => {
    const button = wrapper.findComponent({ ref: 'buttonRef' })
    await button.trigger('click')
    expect(wrapper.findComponent({ ref: 'randomNumberRef' }).exists()).toBeTruthy()
  })

  test('shows message when number greater than 90', async () => {
    const button = wrapper.findComponent({ ref: 'buttonRef' })
    await button.trigger('click')
    const randomNumber = wrapper.findComponent({ ref: 'randomNumberRef' }).text()
    if(randomNumber > 90){
      expect(wrapper.findComponent({ ref : 'messageRef'}).exists()).toBeTruthy()
    }else{
      expect(wrapper.findComponent({ ref : 'messageRef'}).exists()).toBeFalsy()
    }
  })
})