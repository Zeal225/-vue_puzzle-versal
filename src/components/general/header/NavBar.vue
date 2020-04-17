<template>
    <div class="section section-head">
        <div class="container-head">
            <h1 class="logo">
                <router-link :class="" :to="{ name: 'home' }">
                    puzzle<span class="no-bold">versal</span>
                </router-link>
            </h1>
            <nav class="nav-bar">
                <div class="nav-bar-content">
                    <ul class="nav-bar-ul">
                        <li class="menu-item item-recherche">
                                <span class="icon icon-search">
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
                                @click="$store.commit('showNavigation'), $store.commit('activedOpacity')"
                                data-cible="navigation-link"
                                class="menu-item click-event">
                                <span class="icon icon-categories">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<line class="st0" x1="115" y1="15" x2="5" y2="15"/>
<line class="st0" x1="115" y1="60" x2="5" y2="60"/>
<line class="st0" x1="115" y1="105" x2="5" y2="105"/>
</svg>
                                </span>
                        </li>
                        <li class="menu-item">
                            <router-link :to="{ name: 'tags' }" class="icon icon-tags">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M90.2,84.5h18.4c3.5,0,6.5-2.9,6.5-6.5V42c0-3.6-2.9-6.5-6.5-6.5h-71c-3.5,0-8.7,1.9-11.4,4.2L7,55.8
	c-2.7,2.3-2.7,6.1,0,8.4l19.1,16.1c2.7,2.3,7.9,4.2,11.4,4.2h29.5"/>
<path class="point" d="M26.7,63.6c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6C23.1,62,24.7,63.6,26.7,63.6"/>
</svg>
                            </router-link>
                        </li>

                        <li
                                @click="$store.commit('showFormConnexion'), $store.commit('activedOpacity')"
                                data-cible="connexion-form"
                                class="menu-item click-event">
                                <span class="icon icon-profile">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
<path class="st0" d="M32.7,115c-0.1-1.3,0.9-12.4-0.6-19.5c-3.6-17-13.4-16.9-20.1-36.7c-2-5.9-2.3-12.6-1.5-18.9
	c1.3-9.3,4.5-18.5,12.3-24.4C31.5,8.4,43,5,53.3,5c13.5,0,25.5,4.9,31.8,10.9c6.3,5.9,10.6,14.2,12.4,22.8c0.3,2.8-2.7,4.5-1.6,7.3
	l0.4,1.1c4.3,4.9,8.9,9.8,13.2,14.6c0.5,1,0.3,2.3-0.4,3.1c-1.8,2.1-5.4,1.5-6.1,4.8c-0.2,2.4,1.1,4.2,2.3,6
	c0.1,1.7-2.8,2.6-1.6,4.4c0.6,0.8,2.1,1.1,1.7,2.3c-4.6,4.3,2,8.2,0.4,13.1c-0.9,2.4-3.5,2.6-5.5,3c-5,1.1-10.3,0.6-14.6,3.3
	c-4.1,3.1-3.7,8.6-4.2,13.3v0"/>
</svg>
                                </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>

</script>

<style scoped></style>