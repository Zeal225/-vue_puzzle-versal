/**
 * Created by Ablo on 05/02/2019.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categorie'
import tags from './modules/tags'
import puzzles from './modules/puzzles'
import menu from './modules/menu'
import user from './membres'
import mobileNavigation from './modules/mobileNavigation'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        categories,
        tags,
        puzzles,
        menu,
        user,
        mobileNavigation
    }
})
