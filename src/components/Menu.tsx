import { useStore } from "@nanostores/react"
import { Link } from "react-router-dom"
import { MenuStore, toggleMenu } from "../stores/Menu.store"
import { BottomNav, MenuContainer, MenuHeader, MenuHeaderContainer, MenuItem, MenuItemContainer, MenuTitle, NameItem } from "../styles/Menu.style"

export default function Menu(){
    const {isOpen} =
    useStore(MenuStore)
    //si je suis connécté
   /* if(user){
        //on redirige vers la page d'accueil
        return <Navigate to="/"></Navigate>
    }
    */
    
    if (!isOpen) {
        return(
            <>
            <BottomNav>
             <i  onClick={toggleMenu} className="fa-solid fa-bars"></i>
             <i className="fa-solid fa-user"></i>
             </BottomNav>
             </>)}
    
    
    return(
        <>
        <MenuContainer>
        
        
        <MenuHeaderContainer>
         <i onClick={toggleMenu} className="fa-regular fa-circle-xmark"></i>
         <MenuTitle>Menu</MenuTitle>
        </MenuHeaderContainer>
        <div>
        <MenuItem>
        <Link to="/" onClick={toggleMenu}>
        <i className="fa-solid fa-house-chimney"></i>
              Les Todos
        </Link>
      </MenuItem>
      
      <MenuItem>
        <Link to="/nouvelle-liste" onClick={toggleMenu}>
        <i className="fa-solid fa-circle-plus"></i>
              Nouvelle liste
        </Link>
      </MenuItem>
      </div>
     
      </MenuContainer>
        </>
        )}