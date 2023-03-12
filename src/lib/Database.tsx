/**
 * Ceci est un type générique, c'est typescript avancée, c'est une
 * technique très puissante :
 *
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 */
export type Identifiable<T extends {}> = T & { id: string }

/**
 * Défini un address
 */
/*export type Address = {
  country: string
  city: string
  street: string
  postCode: string
}
*/

export type TodoList = {
    name: string
    user: string
    newTask: string
    tasks: Task[]
  }

  export type Task = {
    name: string
    done: boolean
  }

/**
 * Je créé un constante contenant le nom de la collection
 * Fireabse pour les address. Ce qui m'évite de la réécrire
 * à chaque et de faire de fautes de frappe
 */
export const TodoList_COLLECTION = 'todoList'
