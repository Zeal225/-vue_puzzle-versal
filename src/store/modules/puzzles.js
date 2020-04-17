/**
 * Created by Ablo on 06/02/2019.
 */

import puzzles from '../../data/puzzles'

const state = {
    puzzles: []
};

const mutations = {
    'SET_PUZZLES': (state, puzzles) =>{
        state.puzzles = puzzles
    }
};

const actions = {
    initPuzzle({commit}){
        commit('SET_PUZZLES', puzzles);
    }
};

const getters = {
    getPopularPuzzles(){
        return state.puzzles.filter(function (puzzle) {
            return puzzle.nombre_telechargement >= 250
        })
    },
    getPuzzles(){
        return state.puzzles
    },
    getPuzzleOfCategory: state => id =>{
        return state.puzzles.filter(function (puzzle) {
            return puzzle.categorie.find(category => category.id === id)
        })
    },
    getPuzzleOfTag: state => id =>{
        return state.puzzles.filter(function (puzzle) {
            return puzzle.tags.find(tag => tag.id === id)
        })
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
