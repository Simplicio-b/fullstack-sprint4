// components
import Header from './components/Header'
import Footer from './components/Footer'
import Mensagem from './components/Mensagem'
import ProdutcsPage from './components/ProductsPage'
import Loading from './components/Loading'

// Providers
import Provider from './contexts'
 
function App() {
  return (
    <>
      <Provider>
        <Loading />
        <Mensagem />
        <Header />
        <ProdutcsPage />
      </Provider>
      
      <Footer />
    </>
  );
}

export default App;
