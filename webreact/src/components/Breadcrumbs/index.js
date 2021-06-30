
import BreadcrumbItem from "../BreadcrumbItem";

const breadcrumbItems = ["Home", "Infatil", "Personagens", "Mario Bros"]

function Breadcrumbs() {

    return (
        <section class="main__breadcrumbs breadcrumbs">
            <nav>
                <ol class="breadcrumbs__list">
                    { 
                        breadcrumbItems.map((breadcrumb, index, arr) => {

                            if(index === (arr.length - 1)) {
                                return (
                                    <BreadcrumbItem value={breadcrumb} />
                                )
                            }
                            
                            return (
                                <>
                                    <BreadcrumbItem value={breadcrumb} />
                                    <li class="breadcrumbs__item  breadcrumbs__separator">/</li>
                                </>
                            )
                        })
                    }
                </ol>
            </nav>
        </section>
    );
}

export default Breadcrumbs;
