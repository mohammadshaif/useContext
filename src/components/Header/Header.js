import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
// const allProducts=[
//     {name: 'Lenovo', catagories:'breakfast'},{name: 'Asus',catagories:'breakfast'},{name: 'Dell',catagories:'breakfast'},
//     {name: 'Samsung',catagories:'lunch'},{name: 'Nokia',catagories:'lunch'},{name: 'Apple',catagories:'lunch'},
//     {name: 'Canon',catagories:'dinner'},{name: 'Nikkon',catagories:'dinner'},{name: 'Sony',catagories:'dinner'},
// ]
const Header = () => {
    const [catagories,setCategory]= useContext(CategoryContext)
    return (
        <div>
            <h1>Select Product Category</h1>
            <button onClick={()=>setCategory('breakfast')}>breakfast</button>
            <button onClick={()=>setCategory('lunch')}>lunch</button>
            <button onClick={()=>setCategory('dinner')}>dinner</button>
        </div>
    );
};

export default Header;