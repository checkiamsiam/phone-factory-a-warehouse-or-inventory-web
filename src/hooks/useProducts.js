import { useEffect, useState } from "react";
import axios from 'axios';

const useProducts = () => {
  const [recall , setRecall] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(async res => setProducts(res.data))
  }, [recall]);
  return [products, setProducts , recall , setRecall]
}
export default useProducts;