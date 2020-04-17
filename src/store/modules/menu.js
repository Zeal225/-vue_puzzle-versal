import tags from '../../data/tags'
import puzzles from '../../data/puzzles'
const state = {
    navigationVisible: false,
    formConnexionVisible: false,
    opacityIsActived: false,
    formIsActive: false,
    tagsListIsVisible: false,
    autoCompleteTagIsVisible: false,
    formSearchTagList: [],
    tags: [],
    inputText: [],
    showModalNotAuth: false,
    currentPuzzle: [],
    puzzles: []
};

const mutations = {
    'SET_TAGS': (state, tags) =>{
        state.formSearchTagList = tags;
        state.tags = tags
    },
    'SET_PUZZLES': (state, puzzles) =>{
        state.puzzles = puzzles
    },
    showModalNotAuth: state =>{
        state.showModalNotAuth = true;
    },
    hideModal(state, tagClassName){
        let elm = document.getElementById('page');
        elm.addEventListener('click', function (event) {
            if (!event.target.closest(tagClassName)){
                state.showModalNotAuth = false;
            }
        })
    },

    currentPuzzle: (state, puzzleId) =>{
        state.currentPuzzle =  state.puzzles.filter(function (puzzle) {
            return puzzle.id === puzzleId;
        });
    },

    hideModalNotAuth: state =>{
        state.showModalNotAuth = false;
    },
    writeInInput: (state, inputContent) =>{
        state.inputText.push(inputContent);
    },
    showNavigation: state =>{
        state.navigationVisible = !state.navigationVisible;
        state.formConnexionVisible = false;
    },
    hideNavigation: state =>{
        state.navigationVisible = false
    },
    showFormConnexion: state =>{
        state.formConnexionVisible = !state.formConnexionVisible;
        state.navigationVisible = false
    },
    hideFormNavigation: state =>{
        state.formConnexionVisible = false
    },
    activedOpacity: state =>{
        if (state.formConnexionVisible || state.navigationVisible){
            state.opacityIsActived = true
        }else {
            state.opacityIsActived = false
        }
    },
    removeOpacity: state =>{
        state.opacityIsActived = false
    },
    hideAll(state, tagClassName){
        let elm = document.getElementById('page');
        elm.addEventListener('click', function (event) {
            if (!event.target.closest(tagClassName)){
                state.navigationVisible = false;
                state.formConnexionVisible = false;
                state.opacityIsActived = false
            }
        })
    },
    activeForm: state =>{
        state.formIsActive = true;
    },
    removeFormShadow: state =>{
        state.formIsActive = false;
    },
    DisabledForm(state, tagClassName){
        let elm = document.getElementById('page');
        elm.addEventListener('click', function (event) {
            if (!event.target.closest(tagClassName)){
               state.formIsActive = false;
                state.tagsListIsVisible = false;
                state.autoCompleteTagIsVisible = false
            }
        })
    },
    showTagsList: state =>{
        state.tagsListIsVisible = !state.tagsListIsVisible;
        state.autoCompleteTagIsVisible = false;
        if (state.tagsListIsVisible){
            state.formIsActive = true;
        }else {
            state.formIsActive = false
        }
    },
    hideTagsList: state =>{
        state.tagsListIsVisible = false;
        state.autoCompleteTagIsVisible = false;
    },
    autoCompleteShow: state =>{
        state.autoCompleteTagIsVisible = true
    },
    autoCompleteHide: state =>{
        state.autoCompleteTagIsVisible = false
    },
    filteredFormTagsList: (state, inputContent) =>{
        state.formSearchTagList = state.tags.filter(tag => {
            return tag.nom.toLowerCase().includes(inputContent.toLowerCase())
        })
    },
    removeBrTag: (state, elm) =>{
        let tagElm = document.querySelectorAll(elm);
        for (let i = 0; i < tagElm.length; i++){
            tagElm[i].addEventListener('click', function (event) {
                console.log(event)
            })
        }
    }
};

const actions = {
    initTags({commit}){
        commit('SET_TAGS', tags);
        commit('SET_PUZZLES', puzzles);
    }
};

const getters = {
    getShowModalNotAuth(){
        return state.showModalNotAuth
    },
    getCurrentPuzzle(){
        return state.currentPuzzle
    },
    getInputContent(){
        return state.inputText
    },
    getNavigationVisible(){
        return state.navigationVisible
    },
    getFormConnexionVisible(){
        return state.formConnexionVisible
    },
    getOpacity(){
        return state.opacityIsActived
    },
    getFormActive(){
        return state.formIsActive;
    },
    getTagsListIsVisible(){
        return state.tagsListIsVisible
    },
    getAutoCompleteTagsIsVisible(){
        return state.autoCompleteTagIsVisible
    },
    getTagsAutocomplete(){
        return state.formSearchTagList
    },
    getAutoCompleteTagsLength(){
        return state.formSearchTagList.length > 0
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}