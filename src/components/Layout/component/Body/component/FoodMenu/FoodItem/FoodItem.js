
import { Link } from 'react-router-dom';
import './FoodItem.scss'
import foodImage from '../../../../../../../assets/image/background/foodMenuItem.jpg';

const FoodItem = () => {
  return (
    <div className='foodmenu-items__container'>
        <Link
            to={'/Restaurants'}
            className='fooditems__container'
        >
            <div className='fooditems'>
                <div className='fooditems-heading__wrapper'>
                    <div className='fooditems-heading'>
                        <div className='food-image__wrapper'>
                            <img src={foodImage}
                                alt='food'
                                className='food-image'
                            />
                        </div>
                        <div className='tag-head'>Promo</div>
                        <div className='tag-tail'></div>
                    </div>
                </div>
                        
            <div className='fooditems-details'>
                <p className='fooditems-name'>Phở Gà Ngon 47</p>
                            
                <div className='fooditems-info'>
                    <div className='fooditems-info__tag'>Bún-Phở-Cháo, Tạp Dề Bạc</div>
                    <div className='fooditems-info__list'>
                        <div className='fooditems-rating'>
                            <div className='fooditems-rating__icon'></div>
                            4.5
                        </div>
                        <div className='fooditems-delivery'>
                            <div className='delivery-clock'></div>
                                20 phút<li className='dot-item'></li> 0,5 km
                            </div>
                        </div>
                    </div>
                            
                    <div className='fooditems-discount'>
                        <div className='discount-icon'></div>
                        <span className='discount-text'>Ưu đãi đến 49k</span>
                    </div>
                            
                </div>                
            </div>
        </Link>
    </div>
  )
}

export default FoodItem