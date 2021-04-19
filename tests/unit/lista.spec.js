import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import store from "@/store/index.js";
import Lista from "@/components/Lista";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("Componente Lista", () => {
  //agrega un producto nuevo en el store
  beforeEach(() => {
    store.state.productos.push({
      nombre: "Espada de Doran",
      precio: 450,
      cancelado: false,
    });
  });
  it("corrobora que el boton eliminar elimine el elemento del store", async () => {
    const wrapper = mount(Lista, {store, localVue,});

    await wrapper.find("#btn-eliminar").trigger("click");
    await expect(store.state.productos.length).toBe(0);
  });
 
})
