
import FoodMenu from './component/FoodMenu/FoodMenu'
import HeaderBackground from './component/HeaderBackground/HeaderBackground'
import './Body.scss'


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
          <FoodMenu className={'food-slide'} />
      </div>
    </div>
  </body>
  )
}

export default Body