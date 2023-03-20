<script setup>
import iconLogiciel from '@/components/iconLogiciel.vue';
import { supabase } from '@/supabase';


let {data:logiciels, error} = await supabase
  .from('Logiciels')
  .select('*')

</script>



<template>

    <div class="sm:flex-wrap sm:justify-center gap-5">
          <iconLogiciel
          v-for="logiciel in logiciels" :key="logiciel.Code_Logiciel" v-bind="logiciel" 
          @click=" $router.push({ name: 'Logiciels-Logiciel-edit-Code_Logiciel', params: { Code_Logiciel: logiciel.Code_Logiciel } })" />
    </div>

</template>