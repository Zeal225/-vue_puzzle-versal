<template>
 <div id="page" :class="($route.name === 'membre')
           || $route.name === 'inscription'
           || $route.name === 'update' ? 'vue-page-membre' : ''">
     <app-header></app-header>
     <div :class="[$store.getters.getOpacity ? 'opaciter' : '', $store.getters.getFormActive ? 'opaciter' : '']">
         <router-view></router-view>
     </div>
     <app-footer></app-footer>
     <app-navigation-and-form></app-navigation-and-form>
     <app-form-connexion></app-form-connexion>
     <app-modal-not-auth></app-modal-not-auth>
     <app-mobile-navigation-and-search></app-mobile-navigation-and-search>
 </div>
</template>

<script>
  import Header from './components/general/header/Header.vue'
  import Footer from './components/general/Footer.vue'
  import NavigationAndForm from  './components/general/NavigationDesktop.vue'
  import FormConnexion from './components/general/FormConnexion.vue'
  import ModalNotAuth from './components/general/ModaleNotAuth.vue'
  import MobileNavLinkAndSearch from './components/general/header/MobileNavigationLinkAndSearch.vue'
export default {
    components: {
        appHeader: Header,
        appFooter: Footer,
        appNavigationAndForm: NavigationAndForm,
        appFormConnexion: FormConnexion,
        appModalNotAuth: ModalNotAuth,
        appMobileNavigationAndSearch: MobileNavLinkAndSearch
    },
    created(){
        this.$store.dispatch('initCategories');
        this.$store.dispatch('initTags');
        this.$store.dispatch('initLetters');
        this.$store.dispatch('initPuzzle');
        this.$store.dispatch('initUsers');
        this.$store.dispatch('initTags');
    },
    mounted(){
        this.$store.commit('hideAll', '.click-event, #navigation-link, #connexion-form');
        this.$store.commit('DisabledForm', '.container-bloc-recherche');
        this.$store.commit('hideModal', '.modal-container .content, .js-item-bloc');
        //

        this.$nextTick(function () {
            //
        })
    }
}
</script>

<style lang="scss">
    .st0{fill:#FFFFFF;}
    .st0{fill:none;}
  .st0{fill:none;stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st1{fill:none;stroke:#000000;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>-
