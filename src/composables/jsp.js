import {supabase} from '@/supabase'
import {ref} from 'vue'
let projets = supabase 
.from('Projets')
.select('*')
.eq("visible", true)
console.log('Appel à tous les projets', projets)


let dev = supabase 
.from('projetuniversitaire')
.select('*')
console.log('Appel à tous les projets de dev', dev)

let design = supabase 
.from('projetclient')
.select('*')
console.log('Appel à tous les projets de dev', design)

let truc = supabase 
.from('projettruc')
.select('*')
console.log('Appel à tous les projets de dev', truc)

export const getAllProjets = () => {
    let test = projets;
    console.log("Yo", test)
    return (test)
}

export const getAllProjetsDev = () => {
    let test = dev;
    console.log("Yo 2", test)
    return (test)
}

export const getAllProjetsDesign = () => {
    let test = design;
    console.log("Yo 2", test)
    return (test)
}

export const getAllProjetsTruc = () => {
    let test = truc;
    console.log("Yo 2", test)
    return (test)
}


export const getVillageois = () => {
    let rq = 'https://jsongaulois.jmfino.fr/listeVillageois.php'
    // Requête concernée
    console.log('test', rq)
    return fetch(rq) // On renvoie la requpete à qui la demande
        .then(response => {
            return response.json()      // On envoie le résultat de la requête en json
        })
        .catch(error => { throw error }) // Cas d'erreur
}

