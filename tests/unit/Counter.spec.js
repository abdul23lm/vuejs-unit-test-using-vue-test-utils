import { mount } from '@vue/test-utils'
import Counter from '../../src/Counter.vue'

let wrapper;
describe('Component: Counter', () => {
  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it('will increment the number if button plus clicked', async () => {
    const buttonPlus = wrapper.findComponent({ ref: 'buttonPlus' })
    const currentNumber = wrapper.findComponent({ ref: 'numberRef' }).text()

    await buttonPlus.trigger('click')
    expect(wrapper.findComponent({ ref: 'numberRef' }).text()).toBe(String(Number(currentNumber) + 1))
  })

  it('will decrease the number if button minus clicked and current number greater than zero', async () => {
    const buttonMinus = wrapper.findComponent({ ref: 'buttonMinus' })
    const buttonPlus = wrapper.findComponent({ ref: 'buttonPlus' })
    await buttonPlus.trigger('click')

    const currentNumber = wrapper.findComponent({ ref: 'numberRef' }).text()
    await buttonMinus.trigger('click')
    expect(wrapper.findComponent({ ref: 'numberRef' }).text()).toBe(String(Number(currentNumber) - 1))
  })


  it('wont decrease the number if button minus clicked and current number is zero', async () => {
    const buttonMinus = wrapper.findComponent({ ref: 'buttonMinus' })
    const currentNumber = wrapper.findComponent({ ref: 'numberRef' }).text()

    await buttonMinus.trigger('click')
    expect(wrapper.findComponent({ ref: 'numberRef' }).text()).toBe(currentNumber)
  })

  it('will increase by 10 if button plus clicked and current number is 10 or greater', async () => {
    const buttonPlus = wrapper.findComponent({ ref: 'buttonPlus' })
    await wrapper.setData({ counterNumber: 10 })
    const currentNumber = wrapper.findComponent({ ref: 'numberRef' }).text()

    await buttonPlus.trigger('click')
    expect(wrapper.findComponent({ ref: 'numberRef' }).text()).toBe(String(Number(currentNumber) + 10))
  })

  it('will decrease by 10 if button minus clicked and current number is 10 or greater', async () => {
    const buttonMinus = wrapper.findComponent({ ref: 'buttonMinus' })
    await wrapper.setData({ counterNumber: 10 })
    const currentNumber = wrapper.findComponent({ ref: 'numberRef' }).text()

    await buttonMinus.trigger('click')
    expect(wrapper.findComponent({ ref: 'numberRef' }).text()).toBe(String(Number(currentNumber) - 10))
  })
})


// TDD

// bakalan ada dua tombol + dan -
// ada satu angka ditengah dua tombol
// angka tidak boleh minus
// semisal angka lebih dari 10, ketika di plus atau kurang, dia bakalan kelipatan 10
// red-green test