<script>
import { mapState } from 'pinia'
import { useProductsStore } from '@/stores'
export default {
    name: "ProductDetails",
    mounted() {
        let id = this.$route.params.id
        console.log(this.getProductById(id))
    },
    // récupérer le paramètre de route qui contient l'id de notre produit
    // récupérer le produit correspondant à l'id dans le 
    // paramètre  de route en utilisant le store product
    computed: {
    ...mapState(useProductsStore, ["getProductById"]),
    getProduct() {
        return this.getProductById(this.$route.params.id);
    }
    }
}
</script>

<template>
    <article
        v-if="getProduct != null"
    >
        <header>
            <h2>getProduct().name</h2>
        </header>
        <section>
            <p>{{ product.description }}</p>
        </section>
        <footer></footer>
    
    </article>
    <h2
        v-else
    >
        Ce produit n'existe pas
    </h2>
</template>





