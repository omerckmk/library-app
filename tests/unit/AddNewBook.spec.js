import Vue from "vue";
import AddNewBook from "@/views/BookStoreOperations/AddNewBook";

describe("AddNewBook.vue", () => {
  it("should be instantiated", () => {
    const container = document.createElement("div");
    const AddNewBookComponent = Vue.extend(AddNewBook);
    const vm = new AddNewBookComponent();
    vm.$mount(container);
    expect(vm.bookForm.status).toEqual(true);
    expect(vm.bookForm.name).toEqual("");
  });
});
