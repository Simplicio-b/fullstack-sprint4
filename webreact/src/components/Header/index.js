import React, { useContext, useEffect } from 'react';

// contextos 
import { MensagemContext } from '../../contexts/mensagem'
import { CategoriaContext } from '../../contexts/categorias'
import { ProductsContext } from '../../contexts/products'
import { LoadingContext } from '../../contexts/loading'

// icons
import MenuIcon from '../../assets/menu.svg'
import CloseIcon from '../../assets/close.svg'
import LogoResposiveIcon from '../../assets/rchlo.svg'
import LogoIcon from '../../assets/riachuelo.svg'
import SearchIcon from '../../assets/search.svg'

// components
import Menu from '../Menu'

// hooks
import { useFetch } from '../../hooks/useFetch'

function Header() {
    
    const contextMensagem = useContext(MensagemContext)
    const { mensagem, setMensagem } = contextMensagem

    const contextCategoria = useContext(CategoriaContext)
    const { categorias, setCategorias } = contextCategoria

    const productsContext = useContext(ProductsContext)
    const { products, setProducts } = productsContext

    const contextLoading = useContext(LoadingContext)
    const { loading, setLoading } = contextLoading

    const [result, load, error] = useFetch("http://localhost:3000/data/categories.json");

    useEffect(() => {
        setLoading({...loading, show: load })

        if(error) {
            setMensagem({ 
                ...mensagem, 
                type: "danger", 
                show: true, 
                text: "Error ao carregar as categorias!"
            })
        }

        if(!error) {
            setMensagem({ 
                ...mensagem, 
                type: "success", 
                show: true, 
                text: "Categorias carregadas com sucesso!"
            })
            setCategorias({ 
                ...categorias, 
                all: result ? result.all : [], 
                current: result ?  result.current : [] 
            })
        }

        return
    }, [error, result, load])

    const filter = (event) => {
        const valueInput = event.target.value.toLocaleUpperCase()
        const res = products.products_imutable.filter(product => {
            if(product.name.toLocaleUpperCase().includes(valueInput)) {
                return product
            }
        })
        setProducts({ ...products, products: res })
    } 

    return (
        <header className="header">
            <div className="header__container">
            <div className="header__mobile">
                <div className="header__drawer menu header__drawer--active">
                <img className="menu__img" src={MenuIcon} alt="open menu" />
                <p className="menu__title">menu</p>
                </div>
                <div className="header__drawer close">
                <img src={CloseIcon} alt="close menu" />
                <p className="close__title">fechar</p>
                </div>
                <h1 className="header__logo">
                <img className="header__img" src={LogoResposiveIcon} alt="RCHLO" />
                </h1>
            </div>
            <div className="header__desktop">
                <h1 className="header__logo">
                <img className="header__img" src={LogoIcon} alt="Riachuelo" />
                </h1>
            </div>
            <div className="header__search">
                <img className="header__icon" src={SearchIcon} alt="Buscar" />
                <input className="header__input" type="search" placeholder="O que você está procurando?"
                onChange={filter} />
            </div>
    
            <Menu />
            </div>
        </header>
    );
} 

export default Header;
