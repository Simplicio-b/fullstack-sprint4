// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'

import { MsgContext } from './contexts/mensagem'

function App() {
  return (
    <>

      <MsgContext>
        <Mensagem />
        <Header />
        <ProdutcsPage />
      </MsgContext>

      <Footer />
    </>
  );
}

export default App;
