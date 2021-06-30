import React from 'react';

function Product({ description, image, price }) {
    return (
        <li class="products__card">
            <div class="card">
                <img
                    class="card__img"
                    src={image}
                    alt=""
                />
                <p class="card__description">
                    {description}
                </p>
                <p class="card__price">R$ {price}</p>
            </div>
        </li>      
    );
}

export default Product;
