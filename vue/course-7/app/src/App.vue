<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    MainNav
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Home",
          link: "/",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Home",
          link: "/",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Products",
          link: "/admin/products",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ]
    }
  }
}
</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>
    <template #header>
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="true"
      />
      <router-link to="/">Home</router-link> 
      | 
      <router-link to="/product/admin">Product Admin</router-link>
    </template>
    
    <router-view></router-view> 

  </main-layout>
</template>

<style scoped>

.router-link-active{
  font-weight: bold;
  font-size: 1.25rem;
  color: rgb(11, 173, 119);
}
.router-link-active:hover{
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
