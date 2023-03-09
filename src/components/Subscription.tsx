import { useStore } from '@nanostores/react'
import { Link, Navigate } from 'react-router-dom'
import {
  changeEmail,
  changePassword,
  googleConnect,
  subscribe,
  UserStore,
} from '../stores/UserStore'
import {
  AllCenteredScreen,
  CenteredText,
  GreenButton,
  InputGroup,
  Title,
} from '../styles/Auth.style'

/**
 * Composant affichant l'écran d'inscription
 */
export default function Subscription() {
  // Je récupére l'état
  const {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    isSending,
    error,
    user,
  } = useStore(UserStore)

  // Je redirige sur la page d'accueil si j'ai un utilisateur
  if (user) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <AllCenteredScreen>
      <Title>Inscription</Title>
      <InputGroup>
        <input
          type="email"
          value={email}
          onChange={changeEmail}
          placeholder="Email"
        />
        {isEmailValid === true ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : isEmailValid === false ? (
          <i className="fa-solid fa-circle-xmark"></i>
        ) : null}
      </InputGroup>
      <InputGroup>
        <input
          type="password"
          value={password}
          onChange={changePassword}
          placeholder="Mot de passe"
        />
        {isPasswordValid === true ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : isPasswordValid === false ? (
          <i className="fa-solid fa-circle-xmark"></i>
        ) : null}
      </InputGroup>
      {error ? <p>{error}</p> : null}
      {isSending ? (
        <p>Chargement</p>
      ) : (
        <>
          <GreenButton onClick={subscribe}>Inscription</GreenButton>
          <GreenButton onClick={googleConnect}>
            <i className="fa-brands fa-google"></i>
          </GreenButton>
        </>
      )}
      <CenteredText>
        Vous avez déja un compte ?
        <br />
        <Link to="/">Connéctez-vous !</Link>
      </CenteredText>
    </AllCenteredScreen>
  )
}
