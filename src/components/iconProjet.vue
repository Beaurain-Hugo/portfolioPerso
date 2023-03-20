<script setup>
import ImgS from '../components/ImgS.vue'
defineProps({
    illustration: String,
})

</script>

<template>
    <div>
        <ImgS 
        class="w-32 h-32 sm:w-64 sm:h-64"
        bucket="prive-images"
        :name="illustration"/>
    </div>
</template>