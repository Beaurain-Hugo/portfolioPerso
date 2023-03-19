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
}
const nvlUtilisateur = ref(false);
console.log("test", user)

</script>

<template>
  <div class="about bg-zinc-400">
    <h1>This is an about page</h1>
    <button v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{user.email}})
    </button>
    <FormKit
    v-else
    type="form" 
    :submit-label="'Se connecter'"
      @submit="connexion">
      <FormKit name="email" label="mail" type="email" />
      <FormKit name="password" label="Mot de passe" type="password" />
    </FormKit>

  </div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
