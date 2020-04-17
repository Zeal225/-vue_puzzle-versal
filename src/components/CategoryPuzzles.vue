<template>
    <section class="section section-tags-item">
        <div class="container">
            <div class="content">
                <h2 class="section-title ariane-navigation">
                    <router-link :to="{ name: 'home' }">
                        <span class="icon-home">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="97.7,107.4 97.7,58.4 110.3,58.4 60,12.6 9.7,58.4 22.3,58.4 22.3,107.4 47.4,107.4 47.4,69.5
	71,69.5 71,97.2 "/>
</svg>
                    </span>
                    </router-link>
                    <span class="icon-row">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="44.3,100 83.8,60.5 43.2,20 "></polyline>
</svg>

                </span>
                    <router-link :to="{ name: 'categories' }" class="ariane-link-inter">
                        catégories
                    </router-link>
                    <span class="icon-row">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="44.3,100 83.8,60.5 43.2,20 "></polyline>
</svg>

                </span>
                    <span class="current-page-link">
                    <span class="link-text">{{ $route.params.nameCategory }}</span>
                </span>
                </h2>
                <div class="row flex-content nest row-items">
                    <!--component puzzle ici-->
                    <app-puzzle
                            v-for="puzzle in this.$store.getters.getPuzzleOfCategory(parseInt($route.params.id))" :puzzle="puzzle">
                    </app-puzzle>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Puzzle from './general/puzzleNoAuth.vue'
    export default{
        components:{
            appPuzzle: Puzzle
        }
    }
</script>

<style>

</style>