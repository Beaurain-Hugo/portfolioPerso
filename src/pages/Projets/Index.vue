<script setup>
import iconProjet from '@/components/iconProjet.vue';
import { supabase, user } from '@/supabase';
import {ref, onMounted} from 'vue';

const title = ref()
title.value = "salut"

let {data:projets, error} = await supabase
  .from('Projets')
  .select('*')
  console.log(projets, error)

  const selectAll = async() => {
  title.value="All"
}

const selectDev = async() => {
  title.value="Dev"
}

const selectDesign = async() => {
  title.value="Design"
}

const selectTruc = async() => {

  title.value="selectTruc"
}

onMounted( async() => {
  await selectAll()
})
</script>

<script>
export default{
mounted() {
        const boutons = document.querySelectorAll('button');
        boutons.forEach(bouton => {
            bouton.addEventListener('click', () => {
                // Supprimez toutes les classes "active" des autres boutons
                boutons.forEach(b => b.classList.remove('active'));
                // Ajoutez la classe "active" au bouton actuel
                bouton.classList.add('active');
            });
        });
    }
  }
</script>

<template>
  <main class="bg-zinc-900">
    <div class="text-4xl flex flex-col text-center">
      <h1 class="font-unbounded">Projets</h1>
      <h1 class="font-unbounded">{{ title }}</h1>

      <ul class="font-unbounded text-sm text-slate-400 flex justify-evenly mx-5">
        <li class="relative"><button class="active" @click="selectAll" href="">Projets récents</button></li>
        <li class="relative"><button @click="selectDev" href="">Sites web</button></li>
        <li class="relative"><button @click="selectDesign" href="">Quelque chose</button></li>
        <li class="relative"><button @click="selectTruc" href="">Untruciyvhkv</button></li>
      </ul>
    </div>
    <div class="flex justify-center flex-wrap gap-2">
      <div v-for="projet in projets" :key="projet.id"  
      class="relative group"> 
          <button 
            v-if="user"
            @click="$router.push({ name: 'Projets-Projet-edit-id', params: { id: projet.id } })"
            class="hidden group-hover:block z-10 absolute top-0 right-0 p-1 border-double border-2">
            Editer offre
          </button>
          <iconProjet 
            v-bind="projet" 
            @click=" $router.push({ name: 'Projets-Projet-title', params: { title: projet.title } })" 
          />
      </div>
    </div>
  </main> 
</template>

<style scoped>
ul li button::after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(14 165 233);
    transition: width 0.3s;
}
button:hover::after {
    width: 75%;
}
.click {
    content: "";
    height: 3px;
    position: absolute;
    left: 50%;
    width: 50%;
    background-color: rgb(14 165 233);
}

.active{
  color:white;
}
.active::after {
    width: 50%;
}


</style>