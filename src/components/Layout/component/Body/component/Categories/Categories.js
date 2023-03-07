import { Link } from "react-router-dom";
import "./Categories.scss";
import catsItem from "../../../../../../../src/assets/image/background/catsItem.jpg";

const Categories = () => {
  return (
    <>
      <div className="categories-heading">
        There's something for everyone!
      </div>

      <div className="categories">
        <div className="cats">
          <div className="cats-item__wrapper">
            <Link
              to={'/cuisines'}
            >
              <div className="cats-item">
                <div className="cats-item__heading">
                  <img src={catsItem} className="cats-item__img" alt="cats-item"></img>
                </div>
                <div className="cats-item__title">Pizza</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories