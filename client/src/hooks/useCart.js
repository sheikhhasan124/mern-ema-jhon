import {useState,useEffect} from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart=(prducts)=>{
    const [cart,setCart]= useState([])

    useEffect(()=>{
       const storedCart = getStoredCart()
       const savedCart = [];
       for(const id in storedCart){
          const addedProduct = prducts.find(prduct=>prduct.id === id);
          if(addedProduct){
              const quantity =storedCart[id];
              addedProduct.quantity=quantity;
              savedCart.push(addedProduct)
          }
       }
       setCart(savedCart)
    },[prducts])
    return [cart,setCart];
}
export default useCart;