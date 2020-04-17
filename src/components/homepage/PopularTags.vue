<template>
    <section class="section section-recherche-populaire">
        <div class="container">
            <div class="content add-padding nest">
                <h3 class="section-title">les recherches les plus populaires</h3>
                <div class="row tag-name">
                    <span v-for="tag in getPopularTags">
                        <router-link :to="{ name: 'tag-category', params:{id: tag.id, nameTag: tag.nom } }">
                            {{ tag.nom }}
                        </router-link>
                    </span>
                </div>
                <h4 class="section-link">
                    <router-link :to="{ name: 'tags' }">
                        tous les tags
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
    export default{
        computed:{
            getPopularTags(){
                return this.$store.getters.getPopularTags
            }
        }
    }
</script>

<style scoped>

</style>