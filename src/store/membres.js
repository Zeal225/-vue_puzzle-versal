/**
 * Created by Ablo on 11/02/2019.
 */
import users from '../data/users'

const state = {
    user : [],
    historyIsVisible: false
};

const mutations = {
    'SET_USERS': (state, users) =>{
        state.user = users[0]
    },
    showHistory: state =>{
        state.historyIsVisible = !state.historyIsVisible
    },
    hideHistory: state =>{
        state.historyIsVisible = false
    }
};

const actions = {
    initUsers({commit}){
        commit('SET_USERS', users);
    }
};

const getters = {
    getUser(){
        return state.user
    },
    getHistoryIsVisible(){
        return state.historyIsVisible
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
