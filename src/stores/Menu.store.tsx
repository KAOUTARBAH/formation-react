import { action, map } from "nanostores"

export type MenuState = {
    isOpen: boolean,
}
export const MenuStore = map<MenuState>({
    isOpen: false,
   
})

export const  toggleMenu=action(
    MenuStore,
    "Menu",
    (store) =>{
        const { isOpen } = store.get()
        const test:boolean=(!isOpen)
        console.log(test)
        store.setKey("isOpen",test)
    }
)

    //setIsOpen(!isOpen)
  

  
  

