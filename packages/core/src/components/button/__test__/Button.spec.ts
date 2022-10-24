import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils'
import button from '../PButton.vue'

describe("test Button", () => {
  it("should render slot", () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
  })


  it("should have class", () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      },
      props: {
        type: 'success'
      }
    })

    expect(wrapper.classes().map(v => v.replace("\n", "")).includes("bg-emerald-500")).toBe(true)
  })
})