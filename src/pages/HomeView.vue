<script setup>
import listProjets from '@/components/listProjets.vue'
import listProjetsDev from '@/components/listProjetsDev.vue'
import listProjetsDesign from '@/components/listProjetsDesign.vue'
import listProjetsTruc from '@/components/listProjetsTruc.vue'
import newListProjets from '@/components/newListProjets.vue'
import { ref, computed } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { onMounted } from 'vue';
import { supabase } from '@/supabase';

// const title = ref()
const categories = ref(["universitaire", "professionnel"])
const allProjetsVisible = ref(true)
const devProjetsVisible = ref(false)
const designProjetsVisible = ref(false)
const trucProjetsVisible = ref(false)

const categorieSelected = (cat) => {
  categories.value=cat
}

const selectProjets = () => {
    devProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = false
    allProjetsVisible.value = true
}


const selectDev = () => {
    allProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = false
    devProjetsVisible.value = true
}


const selectDesign = () => {
    allProjetsVisible.value = false 
     allProjetsVisible.value = false
     devProjetsVisible.value = false
     designProjetsVisible.value = true
    }


const selectTruc = () => {
    allProjetsVisible.value = false
    devProjetsVisible.value = false
    designProjetsVisible.value = false
    trucProjetsVisible.value = true
    }

