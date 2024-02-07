<script setup>
    import {ref} from '@vue/reactivity';
    import {supabase} from '@/supabase';
    import FormKitLangage from '@/components/FormKitLangage.vue';
    const props = defineProps(["Code_Langage"])
    console.log(props)
    const langages =ref({})
    console.log(langages)
    const { data, error } = await supabase
      .from("Langages")
      .select('*')
      .eq("Code_Langage", props.Code_Langage)
      .single(); //ne retourne qu'un résultat
      if (error) console.error("n'a pas pu charger le table Maison :", error, data);
      else langages.value = data[0];
      console.log(langages.value)
</script>

<template>
  <FormKitLangage :langage="data" />
</template>
