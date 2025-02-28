import React, { useEffect, useContext } from 'react';

// contextos 
import { MensagemContext } from '../../contexts/mensagem';
import { ProductsContext } from '../../contexts/products';
import { LoadingContext } from '../../contexts/loading';

// models 
import ProductsModel from '../../models/Products'
import FilterModel from '../../models/Filters'

// components
import Product from '../Product';
import Breadcrumbs from '../Breadcrumbs';
import Filters from '../Filters';

// hooks
import { useFetch } from '../../hooks/useFetch';

function ProductsPage() {
    const [result, load, error] = useFetch("http://localhost:3000/data/products.json");
    
    const contextMensagem = useContext(MensagemContext);
    const { mensagem, setMensagem } = contextMensagem;

    const productsContext = useContext(ProductsContext);
    const { products, setProducts } = productsContext;

    const contextLoading = useContext(LoadingContext);
    const { loading, setLoading } = contextLoading;
    
    useEffect(() => {
      setLoading({...loading, show: load });
      
      if(error) {
          setMensagem({ 
              ...mensagem, 
              type: "danger", 
              show: true, 
              text: "Error ao carregar os produtos!"
          });
      }

      if(!error) {
          const Products = result ? result.products : [];
          const Filter =  result ?  result.filters : [];
     
          setMensagem({ 
              ...mensagem, 
              type: "success", 
              show: true, 
              text: "Produtos carregadas com sucesso!"
          });

          setProducts({ 
              ...products, 
              products_imutable: Products.map((p) => new ProductsModel(p.sku, p.image, p.name, p.price)),
              products: Products.map((p) => new ProductsModel(p.sku, p.image, p.name, p.price)), 
              filters: Filter.map((f) => new FilterModel(f.id, f.label)) 
          });
        return () => {}
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, load]);

    return (
      <main className="main">
        <Breadcrumbs />
        <Filters />

        <section className="main__products products">
            <div id="produtosView">
              <div className="products__row">
                <ol className="products__list">
                  {
                    products.products.map((e, i) => <Product key={i} description={e.name} price={e.price} image={`${e.image}`} /> )
                  }
                </ol>
              </div>
            </div>
        </section>
      </main>
    );
}

export default ProductsPage;
