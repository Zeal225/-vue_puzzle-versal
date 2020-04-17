/**
 * Created by Ablo on 05/02/2019.
 */
import Home from './components/homepage/Home.vue'
import Categories from './components/AllCategories.vue'
import CategoryPuzzles from './components/CategoryPuzzles.vue'
import TagPuzzles from './components/TagPuzzles.vue'
import Tags from './components/AllTags.vue'
import Puzzles from './components/AllPuzzles.vue'
import CategoriesPopulaire from './components/CategoriesPopular.vue'
import PuzzleJoue from './components/PuzzlePlusJoue.vue'
import Membre from './components/Membre.vue'
import Inscription from './components/Inscription.vue'
import UpdateMembre from './components/UpdateMembre.vue'
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/categories',
        component: Categories,
        name: 'categories'
    },
    {
        path: '/categories/:id/:nameCategory',
        component: CategoryPuzzles,
        name: 'category-puzzle'
    },
    {
        path: '/tags',
        component: Tags,
        name: 'tags'
    },
    {
        path: '/tags/:id/:nameTag',
        component: TagPuzzles,
        name: 'tag-category'
    },
    {
        path: '/puzzles',
        component: Puzzles,
        name: 'puzzles'
    },
    {
        path: '/populaires',
        component: CategoriesPopulaire,
        name: 'categories-populaire'
    },
    {
        path: '/puzzles/populaire',
        component: PuzzleJoue,
        name: 'puzzle-joue'
    },
    {
        path: '/membres/:id/:name',
        component: Membre,
        name: 'membre'
    },
    {
        path: '/membres/inscription',
        component: Inscription,
        name: 'inscription'
    },
    {
        path: '/membres/update',
        component: UpdateMembre,
        name: 'update'
    }
];