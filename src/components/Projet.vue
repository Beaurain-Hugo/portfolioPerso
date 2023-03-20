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
    <div>
        <div class="text-center">
            <h1 class="text-3xl sm:text-8xl font-unbounded">{{ title }}</h1>
            <h1 class="text-xl sm:text-6xl font-poppins text-cyan-400 test">{{ categorie }}</h1>
        </div>    
        <ImgS v-if="illustration" class="w-4/5 sm:w-1/2 m-auto" bucket="prive-images" :name="illustration" />
    </div>
    <div class="my-5">
        <h2 class="font-unbounded font-medium text-2xl">Logiciel(s) utilisé(s)</h2>
        <div>
            <ImgS v-if="logiciel1" bucket="prive-images" :name="logiciel1" />
            <ImgS v-if="logiciel2" bucket="prive-images" :name="logiciel2" />
            <ImgS v-if="logiciel3" bucket="prive-images" :name="logiciel3" />
            <ImgS v-if="logiciel4" bucket="prive-images" :name="logiciel4" />
        </div>
    </div>
    <div>
        <p class="font-unbounded">{{ paragraphe }}</p>
    </div>
    <div>
        <h2 class="font-unbounded text-xl my-5">Photos supplémentaires</h2>
            <div class="flex flex-wrap gap-5 justify-center">
                <ImgS v-if="photo1" bucket="prive-images" :name="photo1" />
                <ImgS v-if="photo2" bucket="prive-images" :name="photo2" />
                <ImgS v-if="photo3" bucket="prive-images" :name="photo3" />
                <ImgS v-if="photo4" bucket="prive-images" :name="photo4" />
                <ImgS v-if="photo5" bucket="prive-images" :name="photo5" />
                <ImgS v-if="photo6" bucket="prive-images" :name="photo6" />
                <ImgS v-if="photo7" bucket="prive-images" :name="photo7" />
            </div>
    </div>
</template>

<style scoped>
.test::after {
  display:inline-block;
  vertical-align: middle;
  height:2px;
  width:66%;
  content:"";
  background:rgb(34 211 238)
}
</style>