import {useState, useEffect} from 'react'
const useProducts=()=>{

    const [prducts, setProducts]= useState([])

     useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
     },[]);

     return [prducts, setProducts]

}
export default useProducts;