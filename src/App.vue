<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import { user } from "@/supabase";

const menuOuvert = ref(false);
</script>

<template>
  <header class="bg-black py-2">
    <nav class="flex justify-between px-5 sm:px-20 font-unbounded text-3xl">
      <RouterLink to="/">
        <img alt="Logo" class="logo" src="@/assets/logo.svg" width="50" />
      </RouterLink>
      <div class="hidden sm:flex items-center gap-5">
        <RouterLink class="active:text-cyan-400" to="/projets"
          >Projets</RouterLink
        >
        <a class="active:text-cyan-400" href="/#contact">Contact</a>
        <div v-if="user" class="dropdown">
          <label tabindex="0" class="btn bg-cyan-400 hover:bg-cyan-800 m-1"
            >Menu admin</label
          >
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-black rounded-box w-52"
          >
            <li>
              <RouterLink class="text-lg hover:bg-gray-800" to="/connexion"
                >Compte</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-lg hover:bg-gray-800"
                to="/Projets/NewView"
                >Ajout de projet</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="text-lg hover:bg-gray-800"
                to="/Logiciels/NewView"
                >Ajout de logiciel
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-lg hover:bg-gray-800"
                to="/langages/NewView"
                >Ajout de langage
              </RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:bg-gray-800" to="/logiciels"
                >Modification de logiciel
              </RouterLink>
            </li>
            <li>
              <RouterLink class="text-lg hover:bg-gray-800" to="/langages"
                >Modification de langage
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="relative flex sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <img src="@/assets/menu.svg" alt="" />
        <span class="sr-only">Menu</span>
      </button>
    </nav>
    <div
      id="menu"
      :class="{ 'translate-x-0': menuOuvert, 'translate-x-full': !menuOuvert }"
      class="fixed inset-0 flex z-10 flex-col bg-black-light justify-center motion-safe:transition-transform motion-safe:duration-1000"
    >
      <button
        class="absolute top-3 right-3"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <XMarkIcon class="w-10" />
        <span class="sr-only">Fermer menu</span>
      </button>
      <nav
        class="font-unbounded flex flex-col justify-center gap-4 top-0 bottom-0 left-0 right-0 w-full h-screen items-center border-t-8 bg-black"
      >
        <RouterLink
          @click="menuOuvert = !menuOuvert"
          class="text-3xl"
          to="/projets"
          >Projets</RouterLink
        >
        <hr class="bg-cyan-4  00 w-1/2 h-0.5" />
        <a @click="menuOuvert = !menuOuvert" class="text-3xl" href="/#about"
          >À propos</a
        >
        <hr class="bg-cyan-400 w-1/2 h-px" />
        <a @click="menuOuvert = !menuOuvert" class="text-3xl" href="/#contact"
          >Contact</a
        >
        <RouterLink
          v-if="user"
          @click="menuOuvert = !menuOuvert"
          to="/connexion"
          >Compte</RouterLink
        >
      </nav>
    </div>
  </header>
  <suspense>
    <RouterView />
  </suspense>
</template>
