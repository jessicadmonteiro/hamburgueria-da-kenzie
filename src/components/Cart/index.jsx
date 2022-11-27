import { Aside, DivContainer, EmptyBag } from "./style";

function Cart({ cart, removeFromCart, Total, setCart}) {

  function RemoverAll (setCart) {
   setCart([])
  }

  return (
    <Aside>
      <h2>Carrinho de compras</h2>
      <section>
        {cart.length === 0 && (
          <>
            <EmptyBag>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </EmptyBag>
          </>
        )}

        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
              <img src={item.img} alt="" />
              <span>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </span>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <DivContainer>
            <div>
              <h4>Total</h4>
              <h3>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Total)}
              </h3>
            </div>
            <button onClick={() => RemoverAll(setCart)}>Remover Todos</button>
          </DivContainer>
        )}
      </section>
    </Aside>
  );
}

export default Cart;
