import { useState } from "react"
import { useEffect } from "react"

const AllProducts = () =>{
    const[products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products]

}
export default AllProducts;