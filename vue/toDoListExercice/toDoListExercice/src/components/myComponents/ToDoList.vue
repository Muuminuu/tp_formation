<script setup>
import { ref, computed } from 'vue'
// restes de la tentative d'utilisation du store, infructueuse.

//import { useTodoStore } from '@/stores/todo.js'
//const store = useTodoStore()

let id = 0
// déclaration d'un id pour distinguer les lignes de la todolist
const nouveauTodo= ref('')
const cacherAccomplies = ref(false)
// fonctionnalité pour toggle entre affichage ou non des todos accomplies
const todos = ref([
    {id: id++, text: 'Apprendre le Solfège', accompli: false},
    {id: id++, text: 'S\'initier au Grec Ancien', accompli: false},
    {id: id++, text: 'Jouer avec mon chat', accompli: true}
])
// creation tableau d'objets. chaque ligne est une todo avec plusieurs données: un id, du texte et  si elle a été accomplie ou non.

const filtrerTodos = computed(() => {
  return cacherAccomplies.value
    ? todos.value.filter((chewbacca) => !chewbacca.accompli)
    : todos.value
})
//computed visant à afficher alternativement tous les elements du tableau OU uniquement les elements du tableau todos où accompli est à false.
function ajouterTodo() {
    todos.value.push({ id: id++, text: nouveauTodo.value, accompli: false })
    nouveauTodo.value = ''
}
//fonction permettant l'ajout d'une nouvelle ligne todo au tableau todos. Reinitialisation du champ texte après soumission.

function retirerTodo(todo) {
    todos.value = todos.value.filter((han) => han.id !== todo.id)
}
//fonction permettant de retirer une ligne todo. filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent la condition d'avoir un id différent de la ligne todo que je souhaite retirer. En somme, je les remets tous sauf celui que je veux retirer.
</script>


<template>
    <section class="d-flex wrap">
        <h3 class="col-6 text-start">Nouvelle tâche</h3>
        <h3 class="col-6 text-center">Liste des tâches</h3>
    </section>
    <section class="d-flex wrap">
        <div class="col-5">
            <form @submit.prevent="ajouterTodo" class="form-label" >  
<!-- submit.prevent permet d'annuler le comportement par défaut d'un formulaire, soit de réactualiser la page-->
                <input v-model="nouveauTodo" placeholder="ex: lire un livre">
<!-- directive permettant de lier l'input à la variable nouveauTodo -->
                <button class="btn btn-success">Ajouter une tâche</button>
            </form>
            <button  @click="cacherAccomplies = !cacherAccomplies" class="btn btn-outline-warning">
                {{ cacherAccomplies ? 'Afficher toutes les tâches' : 'Cacher tâches accomplies' }}
            </button>
<!-- bouton utilisant une ternaire pour un rendu conditionnel : au click (avec @click, pour écouter évènement) on permute le state true/false de cacherAccomplies avec le "!" -->
        </div>
        <div class="col-5">
            <ul>
<!-- utilisation du v-for pour boucler sur filtrerTodos, permettant l'affichage des toutes les tâches où celles accomplies. utilisation de l'id pour la :key pour être sûr d'un bon affichage -->
                <li v-for="todo in filtrerTodos" :key="todo.id" 
                class="list-unstyled">
                    <input type="checkbox" v-model="todo.accompli">
<!-- au cochage, passe state true/false -->
                    <span :class="{ accompli: todo.accompli }">{{ todo.text }}</span>
<!-- props pour classe css permettant d'afficher ou non le texte barré -->
                    <button @click="retirerTodo(todo)" class="btn text-white bg-danger">X</button>
<!-- directive v-on(ecoute d'evenement) sur click du bouton de suppression. utilise la fonction retirerTodo expliquée plus haut pour retirer la ligne.   -->
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.accompli {
    text-decoration: line-through;
}
/** Le state de la data accompli est lié à cet aspect visuel : ecriture barrée. */
</style>