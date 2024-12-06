import { useContext, useState } from "react"
// 3 - Consumir o contexto
import { Contexto } from '../pages/Products'

/** Componente que redenriza os controles de quantidade de um produto
    @param {object} props - Objeto com as propriedades do componente
    @returns {JSX.Element} - Elemento com os controles de quantidade de um produto 
**/
const QuantityBuy = (props) => {
    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const product = props.product

    // 4 - Usar o contexto
    const setCount = useContext(Contexto);
    
    // Função para subtrair o valor da quantidade de um produto
    const minus = () => {
        (quantity - 1) === 1 ? setValueButton(true) : setValueButton(false)
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }

    // Função para somar valor da quantidade de um produto
    const plus = () => {
        setValueButton(false)
        setQuantity(quantity + 1)
    }

    // Função para comprar um produto informando o preço final
    const buyProduct = () => {
        if (window.confirm(`Preço final: ${Math.round((product.price * quantity) * 100) / 100}`)) {
            alert('Produto comprado com sucesso!')
            setQuantity(1)

            //Adicionando mais uma compra
            setCount(value => value + 1)
        }
    }

    return (
      <div className="buttons-product">
          {/* Exemplo de comentário dentro do html */}
          <div className="quantity">
          <span >Quantidade:</span>
          <button disabled={valueButton} className="minus" onClick={minus}>-</button>
          <span>{quantity}</span>
          <button className="plus" onClick={plus}>+</button>
        </div>
            <button className="buy" onClick={buyProduct}>Comprar</button>
      </div>
    );
}

export default QuantityBuy;