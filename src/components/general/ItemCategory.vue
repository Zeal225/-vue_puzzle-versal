<template>
    <div class="flex-resp-grid">
        <div class="item">
            <router-link :to="{ name: 'category-puzzle', params: { id: category.id, nameCategory: category.nom } }">
                <span class="img-category">
                    <img v-bind:src="'dist/images/mockup-img/'+category.image_categorie">
                </span>
                <span class="img-infos">
                    <span class="name-category">{{ category.nom.length > 10 ? category.nom.substr(0, 10)+'...' : category.nom }}</span>
                    <span class="num-item">({{ category.nombre_wallpaper }})</span>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['category']
    }
</script>

<style scoped></style>