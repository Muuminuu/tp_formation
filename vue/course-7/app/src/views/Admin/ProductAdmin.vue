<script>
import ProductForm from "@/components/Form/ProductForm.vue"
import ProductsTable from "@/components/Product/ProductsTable.vue"
import { RouterView } from "vue-router";

export default {
    name: "ProductAdmin",
    components: {
    ProductForm,
    ProductsTable,
    RouterView
},
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <section class="d-flex wrap">
        <product-form class="col-6"/>
        <products-table class="col-6" s/>
    </section>
</template>