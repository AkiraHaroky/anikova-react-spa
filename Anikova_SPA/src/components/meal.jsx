/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;
    return (
        <div className name="card">
            <div className name="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className name="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}
export { Meal };
