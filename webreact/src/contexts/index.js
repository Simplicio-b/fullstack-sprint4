import { MensagemProvider } from './mensagem';
import { CatgoriasProvider } from './categorias';
import { ProductsProvider } from './products';
import { LoadingProvider } from './loading';

function GlobalProvider({ children }) {
    return (
        <MensagemProvider>
            <CatgoriasProvider>
                <ProductsProvider>
                    <LoadingProvider>
                        {children}
                    </LoadingProvider>
                </ProductsProvider>
            </CatgoriasProvider>
        </MensagemProvider>
    )
}

export default GlobalProvider;
