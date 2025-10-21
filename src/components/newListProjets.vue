<script setup>
import {watch, ref, onMounted, computed} from 'vue';
import iconProjet from '@/components/iconProjet.vue';
import { supabase } from '@/supabase';

const props = defineProps({
  max: Number,
  categorie: {
    type: Array,
    default: ["universitaire", "test"]
  }
}) 

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
      .eq('visible', true)
      .in('categorie', [props.categorie])
      .limit(props.max ?? 10000)
    // console.log(projets)
    PROJETS.value = projets
    console.log(PROJETS.value)
    // console.log(PROJETS.value)
  } catch (error) {
    console.log(err)
  }
} 

onMounted(
  fetchProjets
)
// let { data: projets, error } = fetchProjets()
// console.log("props" + props.categorie)

watch(() => props.categorie, fetchProjets, { deep: true })


</script>



<template>
    <div v-if="PROJETS.length" class="carousel sm:flex-wrap justify-center gap-5">
          <iconProjet class="carousel-item"
          v-for="projet in GRID_PROJETS" :key="projet.id" v-bind="projet" />
    </div>
    <div v-else class="flex justify-center text-base">
      Il n'y a pas de projets dans cette catégorie pour le moment.
    </div>
    <button v-if="MORE_PROJETS_TO_SHOW && !props.max" @click="seeMoreRecipes">Voir plus de projet</button>

</template>