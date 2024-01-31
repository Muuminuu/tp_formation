<script>
import { mapState, mapActions } from 'pinia' // en option API uniqt, permets d'importer getters et state(mapState), et les actionsmapActions).
import { useProductsStore } from '../../stores/products.store.js'

export default {
  name: 'ProductForm',
  emits: ["updateProduct"],
  /* Utilisation d'un hook du cycle de vie du composant */
  mounted() {
    console.log(this)
  },
  watch: {
    getProductToEditId(newValue, oldValue){
      if (newValue, oldValue){
        if (
          (this.getEditProductMode && newValue != null && !this.confirmEditMode) || 
          (this.getEditProductMode && newValue != this.currentProductId) //avec ca on peut changer de ligne a editer sans valider auparavant
        ) {
          // importer le produit selectionné
          const product = this.getProductById(this.getProductToEditId);
          console.log("product : ", product)
          this.name = product.name;
          this.description = product.description;
          this.price = product.price;
          this.vta = product.vta;
          this.category = product.category;
          this.confirmEditMode = true;
          this.currentProductId = this.productToEditId;
        }
      }
    }
  },
  data() {
    return {
      name: "biscuit",
      description: "Oh qu'ils sont bon !!",
      price: 99,
      vta: 20,
      category: "sweet",
      confirmEditMode: false,
      currentProductId: null,
      
    }
  },
  props: {
    editMode: {
      type: Boolean,
      default: false
    },
    productToEdit: {
      type: Object,
      default: null
    }
  },
  methods: {
    submitForm() {
      if (this.getEditProductMode && this.productToEdit != null) {
        const product = {
          id: this.getProductToEditId,
          name: this.name,
          description: this.description,
          price: this.price,
          vta: this.vta,
          category: this.category
        }
        // this.$emit("updateProduct", product);
        this.updateProduct(product)
        this.confirmEditMode = false
        this.currentProductId = null

      } else {
        const product = {
          id: Math.floor(Math.random() * Date.now()),
          name: this.name,
          description: this.description,
          price: this.price,
          vta: this.vta,
          category: this.category
        }
        this.addProduct(product)
      }
    },
    resetForm() {
      this.name = null
      this.description = null
      this.price = 0
      this.
      this.
    },
    cancelled(){
      this.
      this.
      this.
    },
    ...mapActions(useProductsStore, {
      addProduct: "addProduct",  //c'est moi qui choisit le nom de l'evenemnt ; mais l'argument c'est le nom de l'action qu'on veut recupérer (valeur = fonction)
      updateProduct: "updateProduct"
    })
  },
  computed: {
    ...mapState(useProductsStore,[
      "getEditProductMode", 
      "getProductById",
      "getProductToEditId"
    ])
  }
}
</script>

<template>
  <section>
    <h2 class="w-f">Product Form</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Nom</label>
        <input type="text" class="form-control" id="name" name="name" aria-describedby="name-help" v-model="name"
          required>
        <div id="name-help" class="form-text">productorUn Nom!</div>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Prix</label>
        <input type="number" class="form-control" id="price" name="price" min="1" aria-describedby="price-help"
          v-model="price" required>
        <div id="price-help" class="form-text">Un Prix</div>
      </div>
      <div class="mb-3">
        <label for="vta" class="form-label">TVA</label>
        <input type="number" class="form-control" id="vta" name="vta" aria-describedby="vta-help" v-model="vta" required>
        <div id="vta-help" class="form-text">La TVA</div>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Catégorie</label>
        <select id="category" class="form-select" v-model="category" required>
          <option value="meat">Viande</option>
          <option value="vegetable">Légume</option>
          <option value="drink">Boisson</option>
          <option value="sweet">Confiserie</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" name="description" rows="3" v-model="description">
            </textarea>
      </div>

      <button 
        class="btn" 
        type="submit" 
        :class="getEditProductMode ? 'btn-primary' : 'btn-success'">
        {{ getEditProductMode ? "Mettre à Jour" : "Enregistrer" }}
      </button>
    </form>
  </section>
</template>