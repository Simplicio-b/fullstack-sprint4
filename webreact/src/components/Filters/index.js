import React, { useContext } from 'react';
import FilterItem from "../FilterItem"

// context
import { ProductsContext } from '../../contexts/products'

function Filters() {
  const productsContext = useContext(ProductsContext)
  const { products } = productsContext

    return (
        <section class="main__filters filters">
            <ul class="filters__list">
                {
                  products.filters.map(filter =><FilterItem key={filter.id} label={filter.label} /> )
                }
            </ul>
        </section>
    )
}

export default Filters;
