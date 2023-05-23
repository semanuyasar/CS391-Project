import React, {useState} from 'react';
import {Link} from 'react-router-dom' ;
import {Button} from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = ()=> setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
    <>
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                LOGO <i className="fa-solid fa-dinosaur"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/categories' className='nav-links' onClick={closeMobileMenu}>
                        Categories
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/deals' className='nav-links' onClick={closeMobileMenu}>
                        Deals
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/account' className='nav-links' onClick={closeMobileMenu}>
                        Account
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
