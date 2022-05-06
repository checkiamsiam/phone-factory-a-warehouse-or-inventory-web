import { useEffect, useState } from "react";
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://phone-factor.herokuapp.com/products')
      .then(data => setProducts(data.data))
  }, []);
  return [products, setProducts]
}
export default useProducts;