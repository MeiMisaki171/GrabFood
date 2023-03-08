import "./Categories.scss";
import CatsItem from "./CatsItem/CatsItem";

const Categories = () => {
  return (
      <div className="categories">
        <div className="categories-heading">
          There's something for everyone!
        </div>
  
        <div className="categories-container__wrapper">
             <div className="categories-container">
                <CatsItem />
                <CatsItem />
                <CatsItem />
                <CatsItem />
                <CatsItem />
                <CatsItem />
                <CatsItem />
             </div>
        </div>
      </div>
  )
}

export default Categories