import { createContext, useEffect, useState } from "react"
import Item from "../components/Item"
import banner from '../assets/banner.png'
import products from '../products.json'
import { useLocation } from "react-router-dom";

// 1 - Criar um contexto
export const Contexto = createContext();

export default function Products() {
  const [productList, setProductList] = useState([])
  const [count, setCount] = useState(0); // quantidade de compras realizadas
  const [buttonActived, setButtonActived] = useState(false)

  let { state } = useLocation();
  let menuOptionSelected = state.menuOptionSelected;

  useEffect(() => {
    let listaFiltrada = []; // lista temporária para armazenar os produtos filtrados
    if(menuOptionSelected !== '' ){ // verificar se a opção do menu foi selecionada
      listaFiltrada = products.bottles.filter(product => product.title === menuOptionSelected); // filtrar
      setProductList(listaFiltrada);
    } else { // se usuário não selecionou nenhuma opção 
      setProductList(products.bottles);
    }
  }, [menuOptionSelected]);

  return (
    <div className="content-product">
      <header>
        <div className="user">
          <span>Usuário X: <span>{count}</span> compras</span>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="main-products">
        {/* 2 - Prover o contexto */}
        {/* https://react.dev/reference/react/createContext#provider
        Context.Provider: é um componente que 'fornece/provém' os dados do contexto (declarados no value), bem como as suas mudanças, aos seus 'consumidores' 
        Todos os componentes dentro de Context.Provider poderão utilizar o contexto Context. 
        */}
        <Contexto.Provider value={setCount}>
          {productList.map((p, index) => (
            <Item key={index} product={p} buttonActived={buttonActived} setButtonActived={setButtonActived} menuOptionSelected={menuOptionSelected}/>
          ))}
        </Contexto.Provider>
      </section>
      <footer>      
        {/* <h1>I've rendered {count} times!</h1> */}
      </footer>
    </div>
  )
}
