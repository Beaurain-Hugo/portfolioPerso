<script setup>
import listProjets from '@/components/listProjets.vue'
import listProjetsDev from '@/components/listProjetsDev.vue'
import listProjetsDesign from '@/components/listProjetsDesign.vue'
import listProjetsTruc from '@/components/listProjetsTruc.vue'
import {ref} from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { onMounted } from 'vue';
import { supabase } from '@/supabase';

const title = ref()
const allProjetsVisible = ref(true)
const devProjetsVisible = ref(false)
const designProjetsVisible = ref(false)
const trucProjetsVisible = ref(false)

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
  <main class="bg-black">
    <div class="ml-5 sm:ml-10 pt-10">
      <div class="flex flex-col-reverse pt-5">
        <h1 class="font-unbounded text-3xl sm:text-6xl pt-5">Hugo Beaurain</h1>
        <h2 class="font-poppins text-xl sm:text-3xl">Développeur</h2>
      </div>
      <hr class="bg-cyan-400 h-1 w-1/2 sm:w-1/4 border-t-0 my-8">
      <div class="sm:flex">
        <div class="font-poppins text-sm sm:text-xl">
          <p>Je m'appelle Hugo Beaurain et j'ai 20 ans. Je suis passionné par le <strong class="text-cyan-400">développement web</strong> et je passe beaucoup de temps à apprendre et à mettre en pratique mes compétences en <strong class="text-cyan-400">programmation</strong>.</p>
          <p class="mt-8">Je m'intéresse aussi à la conception web et à la création de sites web. La satisfaction que je tire de la création de quelque chose de nouveau me fascine.</p>
          <img class="hidden sm:block sm:m-auto" src="@/assets/double_fleche.svg" alt="">
         <!-- <div>
            <ChevronDownIcon class="" />
            <ChevronDownIcon class=""/>
          </div>-->
        </div>
        <div class="flex sm:flex-col mr-0 sm:-mt-10">
          <!-- <div>
            <ChevronDownIcon class="" />
            <ChevronDownIcon class=""/>
          </div>-->
          <img class="block sm:hidden m-auto" src="@/assets/double_fleche.svg" alt="">
          <div class="z-0 w-36 h-36 sm:w-96 sm:h-96 block bg-cyan-500 rounded-full blur-3xl opacity-60"></div>
          <img class="relative w-1/2 mr-0 sm:w-full sm:-mt-96" src="@/assets/photo_hugo.webp" alt="">
        </div>
      </div>
    </div>
    <div class="bg-zinc-900 pt-5 sm:pt-10">
      <ul class="font-unbounded text-sm text-slate-400 flex justify-evenly mx-5">
        <li class="relative"><button class="active" @click="selectProjets" href="">Projets récents</button></li>
        <li class="relative"><button @click="selectDev" href="">Sites web</button></li>
        <li class="relative"><button @click="selectDesign" href="">Quelque chose</button></li>
        <li class="relative"><button @click="selectTruc" href="">Untruciyvhkv</button></li>
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
    </div>
    <div class="bg-zinc-900 pb-10">
      <img class="w-1/3 sm:w-1/4  " src="@/assets/wave2.svg" alt="">
      <div class="border-2 border-cyan-500 w-3/4 h-fit m-auto py-5 bg-zinc-700">
        <div class="bg-[url('src/assets/morphCircle.svg')] bg-contain bg-center bg-no-repeat">
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
                <li><a href=""><img src="@/assets/GitHub.svg" alt=""><span class="sr-only">Github</span></a></li>
                <li><a href=""><img src="" alt=""><span class="sr-only">Twitter</span></a></li>
                <li><a href=""><img src="@/assets/Instagram_hugo.svg" alt=""><span class="sr-only">Instagram</span></a></li>
              </ul>
            </div>
          </div>
          <div class="flex justify-center font-poppins text-sm w-fit">
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