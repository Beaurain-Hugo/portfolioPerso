<script setup>
import iconLogiciel from '@/components/iconLogiciel.vue';
import { supabase } from '@/supabase';


let {data:langages, error} = await supabase
  .from('Langages')
  .select('*')

</script>



<template>

    <div class="sm:flex-wrap sm:justify-center gap-5">
          <iconLogiciel
          v-for="langage in langages" :key="langage.Code_Langage" v-bind="langage" 
          @click=" $router.push({ name: 'Langages-Langage-edit-id', params: { id: langage.Code_Langage } })" />
    </div>

</template>