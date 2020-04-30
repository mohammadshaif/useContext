import React, { useEffect, useState, useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import foods from '../foodData';

const Category = () => {
  //fake data
   //const allProducts = foods
    const [catagories]= useContext(CategoryContext)
    const [items, setItems]= useState([])
    console.log(items);
    
  

    const [allProducts, setAllProducts] = useState([]) 
    // console.log(allProducts.title) 
useEffect(()=>{
    fetch('https://secret-tundra-37169.herokuapp.com/foods/')
    .then(response => response.json())
    .then(data => {
      setAllProducts(data)
    })
    
},[])

    useEffect(()=>{
        const matchPd = allProducts.filter(pd=>pd.catagories===catagories)
        setItems(matchPd)
    },[catagories])

    return (
        <div style={{"display":"flex"}}>
          {
              
              items.map(pd=><CategoryDetail 
                key = {pd.id}
                product={pd}></CategoryDetail>)
             
          }
        </div>
    );
};

export default Category;