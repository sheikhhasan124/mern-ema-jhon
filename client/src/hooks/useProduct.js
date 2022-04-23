import {useState, useEffect} from 'react'
const useProducts=()=>{

    const [prducts, setProducts]= useState([])

     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
     },[]);

     return [prducts, setProducts]

}
export default useProducts;