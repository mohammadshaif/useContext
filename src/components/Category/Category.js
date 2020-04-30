import React, { useEffect, useState, useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import foods from '../foodData';

const Category = () => {
  //fake data
  //const allProducts = foods
  const [catagories] = useContext(CategoryContext)
  const [items, setItems] = useState([])
  
  const [allProducts, setAllProducts] = useState([]) 
  useEffect(() => {
    fetch('https://secret-tundra-37169.herokuapp.com/foods/')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data)
        // const matchPd = data.filter(pd => pd.catagories === catagories)
        // setItems(matchPd)
      })

  }, [])
// ok vai
  useEffect(() => {
    const matchPd = allProducts.filter(pd => pd.catagories === catagories)
    setItems(matchPd)
  }, [catagories,allProducts])

  return (
    <div style={{ "display": "flex" }}>
      {

        items.map(pd => <CategoryDetail
          key={pd.id}
          product={pd}></CategoryDetail>)

      }
    </div>
  );
};

export default Category;