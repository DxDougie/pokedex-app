import React, { useContext } from 'react'
import FavoriteContext from '../contexts/favoriteContext'

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)
  const logoImg =
    'https://raw.githubusercontent.com/DxDougie/pokedex-app/main/src/assest/pokedex_logo.png'
  return (
    <nav>
      <div>
        <img alt="pokemon-logo" src={logoImg} className="navbar-img" />
      </div>
      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  )
}

export default Navbar
