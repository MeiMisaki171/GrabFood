
import FoodItem from './component/FoodItem/FoodItem'
import HeaderBackground from './component/HeaderBackground/HeaderBackground'
import './Body.scss'

const Body = ({className}) => {
  return (
  <body className={className} >
    <HeaderBackground />
    <div className='background-border'></div>
    <FoodItem className={'food-item'}/>
  </body>
  )
}

export default Body