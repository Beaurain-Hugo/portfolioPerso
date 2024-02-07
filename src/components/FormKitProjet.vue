<script setup>
// = new.vue et formkitoffremaison
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
import { createInput } from "@formkit/vue";
import ImgUploadS from "@/components/ImgUploadS.vue";

const router = useRouter();
const props = defineProps({projet: Object});
console.log(props)
// console.log(props.projet.photos)
const offre = ref( props.projet );
// console.log(offre.value.photos)
const imgUploadSupabase = createInput(ImgUploadS);
console.log(imgUploadSupabase)
// const test = ref(null)
onMounted(() => {
  // console.log(test.value)
})
async function upsertProjet(dataForm) {
  const { data, error } = await supabase
    .from("Projets")
    .upsert(dataForm);
    offre.value.photos = {};
    console.log(offre.value.photos);
    console.log(dataForm);
  if (error) {
    console.error(
      "Impossible de mettre à jour l'offre : ",
      offre,
      " erreur : ",
      error
    );
  } else {
   router.push({ name: "Projets-Projet-slug", params: { slug: offre.slug } });
  }
}

const { data: listeLogiciel, error } = await supabase
  .from("Logiciels")
  .select("*");
if (error) {console.log("n'a pas pu charger la table Logiciels :", error)}
else {  console.log(listeLogiciel)};
const optionsLogiciel = listeLogiciel?.map((logiciel) => ({
  value: logiciel.logo,
  label: logiciel.libelle,
}));

const { data: listeLangage, errorl } = await supabase
  .from("Langages")
  .select("*");
if (errorl) {console.log("n'a pas pu charger la table Langages :", errorl)}
else {  console.log(listeLangage)};
const optionsLangage = listeLangage?.map((langage) => ({
  value: langage.logo,
  label: langage.libelle,
}));

async function supprimerOffre(dataForm) {
  console.log("Dans suppression offre");
  const { data, error } = await supabase
    .from("Projets")
    .delete(dataForm)
    .match({ id: offre.value.id });
  if (error) {
    console.error("Erreur à la suppression de ", offre, "erreur :", error);
  } else {
    router.push("/Projets/NewView");
  }
}
</script>

<template>
    <FormKit
        id="form"
        type="form" 
        :config="{ classes:{input:'text-black w-3/4', actions: 'justify-self-end', form: '$reset grid grid-cols-1 gap-2' } }"
        :submit-attrs="{
        inputClass: 'rounded-md shadow-sm focus-style p-2 bg-blue-300 ',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertProjet"
        v-model="offre"
        :submit-label="'Envoyer'">
        <FormKit type="hidden" name="id" />
        <FormKit id="truc" name="title" label="Nom du Projet"/> 
        <FormKit name="slug" label="Slug"/> 
        <FormKit name="link" label="Lien du site"/> 

        <FormKit
        type="select"
        name="categorie"
        label="Catégorie"
        :options="['Projet Universitaire','Projet Client']"
        placeholder="Choisir une catégorie"/>
        <FormKit :type="imgUploadSupabase" name="illustration" label="Illustration du Projet"/>
        <FormKit name="paragraphe" type="textarea" rows="10" label="Présentation du Projet"/>
        <FormKit :type="imgUploadSupabase" name="harmonie" label="Harmonie colorée"/>
        <!-- <FormKit
        type="select"
        name="logiciel1"
        label="Logiciel"
        :options="optionsLogiciel"
        placeholder="Choisir un logiciel"/>
        <FormKit
        type="select"
        name="logiciel2"
        label="Logiciel"
        :options="optionsLogiciel"
        placeholder="Choisir un logiciel"/>
        <FormKit
        type="select"
        name="logiciel3"
        label="Logiciel"
        :options="optionsLogiciel"
        placeholder="Choisir un logiciel"/>
        <FormKit
        type="select"
        name="logiciel4"
        label="Logiciel"
        :options="optionsLogiciel"
        placeholder="Choisir un logiciel"/> -->
        <FormKit
        type="select"
        name="langages"
        label="Langage"
        multiple
        :options="optionsLangage"
        placeholder="Choisir un logiciel"/>
         <FormKit
        type="checkbox"
        name="visible"
        label="Public ?" />
        <FormKit
        type="select"
        name="logiciels"
        label="Logiciel"
        multiple
        :options="optionsLogiciel"
        placeholder="Choisir un langage"/>
        <!-- <FormKit v-for="(photo, index) in offre.photos" :key="index" :type="imgUploadSupabase" name="photos" label="Photos du Projet"/> -->
  <h1 v-for="(photo, index) in offre.photos" :key="index">{{photo}}</h1>
  <!-- <h1>{{offre.photo1}}</h1> -->
        <FormKit :type="imgUploadSupabase" name="photos" label="Photos test"/>
        <FormKit :type="imgUploadSupabase" name="photo1" label="Photo 1"/>
        <FormKit :type="imgUploadSupabase" name="photo2"/>
        <FormKit :type="imgUploadSupabase" name="photo3"/>
        <FormKit :type="imgUploadSupabase" name="photo4"/>
        <FormKit :type="imgUploadSupabase" name="photo5"/>
        <FormKit :type="imgUploadSupabase" name="photo6"/>
        <FormKit :type="imgUploadSupabase" name="photo7"/>
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-2 bg-green-300 justify-self-end"
      >
        Reset
      </button>
      <button
        v-if="offre"
          type="button"
          @click="supprimerOffre()"
          class="rounded-md shadow-sm focus-style p-2 bg-red-500 justify-self-end"
        >
Supprimer l'offre        </button>
    </FormKit>
</template>
