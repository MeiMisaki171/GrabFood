
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/image/logo/Logo.svg';
import CartIcon from '../../../../assets/image/icons/cart_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


import './Header.scss';


const Header = ({ className }) => {

  return (
    <header className={className}>
      <div className='header'>
        <div className='header_container'>
          <div className='section_content'>
            <div className="header_inner">
              

              <Link to='/' className="header_logo" >   
                    <img src={Logo} alt='logo' className='logo'></img>                
              </Link>                                                                          
                  
              <div className='header_btn'>
                <Link to="/cart" className='cart-btn__wrapper'>              
                      <img src={CartIcon} alt='cart_icon' className='cart-icon'/>
                      <span></span>
                </Link>                  
      
                <Link to='/login' className='login-btn__wrapper'>
                  <div className='login-btn'>
                      Đăng nhập/Đăng ký
                  </div>
                </Link>
      
                <div className='language__wrapper'>
                  <div className='language_code'>VI
                    <span className='drop_down'><FontAwesomeIcon icon={faChevronDown} className='dss' /></span>
                  </div>
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