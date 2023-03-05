
import locationIcon from '../../../../../src/assets/image/icons/locationIcon.svg';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './search.scss'

const Search = ( {className} ) => {
  return (
    < div className={className}>
        <div className="search-container">
              
            <div className='search-text'>
                <div className="search-greating">
                    Good
                </div>
                <div className="search-heading">
                    Where should we deliver your food today?
                </div>
            </div>
            
            <div className='input-search'>
                <div className='map-icon__wrapper'>
                    <span className='map-icon'>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                </div>
                <input
                    className='search-input'
                    placeholder="Nhập địa chỉ của bạn"
                />
                <div className='location-icon__wrapper'>
                    <img
                        src={locationIcon}
                        alt="location icon"
                        className='location-icon'
                    />
                </div>                     
            </div>
              
            <div className='search-button__wrapper'>
                <button className='search-button'>
                    Tìm kiếm
                </button>
            </div >
              
        </div>
    </div>
  )
}

export default Search