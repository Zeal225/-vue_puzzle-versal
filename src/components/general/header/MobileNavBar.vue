<template>
    <!--mobile navigation-->
    <div class="section section-menu-mobile">
        <div class="container-head">
            <h1 class="logo">
                <router-link :to="{ name: 'home' }">
                    puzzle<span class="no-bold">versal</span>
                </router-link>
            </h1>
            <nav class="mobile-nav-bar">
                <div class="mobile-nav-content">
                    <ul class="modible-ul-elem">
                        <li
                                data-cible="mobile-search"
                                :id="$store.getters.getMobileNavigationListIsVisible ? 'active' : ''"
                                @click="$store.commit('showMobileNavigationList')"
                                class="mobile-li">
                                <span class="icon-nav-mobile">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M53.5,91.3C71.6,94,90.2,85,98.8,67.8c10.7-21.4,2-47.5-19.4-58.2S31.9,7.6,21.2,29
	C12,47.4,17.1,69.3,32.4,81.9c2.5,2,6.5,8.7,3.5,14.6c-2,4.1-9.3,18.6-9.3,18.6"/>
<g>
	<line class="st0" x1="59.7" y1="33.3" x2="59.7" y2="64.4"/>
	<line class="st0" x1="75.2" y1="48.9" x2="44.1" y2="48.9"/>
</g>
</svg>
                                </span>
                        </li>
                        <li
                                data-cible="mobile-nav"
                                :id="$store.getters.getMobileFormIsVisible ? 'active' : ''"
                                @click="$store.commit('showMobileFormSearch')"
                                class="mobile-li">
                                <span class="icon-nav-mobile">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<circle class="st0" cx="60" cy="60" r="24.8"/>
<polyline class="st0" points="115,32.5 115,5 87.5,5 "/>
<polyline class="st0" points="32.5,5 5,5 5,32.5 "/>
<polyline class="st0" points="115,87.5 115,115 87.5,115 "/>
<polyline class="st0" points="32.5,115 5,115 5,87.5 "/>
</svg>
                                </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <!--end moble navigation-->
</template>

<script>

</script>

<style scoped>

</style>