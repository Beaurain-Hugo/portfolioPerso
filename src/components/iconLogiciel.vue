<script setup>
import ImgS from '../components/ImgS.vue'
defineProps({
    logo: String,
})

</script>

<template>
    <div>
        <ImgS 
        class="w-32 h-32 sm:w-64 sm:h-64"
        bucket="prive-images"
        :name="logo"/>
    </div>
</template>