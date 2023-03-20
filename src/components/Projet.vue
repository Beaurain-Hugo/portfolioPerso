<script setup>
// = ficheoffremaison
import ImgS from "@/components/ImgS.vue"


defineProps({
    id: String,
    title: String,
    extract: String,
    illustration: String,
    categorie: String,
    harmonie: String,
    logiciel1: String,
    logiciel2: String,
    logiciel3: String,
    logiciel4: String,
    paragraphe: String,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
    photo5: String,
    photo6: String,
    photo7: String,
})
</script>

<template>
    <div class="py-10">
        <div class="text-center">
            <h1 class="text-3xl sm:text-8xl font-unbounded">{{ title }}</h1>
            <h1 class="text-xl sm:text-6xl font-poppins text-cyan-400 test uppercase">{{ categorie }}</h1>
        </div>    
        <ImgS v-if="illustration" class="pt-10 w-4/5 sm:w-1/2 m-auto" bucket="prive-images" :name="illustration" />
    </div>
    <div>
        <h2 class="font-unbounded font-medium text-lg sm:text-4xl ml-8 sm:ml-24 mb-5">Harmonie colorée</h2>
        <ImgS class="w-1/2 m-auto" v-if="harmonie" bucket="prive-images" :name="harmonie" />
    </div>
    <div class="py-10">
        <h2 class="font-unbounded font-medium text-lg sm:text-4xl ml-8 sm:ml-24">Logiciel(s) utilisé(s)</h2>
        <div class="flex flex-wrap mt-10 items-center gap-10 justify-center">
            <ImgS class="h-20" v-if="logiciel1" bucket="prive-images" :name="logiciel1" />
            <ImgS class="h-20" v-if="logiciel2" bucket="prive-images" :name="logiciel2" />
            <ImgS class="h-20" v-if="logiciel3" bucket="prive-images" :name="logiciel3" />
            <ImgS class="h-20" v-if="logiciel4" bucket="prive-images" :name="logiciel4" />
        </div>
    </div>
    <div class="py-10 sm:text-lg mx-8 sm:mx-24">
        <p class="font-unbounded">{{ paragraphe }}</p>
    </div>
    <div class="py-10" v-if="photo1">
        <h2 class="font-unbounded font-medium text-lg sm:text-4xl ml-8 sm:ml-24">Photos supplémentaires</h2>
        <div class="flex mt-5 flex-wrap gap-5 justify-center">
            <ImgS class="w-1/2" v-if="photo1" bucket="prive-images" :name="photo1" />
            <ImgS class="w-1/2" v-if="photo2" bucket="prive-images" :name="photo2" />
            <ImgS class="w-1/2" v-if="photo3" bucket="prive-images" :name="photo3" />
            <ImgS class="w-1/2" v-if="photo4" bucket="prive-images" :name="photo4" />
            <ImgS class="w-1/2" v-if="photo5" bucket="prive-images" :name="photo5" />
            <ImgS class="w-1/2" v-if="photo6" bucket="prive-images" :name="photo6" />
            <ImgS class="w-1/2" v-if="photo7" bucket="prive-images" :name="photo7" />
        </div>
    </div>
</template>

<style scoped>
.test::after {
  display:inline-block;
  vertical-align: middle;
  height:2px;
  width:50%;
  content:"";
  background:rgb(34 211 238)
}
</style>