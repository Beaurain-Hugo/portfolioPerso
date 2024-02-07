<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
import { createInput } from "@formkit/vue";
import ImgUploadS from "@/components/ImgUploadS.vue";

const router = useRouter();
const props = defineProps({langage: Object});
const offre = ref( props.langage );
const imgUploadSupabase = createInput(ImgUploadS);

async function upsertLangage(dataForm) {
  const { data, error } = await supabase
    .from("Langages")
    .upsert(dataForm);
  if (error) {
    console.error(
      "Impossible de mettre à jour le langage : ",
      offre,
      " erreur : ",
      error
    );
  } else {
    router.push({ name: "Langages-Langage-edit-id", params: { id: data.Code_Langage } });
  }
}

async function supprimerLangage(dataForm) {
  console.log("Dans suppression offre");
  const { data, error } = await supabase
    .from("Langages")
    .delete(dataForm)
    .match({ id: offre.value.id });
  if (error) {
    console.error("Erreur à la suppression de ", offre, "erreur :", error);
  } else {
    router.push("/");
  }
}
</script>

<template>
     <FormKit
        id="form"
        type="form" 
        :config="{ classes:{input:'text-black', actions: 'justify-self-end', form: '$reset grid grid-cols-1 gap-2', }}"
        :submit-attrs="{
        inputClass: 'rounded-md shadow-sm focus-style p-2 bg-blue-300 ',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertLangage" 
        v-model="offre"
        :submit-label="'Envoyer'">
        <FormKit type="hidden" name="Code_Langage" />
        <FormKit name="libelle" label="Nom du langage"/>
        <FormKit :type="imgUploadSupabase" name="logo" label="Logo du langage"/>
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-2 bg-green-300 justify-self-end">
        Reset
        </button>
        <button
        v-if="offre"
        type="button"
        @click="supprimerLangage()"
        class="rounded-md shadow-sm focus-style p-2 bg-red-500 justify-self-end">
        Supprimer le langage
        </button>
    </FormKit>
</template>