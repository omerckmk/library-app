import { createLocalVue, mount } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import BookList from "@/views/BookStoreOperations/BookList";
import routers from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routers });
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push("/book-list");
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(BookList).exists()).toBe(false);
  });
});
