import { useEffect } from "react";
import { api } from "../../services/api";
import {Ul, DivContainer, Quest } from "./styles";

function ProductsList({ productsFilter, setProducts, search, setSearch, addItemToCart }) {

  function removerSearch (setSearch) {
    setSearch("")
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  return (
    <DivContainer>
      {search !== "" && (
        <Quest>
          <div>
          <h2>Resultados para:</h2>
          <span>{search}</span>
          </div>
          <button onClick={() => removerSearch (setSearch)}>Limpar busca</button>
        </Quest>
      )}
      <Ul>
        {productsFilter.map((item) => (
          <li key={item.id} id={item.id} price={item.price}>
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <h5>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </h5>
            <button onClick={() => addItemToCart(item)}>Adicionar</button>
          </li>
        ))}
      </Ul>
    </DivContainer>
  );
}

export default ProductsList;
