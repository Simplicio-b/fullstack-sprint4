// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'

function App() {
  return (
    <>
      <Mensagem type="danger" />
      
      <Header />
      <ProdutcsPage />
      <Footer />
    </>
  );
}

export default App;
