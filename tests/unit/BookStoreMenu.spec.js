import { shallowMount } from "@vue/test-utils";
import BookStoreMenu from "@/components/BookStoreMenu";

const factory = (values = {}) => {
  return shallowMount(BookStoreMenu, {
    data() {
      return {
        ...values
      };
    }
  });
};

describe("BookStoreMenu", () => {
  it("renders a message", () => {
    const wrapper = factory();
    expect(wrapper.find(".message").text()).toEqual("Book Store Operations");
  });
});
