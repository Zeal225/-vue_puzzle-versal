<template>
    <header>
       <!--pub ici-->
        <app-top-pub></app-top-pub>
        <!--mobile nav ici-->
        <app-mobile-nav></app-mobile-nav>
        <!--desktop nav ici-->
        <app-desktop-nav></app-desktop-nav>
        <!--form de recherche ici-->
        <app-search-form></app-search-form>
    </header>
</template>

<script>
    import TopPub from './TopPub.vue'
    import MobileNav from './MobileNavBar.vue'
    import DesktopNav from './NavBar.vue'
    import SearchForm from  './moteur_recherche/FormulaireRecherche.vue'
    export default {
        components:{
            appTopPub: TopPub,
            appMobileNav: MobileNav,
            appDesktopNav: DesktopNav,
            appSearchForm: SearchForm
        }
    }
</script>

<style scoped>

</style>