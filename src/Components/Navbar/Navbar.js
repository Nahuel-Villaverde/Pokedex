import React from 'react'
import imagen from '../../Assets/logo.png';
import '../Components.css'

const Navbar = ({onTypeSelect}) => {
    return (
        
            <nav className='nav'>
                <img src={imagen} alt="Pokedex" />
                <ul class="nav-list">
                    <li class="nav-item"><button class="btn btn-header" id="ver-todos" onClick={() => onTypeSelect(null)}>Ver todos</button></li>
                    <li class="nav-item"><button class="btn btn-header normal" id="normal" onClick={() => onTypeSelect('normal')}>Normal</button></li>
                    <li class="nav-item"><button class="btn btn-header fire" id="fire" onClick={() => onTypeSelect('fire')}>Fire</button></li>
                    <li class="nav-item"><button class="btn btn-header water" id="water" onClick={() => onTypeSelect('water')}>Water</button></li>
                    <li class="nav-item"><button class="btn btn-header grass" id="grass" onClick={() => onTypeSelect('grass')}>Grass</button></li>
                    <li class="nav-item"><button class="btn btn-header electric" id="electric" onClick={() => onTypeSelect('electric')}>Electric</button></li>
                    <li class="nav-item"><button class="btn btn-header ice" id="ice" onClick={() => onTypeSelect('ice')}>Ice</button></li>
                    <li class="nav-item"><button class="btn btn-header fighting" id="fighting" onClick={() => onTypeSelect('fighting')}>Fighting</button></li>
                    <li class="nav-item"><button class="btn btn-header poison" id="poison" onClick={() => onTypeSelect('poison')}>Poison</button></li>
                    <li class="nav-item"><button class="btn btn-header ground" id="ground" onClick={() => onTypeSelect('ground')}>Ground</button></li>
                    <li class="nav-item"><button class="btn btn-header flying" id="flying" onClick={() => onTypeSelect('flying')}>Flying</button></li>
                    <li class="nav-item"><button class="btn btn-header psychic" id="psychic" onClick={() => onTypeSelect('psychic')}>Psychic</button></li>
                    <li class="nav-item"><button class="btn btn-header bug" id="bug" onClick={() => onTypeSelect('bug')}>Bug</button></li>
                    <li class="nav-item"><button class="btn btn-header rock" id="rock" onClick={() => onTypeSelect('rock')}>Rock</button></li>
                    <li class="nav-item"><button class="btn btn-header ghost" id="ghost" onClick={() => onTypeSelect('ghost')}>Ghost</button></li>
                    <li class="nav-item"><button class="btn btn-header dark" id="dark" onClick={() => onTypeSelect('dark')}>Dark</button></li>
                    <li class="nav-item"><button class="btn btn-header dragon" id="dragon" onClick={() => onTypeSelect('dragon')}>Dragon</button></li>
                    <li class="nav-item"><button class="btn btn-header steel" id="steel" onClick={() => onTypeSelect('steel')}>Steel</button></li>
                    <li class="nav-item"><button class="btn btn-header fairy" id="fairy" onClick={() => onTypeSelect('fairy')}>Fairy</button></li>
                </ul>
            </nav>
        
    )
}

export default Navbar
