/**
 * Created by Ablo on 05/02/2019.
 */

import categories from '../../data/categories'

const state = {
    categories: []
};

const mutations = {
    'SET_CATEGORIES': (state, categories) =>{
        state.categories = categories;
    }
};

const actions = {
    initCategories({commit}){
        commit('SET_CATEGORIES', categories);
    }
};

const getters = {
    getTopCategories()
    {
        return state.categories.filter(function (category) {
            return category.nombre_wallpaper >= 90
        })
    },
    getCategories(){
        return state.categories
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
