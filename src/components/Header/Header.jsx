import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi' 
import OutSideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth <=800){
      return{
        right:!menuOpened && "-100%"
      }
    }
  }

  return (
 <section className='h-wrapper'>
    <div className=' flexCenter paddings innerWidth h-container'>
        <img src="./homesage1.png" alt="logo" width={100} />

        <OutSideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>

       


        <div className='flexCenter h-menu '
        style={getMenuStyles(menuOpened)}
        >
            <a href="">
                Residencies
            </a>
            <a href="">
               Our Value
            </a>
            <a href="">
                Contact us
            </a>
            <a href="">
              Get Started
            </a>
            <button className='button'>
              <a href="mailto:sharma.sumukh0088@gmail.com">Contact</a>
            </button>
        </div>
        </OutSideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev) => !prev )} >
        <BiMenuAltRight size={30} onClick={(setMenuOpened)=> {setMenuOpened(false)}}/>
    </div>
    </div>


 </section>
  )
}

export default Header