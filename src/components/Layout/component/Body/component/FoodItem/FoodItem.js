import './FoodItem.scss'

const FoodItem = ({className}) => {
  return (
  <div className={className}>
    <div className='fooditem'>
      <div className='fooditem-container'>
        <div className='fooditem-heading__wrapper'>
          <h1 className='fooditem-heading'>
            <span>Ưu đãi GrapFood tại </span>
            <span className='green-text'>Hà Nội</span>  
          </h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FoodItem