/**
 * Created by Ablo on 06/02/2019.
 */
import tags from '../../data/tags'
import letters from '../../data/letters'
const state = {
    tags: [],
    letters: [],
    filterTags: []
};

const mutations = {
    'SET_TAGS': (state, tags) =>{
        state.tags = tags;
        state.filterTags = state.tags.filter(tag => tag.nom.charAt(0) === 'a');
    },
    'SET_LETTERS': (state, letters) =>{
        state.letters = letters
    },
    'ORDER_TAGS_BY_LETTER': (state, firstLetter) =>{
        state.filterTags = state.tags.filter(function (tag) {
            return tag.nom.charAt(0) === firstLetter
        })
    },
};

const actions = {
    initTags({commit}){
        commit('SET_TAGS', tags);
    },
    initLetters({commit}){
        commit('SET_LETTERS', letters);
    },
    tagsOrderByTags({commit}, firstLetter){
        commit('ORDER_TAGS_BY_LETTER', firstLetter)
    }
};

const getters = {
    getPopularTags: state =>{
        return state.tags.filter(function (tag) {
            return tag.compteur >= 100
        })
    },
    getLetters: state =>{
        return state.letters
    },
    getAllTags: state =>{
        return state.filterTags;
    },
    getTags: state =>{
        return state.tags;
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}
