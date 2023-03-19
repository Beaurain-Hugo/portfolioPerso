<script setup>
import iconProjet from '@/components/iconProjet.vue';
import { supabase } from '@/supabase';

const props = defineProps({max: Number}) 


let {data:projets, error} = await supabase
  .from('projetdev')
  .select('*')
  .limit(props.max ?? 10000)

</script>



<template>

    <div class="carousel sm:flex-wrap sm:justify-center gap-5">
          <iconProjet class="carousel-item" 
          v-for="projet in projets" :key="projet.id" v-bind="projet" 
          @click=" $router.push({ name: 'Projets-Projet-title', params: { title: projet.title } })" />
    </div>

</template>