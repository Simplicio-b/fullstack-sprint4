// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'

import { MsgContext } from './contexts/mensagem'
import { CatgoriasContext } from './contexts/categorias'

function App() {
  return (
    <>

      <MsgContext>
        <Mensagem />
        
        <CatgoriasContext>
          <Header />
        </CatgoriasContext>

        <ProdutcsPage />
      </MsgContext>

      <Footer />
    </>
  );
}

export default App;
