<template>
    <section class="section section-top-categories js-add-padding">
        <div class="container">
            <div class="content">
                <h3 class="section-title  categories-title">top catégories</h3>
                <div class="row flex-content nest row-items">
                    <!--item categorie ici-->
                    <app-item-category v-for="category in topCategories" :category="category"></app-item-category>
                </div>
                <h4 class="section-link">
                    <router-link :to="{ name: 'categories' }">
                        toutes les catégories
                        <span class="section-link-icon">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="44.3,100 83.8,60.5 43.2,20 "/>
</svg>
                            </span>
                    </router-link>
                </h4>
            </div>
        </div>
    </section>
</template>

<script>
    import ItemCategory from '../general/ItemCategory.vue'
    export default{
        components:{
            appItemCategory: ItemCategory
        },
        computed:{
            topCategories(){
                return this.$store.getters.getTopCategories
            }
        }
    }
</script>

<style scoped></style>