import { mount } from '@vue/test-utils';
import EmailValidation from '../../src/EmailValidation.vue'

let wrapper;

describe('Component: EmailValidation', () => {
  beforeEach(() => {
    wrapper = mount(EmailValidation)
  })

  test.each([
    { email: 'abc', hasErrorMessage: true},
    { email: 'abdul23lm@gmail.com', hasErrorMessage: false},
    { email: 'abc.abc@gmail.com', hasErrorMessage: false},
    { email: 'abc@', hasErrorMessage: true},
    { email: 'abcabc.abc.abc', hasErrorMessage: true},
  ])('error message will show when email invalid', async ({ email, hasErrorMessage }) => {

    const button = wrapper.findComponent({ ref: 'buttonRef' })
    const input = wrapper.findComponent({ ref: 'inputRef' })

    await input.setValue(email)
    await button.trigger('click')

    expect(wrapper.findComponent({ ref: 'errorMessageRef' }).exists()).toBe(hasErrorMessage)
  })
})