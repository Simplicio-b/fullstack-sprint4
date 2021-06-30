// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'
import Loading from './components/Loading'

// Providers
import { MsgContext } from './contexts/mensagem'
import { CatgoriasContext } from './contexts/categorias'
import { ProductContext } from './contexts/products'
import { LoadContext } from './contexts/loading'
 
function App() {
  return (
    <>
      <LoadContext>
        <Loading />
        <MsgContext>
          <Mensagem />
          <CatgoriasContext>
            <ProductContext>
              <Header />
              <ProdutcsPage />
            </ProductContext>
          </CatgoriasContext>
        </MsgContext>
      </LoadContext>

      <Footer />
    </>
  );
}

export default App;
