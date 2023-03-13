import './Header.scss';
import { Link } from 'react-router-dom'
import logoGrabfood from '../../../../../assets/image/logo/Logo.svg'

const Header = () => {
  return (
    <header className='stickyItem__3 stickyHeaderCont__1' style={{top: "0px"}}>
      <div className='headerOverlay__27'></div>
      <div className='headerMainContainer__2 header__100 headerMain__1 ant-layout'>
        <div className='sectionContainer__3a ant-layout'>
          <div className='sectionContent__2'>
            <div className='ant-row-flex ant-row-flex-middle headerMainRow__3'>
              <div>
                <Link
                  className='logoLink__3'
                  to={'/'}
                  style={{ color: "inherit" }}
                >
                  <img
                    src= {logoGrabfood}
                    alt="grabfood"
                    className="logoImage"
                  ></img>
                </Link>
              </div>
              <div style={{flex: '1 1 0%', width:'1px'}}></div>
              <div className='btnGroupCol1__2'>
                <div className="foodCart-Btn-Wrapper__1">
                  <Link
                    className='foodCart-Btn isEmpty' 
                    to={'/cart'}
                    role="button"
                    tabindex='0'
                  >
                    <div className="foodCart-Icon__2"></div>
                    <span className='foodCart-Text'></span>
                  </Link>
                </div>
              </div>
              <div className='btnGroupCol1__2'>
                <div className='LoginInfoWrapper__3'>
                  <Link
                    className="NotLoggerInbox__2"
                    to={'./login'}
                  ></Link>
                </div>
              </div>
              <div className='btnGroupCol1__2'></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header