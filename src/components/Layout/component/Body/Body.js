
import FoodMenu from './component/FoodMenu/FoodMenu'
import HeaderBackground from './component/HeaderBackground/HeaderBackground'
import './Body.scss'
import { Link } from 'react-router-dom'
import Categories from './component/Categories/Categories'


const Body = ({className}) => {
  return (
  <body className={className} >
      <HeaderBackground />
    <div className='background-border'></div>
    
    <div className='body-container__wrapper'>
      <div className='body-container'>
        <div className='body-heading__wrapper'>
          <h1 className='body-heading'>
            <span>Ưu đãi GrabFood tại </span>
            <span className='green-text'>Hà Nội</span>  
          </h1>
        </div>
      </div>
    </div>
      <FoodMenu />
      <div className='btn'>
        <Link
          to={'/cuisines'}
          className="btn-link"
        >
          <button className='btn-1'>See all promotions</button>
        </Link >
      </div>

      {/* categories */}
      <Categories />
  </body>
  )
}

export default Body