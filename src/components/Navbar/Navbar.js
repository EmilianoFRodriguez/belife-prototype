import React, {useState} from 'react'
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import './Navbar.scss';


export default function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked( !clicked )
  };

  return (
    <div className="containerNav">
        <nav className="navBar">
            <div className="navLogo">
                <a href="" className="logo">
                  <img 
                    src="" alt="Logo-BeLife"
                  />
                </a>
            </div>
            <ul className={`navList ${clicked ? 'active' : ''}`}>
                <li className="navItem">
                  <a href="" className="">Inicio</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Productos</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Sin TACC</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Veggies</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Suplementos</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Quienes Somos</a>
                </li>
                <li className="navItem">
                  <a href="" className="">Contacto</a>
                </li>
            </ul>
            <ButtonMenu clicked={clicked} handleClick={handleClick}/>
            <div className={`initial ${clicked ? 'active' : ''}`}></div>
        </nav>
    </div>
  )
}
