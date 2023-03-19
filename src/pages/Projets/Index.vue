<script setup>
import iconProjet from '@/components/iconProjet.vue';
import { supabase, user } from '@/supabase';
import {ref, onMounted} from 'vue';
import {getAllProjets, getAllProjetsDev, getAllProjetsDesign, getAllProjetsTruc} from '@/composables/jsp.js';

const title = ref()
const allProjetsVisible = ref(true)
const devProjetsVisible = ref(false)
const designProjetsVisible = ref(false)
const trucProjetsVisible = ref(false)

const selectProjets = () => {
    let projets = getAllProjets() 
    console.log('Récupération des données de tous les projets dans la vue', projets)
    title.value="Tous mes projets"
    devProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = false
    allProjetsVisible.value = true
    return(projets)
}

let {data:projets} = await selectProjets()

const selectDev = () => {
  let projets = getAllProjetsDev() 
    console.log('Récupération des données de tous les projets dans la vue', projets)
    title.value="Projets dev"
    allProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = false
    devProjetsVisible.value = true
    return(projets)
}

let {data:projetsDev} = await selectDev()

const selectDesign = () => {
  let projets = getAllProjetsDesign() 
    console.log('Récupération des données de tous les projets dans la vue', projets)
    title.value="Projets designs"
    allProjetsVisible.value = false 
     allProjetsVisible.value = false
     devProjetsVisible.value = false
     designProjetsVisible.value = true
    return(projets)}

let {data:projetsDesign} = await selectDesign()

const selectTruc = async() => {
  let projets = getAllProjetsTruc() 
    console.log('Récupération des données de tous les projets dans la vue', projets)
    title.value="Projets truc"
    allProjetsVisible.value = false
    devProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = true
    return(projets)}

let {data:projetsTruc} = await selectTruc()

onMounted( async() => {
  selectProjets()
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
        <li class="relative"><button class="active" @click="selectProjets" href="#">Tous mes projets</button></li>
        <li class="relative"><button @click="selectDev" href="#">Sites web</button></li>
        <li class="relative"><button @click="selectDesign" href="#">Quelque chose</button></li>
        <li class="relative"><button @click="selectTruc" href="#">Untruciyvhkv</button></li>
      </ul>
    </div>
    <div v-show="allProjetsVisible" class="flex justify-center flex-wrap gap-2">
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
    <div v-show="devProjetsVisible" class="flex justify-center flex-wrap gap-2">
      <div v-for="projet in projetsDev" :key="projet.id"
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
    <div v-show="designProjetsVisible" class="flex justify-center flex-wrap gap-2">
      <div v-for="projet in projetsDesign" :key="projet.id"
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
    <div v-show="trucProjetsVisible" class="flex justify-center flex-wrap gap-2">
      <div v-for="projet in projetsTruc" :key="projet.id"
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