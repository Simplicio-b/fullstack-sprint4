function BreadcrumbItem({ value }) {
    return (
        <li className="breadcrumbs__item breadcrumbs__item--active">
            <span className="breadcrumbs__link">{value}</span>
        </li>
    
    );
}

export default BreadcrumbItem;
