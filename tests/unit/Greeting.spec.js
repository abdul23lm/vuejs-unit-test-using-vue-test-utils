import Greeting from '../../src/Greeting.vue'
import { mount } from '@vue/test-utils'

let wrapper;

describe('component : Greetings.vue', () => {
  beforeEach(() => {
    wrapper = mount(Greeting);
  })

  test('p greetings will not show at first', () => {
    const greetingEl = wrapper.findComponent({ ref: 'greetingRef' })
    expect(greetingEl.exists()).toBeFalsy()
  })

  test('p greetings will show with data user typed on textfield', async () => {
    const NAME = 'fikri'
    const buttonRef = wrapper.findComponent({ ref: 'buttonRef' })
    await wrapper.findComponent({ ref: 'inputRef' }).setValue(NAME)
    await buttonRef.trigger('click')
    expect(wrapper.findComponent({ ref: 'greetingRef' }).text()).toContain(NAME)
  })
})
