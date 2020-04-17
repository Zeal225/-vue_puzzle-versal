/**
 * Created by Ablo on 19/03/2019.
 */

const state = {
    mobileFormIsVisible: false,
    mobileNavigationListIsVisible: false
};
const mutations = {
    showMobileFormSearch: state =>{
        state.mobileFormIsVisible = ! state.mobileFormIsVisible;
        state.mobileNavigationListIsVisible = false;
    },
    hideMobileFormSearch: state =>{
        state.mobileFormIsVisible = false;
    },
    //
    showMobileNavigationList: state =>{
        state.mobileNavigationListIsVisible = !state.mobileNavigationListIsVisible;
        state.mobileFormIsVisible = false;
    },
    hideMobileNavigationList: state =>{
        state.mobileNavigationListIsVisible = false;
    }
};

const getters = {
    getMobileFormIsVisible(){
        return state.mobileFormIsVisible
    },
    getMobileNavigationListIsVisible(){
        return state.mobileNavigationListIsVisible
    }
};

export default {
    state,
    mutations,
    getters
}
