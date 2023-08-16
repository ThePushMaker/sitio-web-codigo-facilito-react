import MenuItem from "../MenuItem/MenuItem.jsx"
import './Menu.css'

function Menu(){
  return (
    <header className="menu-wrapper">
       <nav>
        <ul className="menu">
          <MenuItem 
            text='Home'
            link='home'
          />
          <MenuItem 
            text='Personajes'
            link='personajes'
          />
          <MenuItem 
            text='Citas'
            link='citas'
          />
          <MenuItem 
            text='Episodios'
            link='episodios'
          />
        </ul>
       </nav>
      </header>
  )
}

export default Menu