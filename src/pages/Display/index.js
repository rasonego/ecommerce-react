import axios from "axios";
import DisplayCard from "./styles";
import DisplayProducts from "../../components/DisplayProducts";
import { useState, useEffect } from "react";

const ProductDisplay = () => {
  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProdutos(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <DisplayCard>
      {produtos.map((product, i) => (
        <DisplayProducts key={i} product={product} />
      ))}
    </DisplayCard>
  );
};

export default ProductDisplay;
