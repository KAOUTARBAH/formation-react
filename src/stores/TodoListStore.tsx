import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import { action, map } from 'nanostores'
import { ChangeEvent } from 'react'
import { db } from '../lib/Firebase'

/**
 * Représente une tache à faire
 */
export type Task = {
  name: string
  done: boolean
}

/**
 * Réprésente une todo list
 */
export type TodoList = {
  name: string
  user: string
  newTask: string
  tasks: Task[]
}

/**
 * Représente l'état des composants de gestion de liste
 */
export type TodoListState = {
  todoLists: TodoList[]
  newTodoListName: string
}

/**
 * Création du store de todo list
 */
export const TodoListStore = map<TodoListState>({
  todoLists: [],
  newTodoListName: '',
})

/**
 * Change le contenue du nom de la nouvelle liste
 */
export const changeNewTodoListName = action(
  TodoListStore,
  'changeNewTodoListName',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey('newTodoListName', e.currentTarget.value)
  },
)

/**
 * Action ajoutant une nouvelle TodoList
 */
export const createTodoList = action(TodoListStore, 'createTodoList', store => {
  // Récupére le nom de la todo liste que l'on souhaite
  const { newTodoListName, todoLists } = store.get()

  // Je créer une todo list
  const todoList: TodoList = {
    name: newTodoListName,
    user: 'moi même',
    newTask: '',
    tasks: [],
  }

  // J'ajoute ma todo list dans les todoLists
  store.setKey('todoLists', [todoList, ...todoLists])

  save()
})

/**
 * Change la nouvelle tache
 */
export const changeNewTask = action(
  TodoListStore,
  'changeNewTask',
  (store, index: number, e: ChangeEvent<HTMLInputElement>) => {
    // Je récupére toutes les todo listes
    const { todoLists } = store.get()

    // Je modifie la bonne liste ?
    const newTodoLists = todoLists.map((todoList, i) => {
      // Je souhaite vérifié si je suis sur la bonne position
      if (i !== index) {
        return todoList
      }

      return { ...todoList, newTask: e.currentTarget.value }
    })

    store.setKey('todoLists', newTodoLists)
  },
)

/**
 * Ajoute une nouvelle tache
 */
export const addNewTask = action(
  TodoListStore,
  'addNewTask',
  (store, index: number) => {
    // Je récupére toutes les todo lists
    const { todoLists } = store.get()

    // Je modifie les listes
    const newTodoLists = todoLists.map((todoList, i) => {
      if (i !== index) {
        return todoList
      }

      return {
        ...todoList,
        newTask: '',
        tasks: [{ name: todoList.newTask, done: false }, ...todoList.tasks],
      }
    })

    store.setKey('todoLists', newTodoLists)

    save()
  },
)

/**
 * Active ou désactive une tache
 */
export const toggleTask = action(
  TodoListStore,
  'toggleTask',
  (store, listIndex: number, taskIndex: number) => {
    // Je récupére toutes les todo lists
    const { todoLists } = store.get()

    // Je modifie les listes
    const newTodoLists = todoLists.map((todoList, i) => {
      if (i !== listIndex) {
        return todoList
      }

      const newTasks = todoList.tasks.map((task, i2) => {
        if (i2 !== taskIndex) {
          return task
        }

        return { ...task, done: !task.done }
      })

      return { ...todoList, tasks: newTasks }
    })

    store.setKey('todoLists', newTodoLists)

    save()
  },
)

/**
 * Supprime une tache
 */
export const deleteTask = action(
  TodoListStore,
  'deleteTask',
  (store, listIndex: number, taskIndex: number) => {
    // Je récupére toutes les todo lists
    const { todoLists } = store.get()

    // Je modifie les listes
    const newTodoLists = todoLists.map((todoList, i) => {
      if (i !== listIndex) {
        return todoList
      }

      const newTasks = todoList.tasks.filter((task, i2) => i2 !== taskIndex)

      return { ...todoList, tasks: newTasks }
    })

    store.setKey('todoLists', newTodoLists)

    save()
  },
)

/**
 * Supprime tout les taches
 */
export const removeTasks = action(
  TodoListStore,
  'removeTasks',
  (store, index: number) => {
    // Je récupére toutes les todo lists
    const { todoLists } = store.get()

    // Je modifie les listes
    const newTodoLists = todoLists.map((todoList, i) => {
      if (i !== index) {
        return todoList
      }

      return { ...todoList, tasks: [] }
    })

    store.setKey('todoLists', newTodoLists)

    save()
  },
)

/**
 * Je créé un constante contenant le nom de la collection
 * Fireabse pour les todoList. Ce qui m'évite de la réécrire
 * à chaque et de faire de fautes de frappe
 */
export const TODOLIST_COLLECTION = 'todoList'
//export type Identifiable<T extends {}> = T & { id: string }

/**
 * Enregistre la liste dans firebase
 */
export const save = action(TodoListStore, 'save', async (store )=> {
  // Je récupére toutes les todo lists
  const { todoLists } = store.get()

/**
 * Insére une nouvelle todolist dans firebase
 */
  // Je récupére d'abord la collection de todo
  const col = collection(db, TODOLIST_COLLECTION)
  // On insére des données dans la collection. Nous récupérons
  // une référence firebase qui contiendra l'id de l'address
  // qui vient d'être inséré
  //{  dans le store ...}
  //const reference = await addDoc(col, {todoLists})
  const reference = await setDoc(doc(col), {todoLists})
 
  //store.setKey('bd',reference)
  // La reference contient l'identifiant créé par firebase
 // const id = reference.id
})
