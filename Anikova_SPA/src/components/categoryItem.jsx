/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;
    return (
        <div className name="card">
            <div className name="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className name="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}…</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
