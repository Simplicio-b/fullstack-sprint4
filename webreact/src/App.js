// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'

import { MsgContext } from './contexts/mensagem'
import { CatgoriasContext } from './contexts/categorias'
import { ProductContext } from './contexts/products'
 
function App() {
  return (
    <>

      <MsgContext>
        <Mensagem />
        
        <CatgoriasContext>
          <ProductContext>
            <Header />
            <ProdutcsPage />
          </ProductContext>
        </CatgoriasContext>

      </MsgContext>

      <Footer />
    </>
  );
}

export default App;
