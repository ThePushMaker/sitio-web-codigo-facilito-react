import MenuItem from "./MenuItem"

function Menu(){
  return (
    <header className="App-header">
       <nav>
        <ul>
          <MenuItem 
            text='Home'
            link='/'
          />
          <MenuItem 
            text='Personajes'
            link='/personajes'
          />
          <MenuItem 
            text='Citas'
            link='/citas'
          />
          <MenuItem 
            text='Episodios'
            link='/episodios'
          />
        </ul>
       </nav>
      </header>
  )
}

export default Menu