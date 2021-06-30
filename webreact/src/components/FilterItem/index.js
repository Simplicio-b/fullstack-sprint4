
import FilterIcon from "../../assets/filter.svg"

function FilterItem({ label }) {
    return (

        <li className="filters__item">
            <span className="filters__label">{label}</span>
            <img className="filters__img" src={FilterIcon} alt="" />
        </li>
    )
}

export default FilterItem;
