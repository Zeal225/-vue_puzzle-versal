<template>
    <div class="lettre" @click="$store.dispatch('tagsOrderByTags', lettre), toggleActiveClass()">
        <span ref="myLink" class="lettre-span" :class="(index === 0 ? 'current-lettre' : '')">{{ lettre }}</span>
    </div>
</template>

<script>
    export default{
        props: ['lettre', 'index'],
        methods:{
            toggleActiveClass(){
                let elmts = document.querySelectorAll('.lettre-span');
                elmts.forEach(function (elmt) {
                    elmt.classList.remove('current-lettre')
                });
                this.$refs.myLink.classList.add('current-lettre')
            }
        }
    }
</script>

<style scoped>
    .lettre-span{
        cursor: pointer;
    }
</style>