

import Logo from '../../../../assets/image/logo/Logo.svg';
import CartIcon from '../../../../assets/image/icons/cart_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


import './Header.scss';


const Header = () => {

  // const languageList = [
  //   {
  //     code: 'VI',
  //     title: "Tiếng Việt",
  //   },
  //   {
  //     code: 'EN',
  //     title: "English",
  //   }
  // ]

  return (
    <header className='header'>
      <div className='header_container'>
        <div className='section_content'>
          <div className="header_inner">
            
            <div className="header_logo">
              <img src={Logo} alt='logo' className='logo'></img>
            </div>                                                                          
                
            <div className='header_btn'>
              <div className='cart-btn__wrapper'>
                <a href='/' className='cart-btn' role="button">
                  <img src={CartIcon} alt='cart_icon' className='cart-icon'/>
                  <span></span>
                </a>
              </div>
    
              <div className='login-btn__wrapper'>
                <a href='/login' className='login-btn'>
                  Đăng nhập/Đăng ký
                </a>
              </div>
    
              <div className='language__wrapper'>
                <div className='language_code'>VI
                  <span className='drop_down'><FontAwesomeIcon icon={faChevronDown} className='dss' /></span>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </header>                                                                 
  )
}

export default Header