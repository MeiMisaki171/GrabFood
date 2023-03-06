
import FoodItem from './FoodItem/FoodItem';
import './FoodMenu.scss';


const FoodMenu = ({className}) => {
  return (
  <div className={className}>
    <div className='foodmenu'>
      <div className='foodmenu-container'>
        <div className='foodmenu-slide__wrapper'>
          <div className='foodmenu-silde'>
            <div className='foodmenu-items__wrapper'>
              <FoodItem />
              <FoodItem />
              <FoodItem />
              <FoodItem />
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
  )
}

export default FoodMenu