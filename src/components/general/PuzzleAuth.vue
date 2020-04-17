<template>
    <div
            @click="$store.commit('showModalNotAuth'); $store.commit('currentPuzzle', puzzle.id)"
            class="flex-resp-grid">
        <div data-cible="item-connecter" class="item-bloc js-item-bloc">
            <div class="img-bloc">
                <img v-bind:src="'/dist/images/mockup-img/'+puzzle.image" alt="">
            </div>
            <div class="bloc-infos">
                <div class="flex-content">
                    <span class="name-item">{{ puzzle.nom.length > 10 ? puzzle.nom.substr(0, 10)+'...' : puzzle.nom }}</span>
                </div>
                <div class="tag-bloc">
                    <span class="icon icon-tags">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"></path>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"></path>
</svg>

                                    </span>
                    <span class="tag-name" v-for="tag in puzzle.tags">
                        <router-link :to="{ name: 'tag-category', params:{ id: tag.id, nameTag: tag.nom}}">
                            {{ tag.nom }}
                        </router-link>
                    </span>
                </div>
            </div>
            <div class="bloc-rating-hd">
                <div class="content">
                                    <span class="icon-rating">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "></polygon>
</svg>
                                    </span>
                    <span class="icon-rating">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "></polygon>
</svg>
                                    </span>
                    <span class="icon-rating">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<polygon class="st0" points="60,10.1 72.4,48.2 112.5,48.2 80,71.8 92.4,109.9 60,86.3 27.6,109.9 40,71.8 7.5,48.2 47.6,48.2 "></polygon>
</svg>
                                    </span>
                </div>
                <div class="content">
                                            <span class="deja-joue">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M103.9,67.4c-1.2-1.2-2.8-1.7-4.7-1.4c-3,0.5-7,0.9-9.5-1.7c-1.7-1.9-2.2-4.5-1.2-8.2c1.1-4.8,6.2-15.8,9-21.6
	c-5.1,0.3-13.8,0.6-20.3-0.5c-3.1-0.5-5-1.7-5.9-3.6c-1.6-3.1,0.2-6.5,1.7-9.9c0.8-1.6,1.6-3.3,1.9-4.5c0.6-3-1.1-4.8-5.1-5.7
	c-3-0.6-5.7-0.2-7.5,1.4c-1.2,1.1-1.9,2.8-1.7,4.8c0.5,4.7-0.6,8.4-3,10.6c-1.2,1.1-3.3,2.2-6.7,1.6c-5.4-1.1-16.3-7.5-21-10.2
	c-2.3,3.9-7.3,12.6-9.3,19.7c-0.5,1.7-0.5,2.8-0.2,3.1c0.6,0.8,3.6,0.6,5.6,0.5c2.2-0.2,4.5-0.2,6.5,0.3c5.4,1.2,7.8,6.2,6.2,13
	c-1.1,4.5-4,8.2-7.6,9.5c-3,1.1-6.2,0.6-9-1.6c-2.3-1.7-4.3-2.5-5.4-2c-0.8,0.3-1.6,1.6-1.9,3.4c-0.8,4.7-0.6,15.5-0.6,20.5
	c5.3-0.5,17.4-1.2,22.8,0.2c0.2,0,0.2,0,0.3,0c3.3,0.8,4.7,2.8,5.3,4.2c1.2,3,0.5,6.8-2,10.9c-1.1,1.7-1.2,3.4-0.6,5.1
	c0.9,2.2,3.3,3.9,6.1,4.5c4,0.9,6.5,0,7.1-3c0.3-1.4,0.3-3.1,0.5-4.8c0.2-3.7,0.2-7.6,3-9.6c1.7-1.2,4-1.4,7-0.6
	c6.2,1.9,13.7,5.9,18.2,8.5c-0.2-3.7,0-9.5,0.8-15.4c0.5-3.6,1.7-5.7,3.6-7c2.6-1.6,5.7-0.3,8.5,0.9c1.2,0.5,2.6,1.1,3.7,1.4
	c3.3,0.8,5.9-1.1,6.8-4.8C106.1,71.9,105.5,69,103.9,67.4z"/>
</svg>

                                            </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['puzzle']
    }
</script>

<style scoped></style>