import React, { useContext } from 'react';
import BreadcrumbItem from "../BreadcrumbItem";

// context
import { CategoriaContext } from '../../contexts/categorias';

function Breadcrumbs() {
    const contextCategoria = useContext(CategoriaContext)
    const { categorias } = contextCategoria
 
    return (
        <section className="main__breadcrumbs breadcrumbs">
            <nav>
                <ol className="breadcrumbs__list">
                    { 
                        categorias.current.map((breadcrumb, index, arr) => {

                            if(index === (arr.length - 1)) {
                                return (
                                    <BreadcrumbItem key={breadcrumb.id} value={breadcrumb.name} />
                                )
                            }
                            
                            return (
                                <>
                                    <BreadcrumbItem key={breadcrumb.id} value={breadcrumb.name} />
                                    <li className="breadcrumbs__item  breadcrumbs__separator">/</li>
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
