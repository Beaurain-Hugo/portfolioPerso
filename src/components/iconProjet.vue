<script setup>
import ImgS from '../components/ImgS.vue'
import { supabase, user } from '@/supabase';
defineProps({
    id: String,
    illustration: String,
    slug: String,
})

</script>

<template>
    <div class="relative group">
        <button 
            v-if="user" 
            @click="$router.push({ name: 'Projets-Projet-edit-id', params: { id: id } })"
            class="hidden text-sm group-hover:block z-10 absolute top-0 right-0 bg-black p-1 border-double border-2">
            Editer offre
        </button>
        <a :href="'/projets/projet/' + slug">
            <ImgS 
            class="h-32"
            bucket="prive-images"
            :name="illustration"/>
        </a>
    </div>
</template>