onMounted( () => {
  categorieSelected(['universitaire', 'professionnel'])
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
  <main>
    <div class="bg-black pt-10">
      <div class="flex flex-col-reverse pt-5  ml-5 sm:ml-10 ">
        <h1 class="font-unbounded text-3xl sm:text-6xl pt-5">Hugo Beaurain</h1>
        <h2 class="font-poppins text-xl sm:text-3xl">Développeur web</h2>
      </div>
      <hr class="bg-cyan-400 h-1 w-1/2 sm:w-1/4 border-t-0 my-8 ml-5 sm:ml-10 ">
      <div class="md:flex ml-5 sm:ml-10 ">
        <div class="font-poppins text-sm sm:text-xl mr-8">
          <p>Je suis Hugo Beaurain, étudiant en deuxième année du <a class="underline" target="_blank" href="https://stgi.umlp.fr/formation/master-psm/"> master Technologie de l'Information « Produits et Services Multimédias »</a> à Montbéliard. Avant ça, je suis passé par le BUT MMI de Montbéliard dans la spécialité "Développement web et dispositifs interactifs" ; c'est ici que j'ai découvert le développement web et que j'ai décidé d'en faire mon métier !</p>
          <p class="mt-5">Le <strong class="text-cyan-400">développement web</strong> n'est pas ma seule passion, loin de là ! Je suis quelqu'un qui aime toucher à tout, surtout dans le monde du numérique. Depuis 5 ans, je m'investis au sein d'<a class="underline" target="_blank" href="https://linktr.ee/exalty_fr">Exalty</a>, une association esport, en tant que <strong class="text-cyan-400">community manager</strong>. Durant mes années en MMI, j'ai fait parti de la WebTV de l'iUT Nord Franche-Comté où j'ai participé à la production d'émission en direct pour la Journée Portes Ouvertes.</p>

          <img class="hidden md:block md:m-auto" src="@/assets/double_fleche.svg" alt="Double flèche qui pointe vers le bas"> 
        </div>
        <div class="flex md:flex-col mr-0 md:-mt-10">
          <img class="block md:hidden m-auto" src="@/assets/double_fleche.svg" alt="Double flèche qui pointe vers le bas">
          <div class="hidden md:block z-0 w-36 h-36 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-60"></div>
          <img class="relative w-1/2 mr-0 md:w-full md:-mt-96" src="@/assets/photo_hugo.webp" alt="">
        </div>
      </div>
    </div>
    <!-- <div class="bg-zinc-900 pt-5 sm:pt-10">
      <ul class="font-unbounded text-sm text-slate-400 flex justify-evenly mx-5">
        <li class="relative"><button class="active" @click="selectProjets" href="">Projets récents</button></li>
        <li class="relative"><button @click="selectDev">Projets universitaires</button></li>
        <li class="relative"><button @click="selectDesign">Projets clients</button></li>
      </ul>
      <div>
      <div v-show="allProjetsVisible">
        <listProjets class="relative mt-5" :max="9" />
      </div>
      <div v-show="devProjetsVisible">
        <listProjetsDev class="relative mt-5" :max="9" />
      </div>
      <div v-show="designProjetsVisible">
        <listProjetsDesign class="relative mt-5" :max="9" />
      </div>
      <div v-show="trucProjetsVisible">
        <listProjetsTruc class="relative mt-5" :max="9" />
      </div>
      </div>
      <div class="w-max my-5 mx-auto bg-sky-500 text-xs sm:text-2xl rounded-xl p-1">
        <div class="bg-black h-full w-full rounded-lg px-8 py-1">
          <RouterLink to="/projets" class="font-unbounded font-regular ">
            <span>Voir plus</span>
          </RouterLink>
        </div>    
      </div>
      <img class="-mt-10 w-1/2 sm:w-1/4" src="@/assets/wave1.svg" alt="">
    </div> -->
    <div class="bg-zinc-900 pt-5 sm:pt-10">
      <ul class="font-unbounded text-sm text-slate-400 flex justify-evenly mx-5 mb-5">
        <li class="relative"><button class="active" @click="categorieSelected(['universitaire', 'professionnel'])" href="">Projets récents</button></li>
        <li class="relative"><button @click="categorieSelected(['universitaire'])">Projets universitaires</button></li>
        <li class="relative"><button @click="categorieSelected(['professionnel'])">Projets clients</button></li>
      </ul>
      <newListProjets :max=3 :categorie="categories" />
      <div class="w-max my-5 mx-auto bg-sky-500 text-xs sm:text-2xl rounded-xl p-1">
        <div class="bg-black h-full w-full rounded-lg px-8 py-1">
          <RouterLink to="/projets" class="font-unbounded font-regular ">
            <span>Voir plus</span>
          </RouterLink>
        </div>    
      </div>
    </div>
    <div class="bg-zinc-900 py-10 relative">
      <div class="border-2 border-cyan-500 w-3/4 h-fit m-auto py-5 bg-zinc-700 abslute top-0 left-1/2">
        <div id="contact" class="bg-[url('src/assets/morphCircle.svg')] bg-contain bg-center bg-no-repeat">
          <div class="flex flex-col">
            <div>
              <div class="font-unbounded text-2xl text-center"> 
                <p>Contactez</p>
                <p class="test"> moi</p>
              </div>
              <p class="mx-10 text-center font-poppins">Pour toute questions sur mes projets, ou pour des demandes particulières, n'hésitez pas à me contacter.</p>
            </div>
            <div>
              <ul class="flex justify-center">
                <li><a href="https://www.linkedin.com/in/hugo-beaurain-5473a0224/"><img src="@/assets/LinkedIn_hugo.svg" alt=""><span class="sr-only">LinkedIn</span></a></li>
                <li><a href="https://github.com/Beaurain-Hugo"><img src="@/assets/GitHub.svg" alt=""><span class="sr-only">Github</span></a></li>
              </ul>
            </div>
          </div>
          <div class="flex m-auto justify-center font-poppins text-sm w-fit">
            <img class="w-1/4" src="@/assets/arrow_turbine.svg" alt="">
            <a href="mailto:hugo.beaurain@yahoo.com">hugo.beaurain@yahoo.com</a>
          </div>
        </div>
      </div>  
    </div>
  </main>
</template>

<style scoped>
.test::before {
  display:inline-block;
  vertical-align: middle;
  height:2px;
  width:90px;
  content:"";
  background:white
}
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
