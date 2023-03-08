import { Link } from 'react-router-dom';

import './CatsItem.scss'
import catsItem from '../../../../../../../assets/image/background/catsItem.jpg';

const CatsItem = () => {
    
return (
    <div className='col6 col8 col12'>
                <Link
                    to={'/cuisines'}
                    className='cats-item__wrapper'
                >
                    <div className="cats-item__container">
                        <div className="cats-item__heading">
                            <div className='img-wrapper'>
                                <img src={catsItem} className="cats-item__img" alt="cats-item"></img>
                            </div >
                        </div>
                        <div className="cats-item__title"><span>Pizza</span></div>
                    </div>
                </Link>
            </div >
  )
}

export default CatsItem