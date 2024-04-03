<script setup>
import iconProjet from '@/components/iconProjet.vue';
import { supabase } from '@/supabase';

const props = defineProps({max: Number}) 

let {data:projets, error} = await supabase
  .from('projetclient')
  .select('*')
  .limit(props.max ?? 10000)
console.log(projets);
</script>



<template>

    <div v-if="projets.length > 1" class="carousel sm:flex-wrap sm:justify-center gap-5">
          <iconProjet class="carousel-item" 
          v-for="projet in projets" :key="projet.id" v-bind="projet" 
          @click=" $router.push({ name: 'Projets-Projet-slug', params: { slug: projet.slug } })" />
    </div>
    <div v-else class="flex justify-center">
      <p>Bientôt.</p>
    </div>

</template>