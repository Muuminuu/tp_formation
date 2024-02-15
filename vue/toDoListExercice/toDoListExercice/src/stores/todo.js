// ici une tentative infructueuse d'utilisation du store. On notera l'effort malgrè l'échec. On notera aussi le flou de l'apprenant concernant l'option ou la compo
// Le gros des commentaires se porteront plutôt sur le composant ToDoList

import { defineStore } from 'pinia'

const STORE_NAME = 'todos'
const STORE_LOCALE_STORAGE_KEY = 'todos'

const getDefaultState = () => todos
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useTodoStore = defineStore(STORE_NAME, {
    state: () => ({
        todos: getCurrentState(),
    }),

      
    actions: {
      // la fonction pour laquelle j'ai eu espoir de reussir le store. En fait non. (noter que j'ai tenté dans ToDoList, après un import et const store, un store.ajouterTodo() au lieu du plus classique ajouterTodo dans la balise <form></form>)
      ajouterTodo() {
        todos.value.push({ id: id++, text: nouveauTodo.value, accompli: false })
        nouveauTodo.value = ''
      }
    }
  })

