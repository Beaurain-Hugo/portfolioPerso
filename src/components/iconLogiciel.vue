<script setup>
import ImgS from '../components/ImgS.vue'
defineProps({
    libelle: String,
    logo: String,
})

</script>

<template>
    <div>
        <span>{{libelle}}</span>
        <ImgS 
        class="w-32 h-32 sm:w-64 sm:h-64"
        bucket="prive-images"
        :name="logo"/>
    </div>
</template>