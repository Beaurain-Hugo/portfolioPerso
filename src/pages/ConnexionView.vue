<script setup>
import {supabase, user} from '../supabase'
import {ref} from '@vue/reactivity'
async function connexion(data, node) {
  const { user, error } = await ( supabase.auth.signInWithPassword(data));    
    console.log("Connexion de l'utilisateur", user, error);
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}console.log("test", user)

</script>

<template>
  <div class="text-center my-52">
    <button v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{user.email}})
    </button>
    <FormKit
    v-else
    type="form" 
    :config="{ classes:{input:'text-black'}}"
    :submit-attrs="{
        inputClass: 'text-white'}"
    :submit-label="'Se connecter'"
      @submit="connexion">
      <FormKit name="email" label="mail" type="email" />
      <FormKit name="password" label="Mot de passe" type="password" />
    </FormKit>

  </div>
  
</template>


