import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const redStyle = { color: 'red', fontWeight: 600 }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={redStyle}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={redStyle}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeStyle={redStyle}>Perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/route-params/shop/verano/jersey" activeStyle={redStyle}>Route Params</NavLink>
                </li>
                <li>
                    <NavLink to="/query-strings?city=Madrid&age=33" activeStyle={redStyle}>Query Strings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar