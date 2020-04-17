<template>
    <div
            class="flex-resp-grid"
            @click="$store.commit('showModalNotAuth'); $store.commit('currentPuzzle', puzzle.id)">
        <div data-cible="item-non-connecter" class="item-bloc js-item-bloc">
            <div class="img-bloc">
                <img v-bind:src="'/dist/images/mockup-img/'+puzzle.image">
            </div>
            <div class="bloc-infos">
                <div class="flex-content">
                    <span class="name-item">{{ puzzle.nom.length > 10 ? puzzle.nom.substr(0, 10)+'...' : puzzle.nom }}</span>

                </div>
                <div class="tag-bloc">
                    <span class="icon icon-tags">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>

                                    </span>
                    <span class="tag-name">
                        <router-link :to="{ name: 'tag-category', params:{ id: tag.id, nameTag: tag.nom}}" v-for="(tag, index) in puzzle.tags">
                            {{ tag.nom }} {{ index < 1 ? ',' : '' }}
                        </router-link>
                    </span>
                </div>
            </div>
            <div class="bloc-rating-hd">
                <div class="content">
                    <span class="icon-rating">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "/>
</svg>
                                    </span>
                    <span class="icon-rating">

    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
    <polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "/>
    </svg>
                                        </span>
                    <span class="icon-rating">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "/>
</svg>
                                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['puzzle'],
    }
</script>

<style>

</style>