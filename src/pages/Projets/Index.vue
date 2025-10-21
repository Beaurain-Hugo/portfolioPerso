<script setup>
import iconProjet from '@/components/iconProjet.vue';
import { supabase, user } from '@/supabase';
import newListProjets from '@/components/newListProjets.vue'
import {ref, onMounted, computed} from 'vue';
import {getAllProjets, getAllProjetsDev, getAllProjetsDesign, getAllProjetsTruc} from '@/composables/jsp.js';

const title = ref("Tous")
const categories = ref(["universitaire", "professionnel"])

const categorieSelected = (cat) => {
  categories.value=cat
  cat.length > 1 ? title.value = "Tous" : title.value = cat[0]+"s"
}

const PROJETS = ref([])
const NB_PAGE_PROJETS = ref(0)

const GRID_PROJETS = computed(() => {
  const PROJETS_BY_PAGE = 3
  // console.log("projets value", PROJETS.value)
  return PROJETS.value.slice(0, props.max ?? 3 + PROJETS_BY_PAGE * NB_PAGE_PROJETS.value)
})

const seeMoreRecipes = () => {
  NB_PAGE_PROJETS.value++
  console.log(NB_PAGE_PROJETS.value)
}

const MORE_PROJETS_TO_SHOW = computed(() => {
  return GRID_PROJETS.value.length < PROJETS.value.length
})

const fetchProjets = async () => {
  try {
    const {data:projets, error } = await supabase
      .from('Projets')
      .select('*')
      // .eq('visible', true)
      .limit(props.max ?? 10000)
    // console.log(projets)
    PROJETS.value = projets
    console.log(PROJETS.value)
    // console.log(PROJETS.value)
  } catch (error) {
    console.log(error)
  }
} 

const PROJETS_UNIVERSITAIRES = computed(() => {
  return PROJETS.value.filter((projet) => projet.categorie.toLowerCase().includes(`universitaire`)) // version courte
  // return recipes.value.filter((recipe)=> {
  //   return (recipe.recipe_name.includes('Spaghetti'))
  // })
})

// const selectProjets = () => {
//     let projets = getAllProjets() 
//     console.log('Récupération des données de tous les projets dans la vue', projets)
//     title.value="Tous mes projets"
//     devProjetsVisible.value = false
//     designProjetsVisible.value = false
//     trucProjetsVisible.value = false
//     allProjetsVisible.value = true
//     return(projets)
// }

// let {data:projets} = await selectProjets()

// const selectDev = () => {
//   let projets = getAllProjetsDev() 
//     console.log('Récupération des données de tous les projets dans la vue', projets)
//     title.value="Projets Universitaires"
//     allProjetsVisible.value = false
//     designProjetsVisible.value = false
//     trucProjetsVisible.value = false
//     devProjetsVisible.value = true
//     return(projets)
// }

// let {data:projetsDev} = await selectDev()

// const selectDesign = () => {
//   let projets = getAllProjetsDesign() 
//     console.log('Récupération des données de tous les projets dans la vue', projets)
//     title.value="Projets Clients"
//     allProjetsVisible.value = false 
//      allProjetsVisible.value = false
//      devProjetsVisible.value = false
//      designProjetsVisible.value = true
//     return(projets)}

// let {data:projetsDesign} = await selectDesign()
// const selectTruc = () => {
//   let projets = getAllProjetsTruc() 
//     console.log('Récupération des données de tous les projets dans la vue', projets)
//     title.value="Projets truc"
//     allProjetsVisible.value = false
//     devProjetsVisible.value = false
//     designProjetsVisible.value = false
//     trucProjetsVisible.value = true
//     return(projets)}

// let {data:projetsTruc} = await selectTruc()

onMounted( () => {
  fetchProjets()
  // categorieSelected(['universitaire', 'professionnel'])
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
      <h1 class="font-unbounded">Projets<br>{{title}}</h1>
          <div class="bg-zinc-900 pt-5 sm:pt-10">
      <ul class="font-unbounded text-sm text-slate-400 flex justify-evenly mx-5 mb-5">
        <li class="relative"><button class="active" @click="categorieSelected(['universitaire', 'professionnel'])" href="">Tous mes projets</button></li>
        <li class="relative"><button @click="categorieSelected(['universitaire'])">Projets universitaires</button></li>
        <li class="relative"><button @click="categorieSelected(['professionnel'])">Projets clients</button></li>
      </ul>
        <newListProjets :categorie="categories" />
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