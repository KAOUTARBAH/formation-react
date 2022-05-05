// On importe la librairie React qui permet
// d'écrire avec la syntax JSX
import React from 'react'
// On importe la fonction render depuis la librarie
// react-dom. Cette fonction permet d'afficher
// un composant dans la page
import { render } from 'react-dom'
import App from './exos/conteur/App'
// On importe la fonction App depuis le fichier
// exos/todo/App.js. Cette fonction est un composant
import './index.css'

render(<App />, document.querySelector('#root'))
