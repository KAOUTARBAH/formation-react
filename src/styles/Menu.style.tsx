import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Theme } from './App.style';
/**
 * Barre de navigation du
 */
export const BottomNav = styled.div`
  display:flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.greenOcean};
  flex-direction: row;
  

  i {
    font-size: 1.7rem;
    color: ${Theme.colors.white};
  }
`

/**
 * Container for the open menu
 */
export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.greenOcean};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`


/**
 * Header for the menu
 */
export const MenuHeader = styled.div`
  display: flex;
  padding: 1rem;
  color: ${Theme.colors.softBlack};
  align-items: center;
  i {
    
    margin-right: 1rem;
    font-size: 1.7rem;
    color: ${Theme.colors.white};
  }
`
/**
 * Container pour le header du menu
 */
export const MenuHeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  margin-bottom: 20px;

  i {
    
    margin-right: 1rem;
    font-size: 1.7rem;
    color: ${Theme.colors.white};
  }
`

/**
 * Contient un item du menu Link
 */
export const MenuItemContainer = styled(Link)`
  display:flex;
  flex-direction: row;
  //flex-direction: column;
  align-items: center;
  background-color: ${Theme.colors.deepBlue};
  padding: 20px 20px;
`
/**
 * Contient le titre du menu
 */
export const MenuTitle = styled.p`
  color: ${Theme.colors.white};
  font-size: 45px;
  font-family: 'Lobster';
`
/**
 * Item for a menu element
 */
export const MenuItem = styled.p`
  font-size: 1.3rem;
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.deepBlue};
  padding: 1rem;
  margin: 0;
  flex-direction: row;
  
  
  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${Theme.colors.white};
    padding: 5px;
    margin-right: 20px;
    margin-bottom: 0.5rem;
    flex-direction: row;
  }
`

