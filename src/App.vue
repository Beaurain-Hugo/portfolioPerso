<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from 'vue'
import {user} from '@/supabase'

const menuOuvert = ref(false)
</script>

<template>
<header class="bg-black py-2">
    <nav class="flex justify-between px-5 sm:px-20 font-unbounded text-3xl">
      <RouterLink to="/">
        <img alt="Logo" class="logo" src="@/assets/logo.svg" width="50"/>
      </RouterLink>
      <div class="hidden sm:flex items-center gap-5">
        <RouterLink class="active:text-cyan-400" to="/projets">Projets</RouterLink>
        <a class="active:text-cyan-400" href="/#contact">Contact</a>
        <div v-if="user" class="dropdown">
          <label tabindex="0" class="btn bg-cyan-400 hover:bg-cyan-800 m-1">Menu admin</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-black  rounded-box w-52">
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/connexion">Compte</RouterLink></li>
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/Projets/NewView">Ajout de projet</RouterLink></li>
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/Logiciels/NewView">Ajout de logiciel </RouterLink></li>
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/langages/NewView">Ajout de langage </RouterLink></li>
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/logiciels">Modification de logiciel </RouterLink></li>
              <li><RouterLink class="text-lg hover:bg-gray-800" to="/langages">Modification de langage </RouterLink></li>
            </ul>
        </div>
      </div>
      <button class="relative flex sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
        >
        <img src="@/assets/menu.svg" alt="">
        <span class="sr-only">Menu</span> 
      </button>  
    </nav>
    <div 
    id="menu"
    class="
        fixed
        inset-0
        flex
        z-10
        translate-x-full
        flex-col
        bg-black-light
        justify-center
        motion-safe:transition-transform motion-safe:duration-1000
      "
      :class="{ 'translate-x-0': menuOuvert }">
      <button class="absolute top-3 left-3 " 
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        <span class="sr-only">Fermer menu</span> 
      </button> 
      <nav class="font-unbounded flex flex-col items-center border-t-8 border-red-500">
        <RouterLink @click="menuOuvert = !menuOuvert" class="" to="/projets">Projets</RouterLink>
        <a @click="menuOuvert = !menuOuvert" href="/#about">À propos</a>
        <a @click="menuOuvert = !menuOuvert" href="/#contact">Contact</a>
        <RouterLink v-if="user" @click="menuOuvert = !menuOuvert" to="/connexion">Compte</RouterLink>
      </nav>
    </div>
  </header>
  <suspense>
    <RouterView />
  </suspense>
</template>
