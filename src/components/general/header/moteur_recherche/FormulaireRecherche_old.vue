<template>
    <div :class="[$store.getters.getOpacity ? 'opaciter' : '']" class="section section-moteur-recherche">
        <div
                :class="[$store.getters.getFormActive ? 'shadow' : '']"
                class="container container-bloc-recherche">
            <div class="content">
                <form action="" class="form-recherche">
                    <div class="input-bloc">
                        <div
                                v-on:keyup.space=""
                                @click="$store.commit('activeForm')"
                                @input=""
                                id="input-editable"
                                contenteditable="true"
                                class="input-editable"
                                placeholder="rechercher">
                            <!--<span class="tag-simple" v-for="tag in this.$store.getters.getInputContent">{{ tag }}, </span>-->
                        </div>
                        <div
                                class="liste-autocomplete"
                                v-show="$store.getters.getAutoCompleteTagsIsVisible && $store.getters.getAutoCompleteTagsLength">
                            <ul class="tags-list-ul">
                                <!--component de tag list ici-->
                                <app-tags-list
                                        v-for="tag in $store.getters.getTagsAutocomplete"
                                        :tag="tag"></app-tags-list>
                            </ul>
                        </div>
                        <div
                                @click="$store.commit('showTagsList')"
                                data-tag-zone="zone-tags"
                                :class="[$store.getters.getTagsListIsVisible ? 'tag-is-show' : '']"
                                class="icon-tag-bloc">
                            <span class="other-icons icon-tags">

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">

<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>
                                </span>
                        </div>
                        <div class="btn-search">
                            <button type="submit" class="btn btn-recherche">
                                    <span>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M53.5,91.3C71.6,94,90.2,85,98.8,67.8c10.7-21.4,2-47.5-19.4-58.2S31.9,7.6,21.2,29
	C12,47.4,17.1,69.3,32.4,81.9c2.5,2,6.5,8.7,3.5,14.6c-2,4.1-9.3,18.6-9.3,18.6"/>
<g>
	<line class="st0" x1="59.7" y1="33.3" x2="59.7" y2="64.4"/>
	<line class="st0" x1="75.2" y1="48.9" x2="44.1" y2="48.9"/>
</g>
</svg>

                                    </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div id="zone-tags" class="content content-tags" v-show="$store.getters.getTagsListIsVisible">
                <div class="alphabet-bloc">
                    <div class="alphabet-bloc-content">
                        <app-lettre v-for="(lettre, index) in this.$store.getters.getLetters" :lettre="lettre" :index="index"></app-lettre>
                    </div>
                </div>
                <div class="mots-bloc">
                    <span class="current-words">a</span>
                    <div class="mots-content">
                        <app-tag v-for="tag in this.$store.getters.getAllTags" :tag="tag"></app-tag>
                    </div>
                </div>
            </div>
        </div>
        <!--ici-->
    </div>
</template>

<script>
    import Tag from '../../Tag.vue'
    import Lettre from '../../Lettre.vue'
    import TagsList from './TagsList.vue'
    export default{
        data(){
            return{
                textTable: [],
                inputText: ''
            }
        },
        components:{
            appLettre: Lettre,
            appTag: Tag,
            appTagsList: TagsList
        },
        methods: {
            checkContent(event){
                this.inputText = event.target.textContent.trim();
                this.textTable = this.inputText.split(' ');
                let textLength = this.textTable[this.textTable.length-1].length;
                if (textLength === 0){
                    this.$store.commit('autoCompleteHide')
                }else {
                    this.$store.commit('autoCompleteShow')
                }
                this.$store.commit('filteredFormTagsList', this.textTable[this.textTable.length-1].trim());
            }
        }
    }
</script>

<style scoped>
    .tag-simple{
        display: inline !important;
    }
</style>