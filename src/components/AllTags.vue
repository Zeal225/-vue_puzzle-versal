<template>
    <section class="section section-tags">
        <div class="container">
            <div class="content content-tag-page">
                <h2 class="section-title ariane-navigation">
                    <a href="index.html">
                    <span class="icon-home">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="97.7,107.4 97.7,58.4 110.3,58.4 60,12.6 9.7,58.4 22.3,58.4 22.3,107.4 47.4,107.4 47.4,69.5
	71,69.5 71,97.2 "/>
</svg>

                    </span>
                    </a>
                    <span class="icon-row">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polyline class="st0" points="44.3,100 83.8,60.5 43.2,20 "/>
</svg>

                </span>
                    <span class="current-page-link">
                    <span class="icon-tags">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"></path>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"></path>
</svg>
                    </span>
                    <span class="link-text">tags</span>
                </span>
                </h2>
                <div class="content-tag-bloc">
                    <div class="alphabet-bloc">
                        <div class="alphabet-bloc-content">
                            <!--ici component lettre alphabets-->
                            <app-lettre v-for="(lettre, index) in this.$store.getters.getLetters" :lettre="lettre" :index="index"></app-lettre>
                        </div>
                    </div>
                    <div class="mots-bloc">
                        <span class="current-words">x (lettre de recherche)</span>
                        <div class="mots-content">
                            <!--ici component tag-->
                            <app-tag v-for="tag in this.$store.getters.getAllTags" :tag="tag"></app-tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Lettre from './general/Lettre.vue'
    import Tag from './general/Tag.vue'
    export default{
        components:{
            appLettre: Lettre,
            appTag: Tag
        }
    }
</script>

<style scoped>

</style>